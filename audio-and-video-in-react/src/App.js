import "./App.css";

import style_ from "./style.module.css";

import { ReactMediaRecorder } from "react-media-recorder";
// use "npm i react-media-recorder" to install

function App() {
  return (
    <div className="App">
      <h1>Video recorder</h1>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p className={style_.status}>{status}</p>
            {/* status = ideal or acquiring_media or recording or stopped */}
            {console.log(status)}
            <video src={mediaBlobUrl} controls autoPlay loop />
            <div>
              <button className={style_.Btn} onClick={startRecording}>
                Start Recording
              </button>
              <button className={style_.Btn} onClick={stopRecording}>
                Stop Recording
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default App;
