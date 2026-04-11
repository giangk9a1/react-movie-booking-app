import BannerCarousel from "./BannerCarousel";
import MovieList from "./MovieList";
import Theater from "./Theater";

export default function Home() {
    return (
        <div className="flex w-full flex-col gap-3">
            <BannerCarousel />
            <MovieList />
            <Theater />
        </div>
    );
}
