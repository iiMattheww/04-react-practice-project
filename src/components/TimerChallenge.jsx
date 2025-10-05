import { useState, useRef } from "react";
export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef();

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimerStarted(true);
    }
    function handleStop() {
        setTimerStarted(false);
        setTimerExpired(false);
        clearTimeout(timer);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime !== 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? "Stop" : "Start"} challenge
                </button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "Timer is active" : "Timer is inactive"}
            </p>
        </section>
    );
}
