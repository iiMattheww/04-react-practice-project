import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
    ref,
    targetTime,
    remainingTime,
    onReset,
}) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const result = userLost ? "lost" : "won";
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => ({
        open: () => dialog.current.showModal(),
    }));

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>the target time was {targetTime.toFixed(2)} second</p>
            <p>
                you stopped the timer with{" "}
                <strong>{formattedRemainingTime} second left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
}
