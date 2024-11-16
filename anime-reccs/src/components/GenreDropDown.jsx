import { useGenreBrains } from '../hooks/useGenreBrains';

export const GenreDropDown = ({ onGenreSelection }) => {
    const { isOpen, chosenGenre, toggleDropDown, genres, selectGenre } = useGenreBrains();

    const handleGenreClick = (genre) => {
        selectGenre(genre); // Update the chosen genre in GenreBrains
        onGenreSelection(genre); // Notify AnimeSearch of the selection
        toggleDropDown(); // Close dropdown
    };

   return (
    <div className="dropdown">
      <button onClick={toggleDropDown}>
        {chosenGenre || "Select Genre"}
      </button>
      {isOpen && (
        <ul>
          {genres.map((genre) => (
  <li key={genre._id} onClick={() => onGenreSelection(genre.title)}>
    {genre.title}
  </li>
))}
        </ul>
      )}
    </div>
  );
};