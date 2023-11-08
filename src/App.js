import './App.css';
import Movie from './Movie';
import SearchIcon from './Search.svg'
import { useEffect, useState } from 'react';

const API_URL = 'https://www.omdbapi.com/?apikey=d51b737c';

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}



function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    try {
        const response = await fetch(`${API_URL}&s=${title}`);
        if (response.ok) {
            const data = await response.json();
            setMovies(data.Search);
        } else {
            console.error('API request failed:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('An error occurred while fetching data:', error);
    }
}

   useEffect(() => {
    if (searchTerm) {
        searchMovies(searchTerm);
    }
  }, [searchTerm]);
  return (
    <div className="app">
     <h1>MovieLand</h1>

     <div className="search">
      <input type='text' placeholder='Search Movie...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />

     </div>
     
     {
      movies?.length > 0
      ? (
        <div className='container'>
       {movies.map((movie) => (
        <Movie movie={movie}/>
       ))}
     </div>
      ) : (
        <div className="empty">
          <h2>
            No Movies Found!
          </h2>
        </div>
      )
     }
    </div>
  );
}

export default App;
