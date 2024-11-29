import React from 'react';

const MainComponent = ({
  movies,
  title,
  currentIndex,
  setIndex,
  nextBlock,
  prevBlock,
}) => {
  // Creiamo un array che contiene "fette" di 6 card per ogni carosello
  const chunkMovies = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const movieChunks = chunkMovies(movies, 6); // Qui dividiamo i film in "blocchi" di 6

  return (
    <div className="carousel-container mb-5">
      <h2 className="carousel-title">{title}</h2> {/* Applichiamo una classe per i titoli */}
      <div
        id={`carousel-${title.replace(/\s+/g, '-')}`}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicatori per il carosello (punti sotto le frecce) */}
        <div className="carousel-indicators">
          {movieChunks.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#carousel-${title.replace(/\s+/g, '-')}`}
              data-bs-slide-to={index}
              className={index === currentIndex ? 'active' : ''}
              aria-current={index === currentIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carosello items */}
        <div className="carousel-inner">
          {movieChunks.map((chunk, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="row g-3">
                {chunk.map((movie, i) => (
                  <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-2">
                    <div className="card shadow-sm">
                      <img
                        src={movie.Poster}
                        className="card-img-top"
                        alt={movie.Title}
                        style={{ height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-truncate">{movie.Title}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Frecce di navigazione */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevBlock}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={nextBlock}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MainComponent;
