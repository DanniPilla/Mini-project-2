import {useState, useEffect} from "react"
import {fetchAnime} from "../AnimeApi"

const AnimeSearch = () =>{
    const [animeData, setAnimeData] = useState([]);
    const [searchTerm, setSearchTerm]=useState("");
    const [loading, setLoading]= useState(false);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    useEffect(()=>{
        const timerId = setTimeout(() => setDebouncedSearchTerm(searchTerm),500)
    return ()=>clearTimeout(timerId)
    }, [searchTerm])
 
    useEffect(()=>{
        const getAnime = async () => {
            if(debouncedSearchTerm){
                setLoading(true);
                try{
                    const data = await fetchAnime(searchTerm);
                    setAnimeData(data.results || []);
                } catch (error){
                    console.log("Error fetching request", error)
                }
                setLoading(false);
            }
        }
        getAnime();
    },[debouncedSearchTerm]);

    return (
        <div>
            <input
            type="text"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            placeholder="Search for an Anime"
            />
            {loading && <p>Loading...</p>}
            <ul>
                {animeData.map((anime)=> (
                    <li key={anime.mal_id}>
                    <h3>{anime.title}</h3>
                    <img src={anime.image_url} alt={anime.title}/>
                    <p>{anime.synopsis}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AnimeSearch 