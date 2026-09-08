 import { useRef } from "react";

 function Video() {
  const videoRef = useRef(null);

    return (
      <div>
 <video ref={videoRef} id="trailer" width="290" height="190" controls muted>
              <source src="trailer.mp4" type="video/mp4"/>
            </video>
            <button id="playtrailer" onClick={() => videoRef.current?.play()}>Watch Trailer</button>
            <button id="stoptrailer" onClick={() => videoRef.current?.pause()}>Stop Trailer</button>
            </div>
    );
}
export default Video;