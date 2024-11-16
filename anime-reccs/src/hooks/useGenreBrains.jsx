import { useState, useEffect } from "react";
import { fetchGenres} from "./fetchGenres";

export const useGenreBrains = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chosenGenre, setChosenGenre] = useState("");
    const [genres, setGenres] = useState([]);

    const toggleDropDown = () => setIsOpen((prev) => !prev);

    const selectGenre = (genre) => setChosenGenre(genre);

    useEffect(() => {
        const getGenres = async () => {
            try {
                const genreData = await fetchGenres(); 
                console.log("Fetched genre data:", genreData);
                setGenres(genreData);
            } catch (error) {
                console.log("Error fetching genres:", error);
            }
        };
        getGenres();
    }, []);

    return {
        isOpen,
        chosenGenre,
        toggleDropDown,
        genres,
        selectGenre,
    };
};