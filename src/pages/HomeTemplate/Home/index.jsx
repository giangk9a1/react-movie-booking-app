import BannerCarousel from "./_components/BannerCarousel";
import MovieList from "./_components/MovieList";

export default function Home() {
    return (
        <div className="w-full">
            <BannerCarousel />
            <MovieList />
        </div>
    );
}
