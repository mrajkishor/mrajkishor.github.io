import { WebWorkerMLCEngineHandler } from '@mlc-ai/web-llm';

// Runs entirely off the main thread.
// All model loading and inference happens here via WebGPU,
// keeping the UI fully responsive during generation.
const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg: MessageEvent) => {
  handler.onmessage(msg);
};
