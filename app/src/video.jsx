 import { useRef } from "react";

/* function play_video() {
    document.getElementById("trailer").play();
    document.getElementById("watchTrailerButton").textContent = "Trailer is playing";
};*/


 function video(play_video) {
    return (
 <video ref={videoRef} id="trailer" width="290" height="190" controls muted>
              <source src="trailer.mp4" type="video/mp4"/>
            </video>
    );
}
export default video;

/*<video id="trailer" width="290" height="190" controls muted>
              <source src="trailer.mp4" type="video/mp4"/>
            </video>*/