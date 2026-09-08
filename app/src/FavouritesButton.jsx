import { useState } from "react";

function FavouritesButton() {
    const [isSelected, setIsSelected] = useState(false);
    return (

        <button id="addFavouritesButton" onClick={() => setIsSelected(!isSelected)}>
            {isSelected ? "Remove from Favourites" : "Add to Favourites"}</button>
    );
}

export default FavouritesButton;