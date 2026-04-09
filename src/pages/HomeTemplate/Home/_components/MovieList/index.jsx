import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList } from "@pages/HomeTemplate/Home/movieSlice";
import MovieCard from "./MovieCard";

const TAB_PLAYING = "playing";
const TAB_UPCOMING = "upcoming";

function moviesForTab(movies, tab) {
    const playing = movies.filter((m) => m.dangChieu === true);
    const upcoming = movies.filter((m) => m.sapChieu === true);
    if (tab === TAB_PLAYING) {
        return playing.length > 0 ? playing : movies;
    }
    return upcoming;
}

function MovieListSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={`sk-${i}`} className="animate-pulse">
                    <div className="aspect-[2/3] rounded-xl bg-zinc-800" />
                    <div className="mt-6 h-6 w-3/4 rounded bg-zinc-800" />
                    <div className="mt-2 h-4 w-full rounded bg-zinc-800/80" />
                </div>
            ))}
        </div>
    );
}

export default function MovieList() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.movieReducer);

    const movies = useMemo(() => {
        return Array.isArray(data) ? data : [];
    }, [data]);

    const refetch = useCallback(() => {
        dispatch(fetchMovieList());
    }, [dispatch]);

    useEffect(() => {
        refetch();
    }, [refetch]);

    const [tab, setTab] = useState(TAB_PLAYING);

    const visible = useMemo(() => moviesForTab(movies, tab), [movies, tab]);

    return (
        <section
            id="movie-list"
            className="mx-auto max-w-7xl px-8 py-24"
            aria-labelledby="movie-list-heading"
        >
            <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
                <div>
                    <h2
                        id="movie-list-heading"
                        className="mb-4 font-sans text-4xl font-black uppercase tracking-tight text-white"
                    >
                        Movie list
                    </h2>
                    <div className="flex gap-8">
                        <button
                            type="button"
                            className={`cursor-pointer font-sans pb-2 text-lg font-bold transition-colors ${
                                tab === TAB_PLAYING
                                    ? "border-b-2 border-red-500 text-red-500"
                                    : "text-zinc-500 hover:text-white"
                            }`}
                            onClick={() => setTab(TAB_PLAYING)}
                        >
                            Now showing
                        </button>
                        <button
                            type="button"
                            className={`cursor-pointer font-sans pb-2 text-lg font-bold transition-colors ${
                                tab === TAB_UPCOMING
                                    ? "border-b-2 border-red-500 text-red-500"
                                    : "text-zinc-500 hover:text-white"
                            }`}
                            onClick={() => setTab(TAB_UPCOMING)}
                        >
                            Coming soon
                        </button>
                    </div>
                </div>
            </div>

            {loading ? (
                <MovieListSkeleton />
            ) : error ? (
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-zinc-900/50 py-16">
                    <p className="text-center text-sm text-zinc-400">{String(error)}</p>
                    <button
                        type="button"
                        className="rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white hover:bg-red-500"
                        onClick={() => refetch()}
                    >
                        Retry
                    </button>
                </div>
            ) : visible.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-zinc-900/40 py-16 text-center text-sm text-zinc-400">
                    {tab === TAB_UPCOMING
                        ? "No upcoming movies yet."
                        : "No movies in the list."}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {visible.map((movie) => (
                        <MovieCard
                            key={`movie-${movie?.maPhim}`}
                            movie={movie}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
