import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainComponent from './Components/MainComponent';
import ProfileComponent from './Components/ProfileComponent'; 

// OMDB API Key
const OMDB_API_KEY = 'c30d7f3e';

const App = () => {
  const [harryPotterMovies, setHarryPotterMovies] = useState([]);
  const [lotrMovies, setLotrMovies] = useState([]);
  const [starWarsMovies, setStarWarsMovies] = useState([]);
  const [loadingHarryPotter, setLoadingHarryPotter] = useState(true);
  const [loadingLotr, setLoadingLotr] = useState(true);
  const [loadingStarWars, setLoadingStarWars] = useState(true);

  const [harryPotterIndex, setHarryPotterIndex] = useState(0);
  const [lotrIndex, setLotrIndex] = useState(0);
  const [starWarsIndex, setStarWarsIndex] = useState(0);

  // Stato per la visibilità del profilo
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  // Funzione per ottenere i film dall'API OMDB
  const getMovies = async (title) => {
    let allMovies = [];
    let page = 1;
    let totalResults = 0;

    while (true) {
      const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${OMDB_API_KEY}&page=${page}`);
      const data = await response.json();

      if (data.Response === "False" || !data.Search) {
        break;
      }

      allMovies = [...allMovies, ...data.Search];

      totalResults = parseInt(data.totalResults, 10);
      if (allMovies.length >= totalResults) {
        break;
      }

      page++;
    }

    return allMovies;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoadingHarryPotter(true);
      setLoadingLotr(true);
      setLoadingStarWars(true);

      const harryPotter = await getMovies('Harry Potter');
      const lotr = await getMovies('Lord of the Rings');
      const starWars = await getMovies('Star Wars');

      setHarryPotterMovies(harryPotter);
      setLotrMovies(lotr);
      setStarWarsMovies(starWars);

      setLoadingHarryPotter(false);
      setLoadingLotr(false);
      setLoadingStarWars(false);
    };

    fetchMovies();
  }, []);

  const nextBlock = (index, setIndex, totalBlocks) => {
    if (index < totalBlocks - 1) {
      setIndex(index + 1);
    }
  };

  const prevBlock = (index, setIndex) => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const LoadingSpinner = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  // Funzione per cambiare lo stato del profilo
  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible); // Toggle tra mostrare il profilo o il main content
  };

  return (
    <div>
      {/* Header che contiene la Navbar */}
      <header>
        <Navbar toggleProfile={toggleProfile} /> {/* Passiamo la funzione alla Navbar */}
      </header>

      {/* Condizione per visualizzare il contenuto o il profilo */}
      {isProfileVisible ? (
        <ProfileComponent /> // Mostra il profilo
      ) : (
        <main className="pt-5">
          {/* Caricamento Harry Potter */}
          {loadingHarryPotter ? (
            <LoadingSpinner />
          ) : (
            harryPotterMovies.length > 0 && (
              <MainComponent
                movies={harryPotterMovies}
                title="Harry Potter"
                currentIndex={harryPotterIndex}
                setIndex={setHarryPotterIndex}
                nextBlock={() => nextBlock(harryPotterIndex, setHarryPotterIndex, Math.ceil(harryPotterMovies.length / 6))}
                prevBlock={() => prevBlock(harryPotterIndex, setHarryPotterIndex)}
              />
            )
          )}

          {/* Caricamento Lord of the Rings */}
          {loadingLotr ? (
            <LoadingSpinner />
          ) : (
            lotrMovies.length > 0 && (
              <MainComponent
                movies={lotrMovies}
                title="Lord of the Rings"
                currentIndex={lotrIndex}
                setIndex={setLotrIndex}
                nextBlock={() => nextBlock(lotrIndex, setLotrIndex, Math.ceil(lotrMovies.length / 6))}
                prevBlock={() => prevBlock(lotrIndex, setLotrIndex)}
              />
            )
          )}

          {/* Caricamento Star Wars */}
          {loadingStarWars ? (
            <LoadingSpinner />
          ) : (
            starWarsMovies.length > 0 && (
              <MainComponent
                movies={starWarsMovies}
                title="Star Wars"
                currentIndex={starWarsIndex}
                setIndex={setStarWarsIndex}
                nextBlock={() => nextBlock(starWarsIndex, setStarWarsIndex, Math.ceil(starWarsMovies.length / 6))}
                prevBlock={() => prevBlock(starWarsIndex, setStarWarsIndex)}
              />
            )
          )}
        </main>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
