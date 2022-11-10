import './styling/MostWanted.css'
 import React, {useEffect, useState, useContext} from "react";
 import HeroSearch from "./HeroSearch";
 import useDebounce from "./useDebounce";
 import CharacterContext from "./CharacterContext";
 import { Link } from "react-router-dom";

 // ==================
// troubleshooting.
// {resultLocal.map((result) => (
//   <Link to={`/characters/${resultLocal.id}`} onClick={() => {
//      setCharacterCon(resultLocal)
//    }} key={resultLocal.id}  className="Hero">
//             <div className="box" key={resultLocal.id}>
//             <div className="left">
//               <img src={resultLocal.image.url} alt=''  height="150" padding="0" margin="0"/>
//               </div>
//               <div className="right">
//                 MAGNETO
//               </div>
//             </div>
//   </Link>
//   ))}
//   ==================

let resultLocal = [];

function SearchIndividuals(searchPhrase) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(false)
  const debouncedSearchTerm = searchPhrase;

/*  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        setError(false);
        HeroSearch(debouncedSearchTerm).then((resultLocal) => {
          if (!resultLocal) {
              setIsSearching(false)
              setError(true)
              setResults([])
          } else {
            setIsSearching(false);
            setResults(resultLocal);

          }
        });
      } else {
        setResults([]);
        setIsSearching(false);
  }

    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );
  */}

function MostWanted() {
  const [results, setResults] = useState([]);
  const {setCharacterCon} = useContext(CharacterContext)

//  SearchIndividuals('MAGNETO');

  return (
    <>
      <hr />
      <div className="head">
            <div className="center">
              <h1 id='title-most-wanted'>Top 10 <br />Most Wanted</h1>
            </div>
          </div>
          <hr />
          <div className="box">
            <div className="left">
              <img src="https://www.superherodb.com/pictures2/portraits/10/100/12.jpg" height="150" padding="0" margin="0" />
            </div>
            <div className="right">
              MAGNETO
            </div>
          </div>
          <hr />
          <div className="box">
            <div className="left">
              <img src="https://www.superherodb.com/pictures2/portraits/10/100/667.jpg" height="150" padding="0" margin="0" />
            </div>
            <div className="right">
              CYBORG SUPERMAN
            </div>
          </div>
          <hr />
          <div className="box">
              <div className="left">
              <img src="https://www.superherodb.com/pictures2/portraits/10/100/10090.jpg" height="150" /></div>
            <div className="right">DEADPOOL</div>
            </div>
            <hr />
          <div className="box">
              <div className="left">
              <img src="https://www.superherodb.com/pictures2/portraits/10/100/1.jpg" height="150" /></div>
            <div className="right">ABOMINATION</div>
            </div>
            <hr />
          <div className="box">
              <div className="left">
              <img src="https://www.superherodb.com/pictures2/portraits/10/100/1322.jpg" height="150" /></div>
            <div className="right">MEPHISTO</div>
            </div>
            <hr />
          <div className="box">
              <div className="left">
              <img src="https://www.superherodb.com/pictures2/portraits/10/100/1075.jpg" height="150" /></div>
            <div className="right">CY-GOR</div>
            </div>
            <hr />
          <div className="box">
              <div className="left">
              <img src="https://www.superherodb.com/pictures2/portraits/10/100/817.jpg" height="150" /></div>
            <div className="right">MYSTIQUE</div>
            </div>
            <hr />
          <div className="box">
              <div className="left">
              <img src="https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg" height="150" /></div>
            <div className="right">THANOS</div>
            </div>
            <hr />
          <div className="box">
              <div className="left">
              <img src="https://www.superherodb.com/pictures2/portraits/10/100/1358.jpg" height="150" /></div>
            <div className="right">AIR-WALKER</div>
            </div>
            <hr />
          <div className="box">
              <div className="left">
              <img src="https://www.superherodb.com/pictures2/portraits/10/100/792.jpg" height="150" /></div>
            <div className="right">SWAMP THING</div>
        </div>
        <hr />
    </>
  )
}

export default MostWanted;
