import useAnimeSearch from '../hooks/useAnimeSearch';
import AnimeCard from './AnimeCard';
import { GenreDropDown } from './GenreDropDown';

export const AnimeSearch = () => {
    const { animeData, searchTerm, setSearchTerm, loading } = useAnimeSearch();

    const onGenreSelection = (genre) => {
        console.log("Selected Genre in AnimeSearch:", genre);
        // Filter or update animeData based on the selected genre
        // You might want to re-fetch or filter data here
    };

    return (
        <div className="anime-search-container p-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for an Anime"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            <GenreDropDown onGenreSelection={onGenreSelection} />

            {loading && <p>Loading...</p>}
            <div className="anime-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {animeData.map((anime) => (
                    <AnimeCard key={anime._id || anime.id} anime={anime} />
                ))}
            </div>
        </div>
    );
};