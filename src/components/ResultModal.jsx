export default function ResultModal({ ref, result, targetTime }) {
    return (
        <dialog ref={ref} className="result-modal">
            <h2>You {result}</h2>
            <p>the target time was {targetTime} second</p>
            <p>
                you stopped the timer with <strong>X second left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}
