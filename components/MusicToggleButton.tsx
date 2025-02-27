"use client";
import { useEffect, useRef, useState } from "react";

const MusicToggleButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            audioRef.current = new Audio("/baihat.mp3");
        }
    }, []);

    useEffect(() => {
        const handlePlayMusic = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.play();
                setIsPlaying(true);
            }
        };

        // Phát nhạc khi người dùng scroll, click hoặc chạm vào màn hình
        window.addEventListener("scroll", handlePlayMusic, { once: true });
        document.addEventListener("click", handlePlayMusic, { once: true });
        document.addEventListener("touchstart", handlePlayMusic, { once: true });

        return () => {
            window.removeEventListener("scroll", handlePlayMusic);
            document.removeEventListener("click", handlePlayMusic);
            document.removeEventListener("touchstart", handlePlayMusic);
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <button id="toggle-music" className="music-button" onClick={togglePlay}>
            {isPlaying ? (
                <span className="icon-play">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
                        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
                    </svg>
                </span>
            ) : (
                <span className="icon-mute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" className="bi bi-volume-mute-fill" viewBox="0 0 16 16">
                        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                </span>
            )}
        </button>
    );
};

export default MusicToggleButton;
