import { useState } from "react";

function TrailerButton() {
    const [isSelected, setIsSelected] = useState(false);
    return (
    // <button id="watchTrailerButton" onclick="play_video();"><b>Watch trailer</b></button>
    /*onClick={this.playVideo.bind(this)*/
        <button id="watchTrailerButton" onClick={() => setIsSelected(!isSelected)}>
            {isSelected ? "Stop Trailer" : "Watch Trailer"}</button>
    );
}
/*function playVideo() {
    this.refs.vidRef.play();
}*/
/*function play_video() {
    document.getElementById("trailer").play();
}*/
export default TrailerButton;