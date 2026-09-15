import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import FavouritesButton from "./FavouritesButton.jsx";
import WatchlistButton from "./WatchlistButton.jsx";
import Video from "./Video.jsx";
import {
  clearSelectedIds,
  saveSelectedIds,
  getInitialSelectedIds,
} from "./storage.js";


const filmsUrl = `./data/films.json`;
//console.log('films url', filmsUrl)

function App() {
  const [films, setFilms] = useState([]); 
  const [archiveStatus, setArchiveStatus] = useState("loading");
  const [selectedIds, setSelectedIds] = useState(getInitialSelectedIds);

  //console.log('films', films)

   useEffect(() => {
    async function loadFilms() {
      try {
        const response = await fetch(filmsUrl);
        if (!response.ok) throw new Error("The film archive could not be loaded.");

        //console.log('fetch response', response )
        const loadedFilms = await response.json();
        //console.log('fetch loaded', loadedFilms )
        setFilms(loadedFilms);
        setArchiveStatus("ready");
      } catch {
        setArchiveStatus("error");
      }
    }

    loadFilms();
  }, []);

  return (
    <>
    <Header />


   <main>
       <section>
        <h1>Film Folio</h1>
          {films.map((film) => {
            //console.log('my film', film)
            return (
              <article key={film.id}>
                <h2>{film.title}</h2>
                <p>{film.synopsis}</p>
                <li id="Director">Director: {film.directorIds}</li>
                <li id="Year">Year: {film.year}</li>
                <li id="Genre">Genre: {film.genres}</li>
                <li id="Runtime">Runtime in seconds: {film.runtimeSeconds}</li>
                <li id="Form">Form: {film.form}</li>
                <li id="Company">Company: {film.companyIds}</li>
                <li id="Country">Country: {film.country}</li>
                <li>Editorial Type: {film.editorialType}</li>
                <img src={film.poster} width="200" height="300" alt={film.posterAlt}/>
                <WatchlistButton />
                <h3>Rating: {film.popularity}</h3>
                <h3>Themes: {film.themes}</h3>
                <Video />
                <FavouritesButton />
              </article>
            )
          })}
        </section>

      </main>

      <Footer />
    </>
    );
} 
export default App;
