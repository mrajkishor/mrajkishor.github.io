import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CrystalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(1); // always 1 — no high-DPI overhead
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // ── Scene + Camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 10);

    // ── Lights ────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.08));
    const lights = [
      { color: 0x38bdf8, pos: [0, 0, 6],  intensity: 1.0 },
      { color: 0x818cf8, pos: [-8, 4, 2], intensity: 0.7 },
      { color: 0x34d399, pos: [8, -4, 2], intensity: 0.7 },
    ];
    lights.forEach(({ color, pos, intensity }) => {
      const l = new THREE.PointLight(color, intensity, 25);
      l.position.set(...(pos as [number, number, number]));
      scene.add(l);
    });

    // ── Crystal shards (fewer = faster) ──────────────────────────────────────
    const palette = [0x38bdf8, 0x818cf8, 0x34d399, 0xa78bfa, 0x67e8f9, 0xfb7185];
    const geo = new THREE.OctahedronGeometry(1, 0);

    interface CrystalObj {
      solid: THREE.Mesh;
      wire:  THREE.Mesh;
      speed: THREE.Vector3;
      floatSpeed: number;
      floatAmp:   number;
      baseY:      number;
      phase:      number;
    }

    const crystals: CrystalObj[] = Array.from({ length: 12 }, (_, i) => {
      const color = palette[i % palette.length];
      const scale = 0.3 + Math.random() * 0.9;

      const solid = new THREE.Mesh(
        geo,
        new THREE.MeshPhongMaterial({ color, transparent: true, opacity: 0.10, shininess: 80 })
      );
      const wire = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.28 })
      );

      const px = (Math.random() - 0.5) * 22;
      const py = (Math.random() - 0.5) * 13;
      const pz = (Math.random() - 0.5) * 8 - 4;

      solid.position.set(px, py, pz);
      solid.scale.setScalar(scale);
      wire.position.set(px, py, pz);
      wire.scale.setScalar(scale * 1.02);

      scene.add(solid);
      scene.add(wire);

      return {
        solid, wire,
        speed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.15,
        ),
        floatSpeed: 0.3 + Math.random() * 0.4,
        floatAmp:   0.15 + Math.random() * 0.3,
        baseY: py,
        phase: Math.random() * Math.PI * 2,
      };
    });

    // ── Particle field (lightweight) ──────────────────────────────────────────
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    const pColors   = new Float32Array(particleCount * 3);
    const pPalette  = [new THREE.Color(0x38bdf8), new THREE.Color(0x818cf8), new THREE.Color(0x34d399)];
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 3;
      const c = pPalette[i % 3];
      pColors[i * 3] = c.r; pColors[i * 3 + 1] = c.g; pColors[i * 3 + 2] = c.b;
    }
    const pgeo = new THREE.BufferGeometry();
    pgeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pgeo.setAttribute('color',    new THREE.BufferAttribute(pColors, 3));
    const particles = new THREE.Points(
      pgeo,
      new THREE.PointsMaterial({ size: 0.055, vertexColors: true, transparent: true, opacity: 0.55 })
    );
    scene.add(particles);

    // ── Mouse parallax ────────────────────────────────────────────────────────
    const mouse    = { x: 0, y: 0 };
    const targetCam = { x: 0, y: 0 };
    const onMouse  = (e: MouseEvent) => {
      mouse.x =  (e.clientX / window.innerWidth  - 0.5) * 2.5;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener('mousemove', onMouse);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ── Animation loop — capped at ~30 fps to save GPU ────────────────────────
    let frameId: number;
    let last = 0;
    const FPS_CAP = 1000 / 30;
    const clock = new THREE.Clock();

    const animate = (now: number) => {
      frameId = requestAnimationFrame(animate);
      if (now - last < FPS_CAP) return; // skip frame if too soon
      last = now;

      const t = clock.getElapsedTime();

      // smooth camera
      targetCam.x += (mouse.x - targetCam.x) * 0.025;
      targetCam.y += (mouse.y - targetCam.y) * 0.025;
      camera.position.x = targetCam.x;
      camera.position.y = targetCam.y;
      camera.lookAt(0, 0, 0);

      crystals.forEach((c) => {
        const dt = 0.033; // fixed delta ~30fps
        c.solid.rotation.x += c.speed.x * dt;
        c.solid.rotation.y += c.speed.y * dt;
        c.solid.rotation.z += c.speed.z * dt;
        c.wire.rotation.copy(c.solid.rotation);
        const fy = c.baseY + Math.sin(t * c.floatSpeed + c.phase) * c.floatAmp;
        c.solid.position.y = fy;
        c.wire.position.y  = fy;
      });

      particles.rotation.y = t * 0.010;
      particles.rotation.x = t * 0.005;

      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geo.dispose();
      pgeo.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030610] via-[#060c1a] to-[#030810]" />
      {/* Subtle colour orbs */}
      <div className="absolute top-1/4  left-1/3  w-[500px] h-[500px] bg-blue-700/5   rounded-full blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-violet-700/5 rounded-full blur-[110px]" />
      {/* Three.js canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Dark vignette overlay — keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
    </div>
  );
}
