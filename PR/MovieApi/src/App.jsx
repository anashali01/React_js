import React, { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  const handleApi = async () => {
    try {
      let res = await fetch("https://jsonfakery.com/movies/paginated");
      let data = await res.json();
      setList(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleApi();
  }, []);
  console.log(list);

  return (
    <>
      <div className="container">
          <h2 className="page-title"> Movie List</h2>
        <div className="row justify-center">
          {list?.map((movieData) => {
            const {
              original_title,
              original_language,
              popularity,
              release_date,
              poster_path,
              id,
              vote_average,
              overview
            } = movieData;
            return (
              <div className="movies col-4" key={id}>
                <img src={poster_path} alt={original_title} />

                <h1>{original_title}</h1>

                <div className="movie-info">
                  <span>⭐ {vote_average}</span>
                  <span>🔥 {popularity}</span>
                </div>

                <p className="lang">Language: {original_language}</p>
                <p className="date">Release: {release_date}</p>

                <p className="overview">{overview.slice(0, 80)}...</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
