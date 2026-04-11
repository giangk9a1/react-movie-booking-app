export default function ErrorBox({ message, onRetry }) {
    return (
        <div className="flex w-full max-w-full min-w-0 flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-zinc-900/50 px-3 py-16">
            <p className="break-words text-center text-sm text-zinc-400">
                {message}
            </p>

            <button
                type="button"
                onClick={onRetry}
                className="rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white hover:bg-red-500"
            >
                Retry
            </button>
        </div>
    );
}
