import { useState } from "react";

function WatchlistButton() {
    const [isSelected, setIsSelected] = useState(false);
    return (
   
        <button id="toWatchButton" onClick={() => setIsSelected(!isSelected)}>
            {isSelected ? "Remove from Watchlist" : "Add to Watchlist"}</button>
    );
}
export default WatchlistButton;