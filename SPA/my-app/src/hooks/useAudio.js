
import React, { useState, useEffect } from 'react';

var SingletonFactory = (function () {
    var instance;
    return {
        getInstance: function (url) {
            if (instance == null) {
                instance = new Audio(url);
                // Hide the constructor so the returned object can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
    };
})();

export const useAudio = url => {
    var audio_instance = SingletonFactory.getInstance(url);
    const [audio] = useState(audio_instance);
    //const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

