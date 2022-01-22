import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import '../RecordScreen/recordscreen.css'

const RecordView = () => (
  <div>   
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="Buttons">  
            <div><p>Recording Status: {status}</p></div>
            <div>
                <button onClick={startRecording}>Start Recording</button>
                <button onClick={stopRecording}>Stop Recording</button>
            </div>
            <div>
                <video className="video" src={mediaBlobUrl} controls autoPlay loop />
            </div>
            
        </div>
      )}
    />
  </div>
);
export default RecordView; 