import React, {useEffect, useState, useContext} from "react";
import HeroSearch from "./HeroSearch";
import useDebounce from "./useDebounce";
import CharacterContext from "./CharacterContext";
import { Link } from "react-router-dom";

const MainSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState(false)
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const {setCharacterCon} = useContext(CharacterContext)
    
    // Effect for API call
    useEffect(
      () => {
        if (debouncedSearchTerm) {
          setIsSearching(true);
          setError(false);
          HeroSearch(debouncedSearchTerm).then((results) => {
            if (!results) {
                setIsSearching(false)
                setError(true)
                setResults([])
                console.log(error)
            } else {
            setIsSearching(false);
            setResults(results);
            }
            
          });
        } else {
          setResults([]);
          setIsSearching(false);
        }
      },
      [debouncedSearchTerm] // Only call effect if debounced search term changes
    );
    return (
      <>
        
        <input
          className='main-search-bar'
          placeholder="Search DOMA Database"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
     
        <div className="hero-results-container">
        {results.map((result) => (
          <Link to={`/characters/${result.id}`} onClick={() => {
            setCharacterCon(result)
        }} key={result.id}  className="Hero">
          <div className='hero-card' key={result.id}>
          <img src={result.image.url} alt='' className='hero-thumbnail'/>
            <h4>{result.name}</h4>
            
          </div>
          </Link>
        ))} 
          {error && <div className="error-message">No results found.</div>}
        </div>
        {isSearching && <div>Searching ...</div>}
        
      </>
    );
  }


export default MainSearch

