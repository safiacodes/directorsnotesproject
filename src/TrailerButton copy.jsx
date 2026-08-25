import { useState } from "react";

function TrailerButton() {
    const [isSelected, setIsSelected] = useState(false);
    return (
    // <button id="watchTrailerButton" onclick="play_video();"><b>Watch trailer</b></button>
        <button id="watchTrailerButton" onClick={() => setIsSelected(!isSelected)}>
            {isSelected ? ""}
            <b>Watch trailer</b></button>
    );
}
export default TrailerButton;