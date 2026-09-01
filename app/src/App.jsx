import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import TrailerButton from "./TrailerButton.jsx";
import WatchlistButton from "./WatchlistButton.jsx";

function App() {
//const [selectedIds, setSelectedIds] = useState([]);
// function handleToggleSelect(id)

  return (
    <>
    <Header />


   <main>
       <section>
        <h1>Film Folio</h1>
        <div><h2>The Quiet Cartographer</h2>
          <p>A mapmaker records disappearing paths along a changing coastline.</p>
          
            <ul class="textbox">
              <li id="Director">Director: Jane Doe</li>
              <li id="Year">Year: 2023</li>
              <li id="Genre">Genre: Essay film</li>
              <li id="Runtime">Runtime: 11 minutes 24 seconds</li>
              <li id="Form">Form: Documentary</li>
              <li id="Credits">Credits: Jane Doe, John Doe</li>
              <li id="Country">Country: Ireland</li>
            </ul>
            <ul class="textbox">
              <li>Festival appearances: Dublin International Film Festival</li>
            </ul>
            <img src={"./src/assets/coastline.jpg"} alt="coastline" width="290" height="190" />
            <img src={"./src/assets/coastlines2.jpg"} alt="coastline" width="290" height="190" />
            <img src={"./src/assets/coastlines3.jpg"} alt="coastline" width="290" height="190" />
            <WatchlistButton />
          </div>

          <article>
            <h2>The Quiet Cartographer review</h2>
            <p>The over all atmosphere of The Quiet Cartographer is a film that provokes a sense of unease as a mapmaker records the disappearing paths along a changing coastline. With this considered, the documentary highlights the realities of cliffside erosion.</p>
            <h3>Rating: 4/5</h3>
            <video ref="vidRef" id="trailer" width="290" height="190" controls muted>
              <source src="trailer.mp4" type="video/mp4"/>
            </video>
            <TrailerButton />
          </article>
          
        </section>
      </main>

      <Footer />
    </>
    );
} 
export default App;
