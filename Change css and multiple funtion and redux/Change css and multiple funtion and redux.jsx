import React, { useState } from "react";
import "../../Constants/Fonts.css";
import "./RecordingModel.css";
import Cross from "./assets/cross.png";
import File from "./assets/file.png";
import { useDispatch } from "react-redux";

// redux
import { addMenu } from "./Redux/actions/index";

function RecordingModel({ setOpenModel }) {
  const dispatch = useDispatch();

  // this is a json file like
  const Notes = [{ Notes: "Notes" }];
  const Media = [{ Media: "Media" }];
  const Docs = [{ Docs: "Docs" }];
  const Podcast = [{ Podcast: "Podcast" }];

  //  this one is a initialPoints
  const [initialNote, setInitialNote] = useState(Notes);
  const [initialMedia, setInitialMedia] = useState(Media);
  const [initialDocs, setInitialDocs] = useState(Docs);
  const [initialPodcast, setInitialPodcast] = useState(Podcast);

  //  Changing the css with state
  const [toggleCss, setToggleCss] = useState(false);
  const [toggleCss1, setToggleCss1] = useState(false);
  const [toggleCss2, setToggleCss2] = useState(false);
  const [toggleCss3, setToggleCss3] = useState(false);

  //Changing the css with function
  const handleChangeCss = () => {
    toggleCss ? setToggleCss(false) : setToggleCss(true);
  };
  const handleChangeCss1 = () => {
    toggleCss1 ? setToggleCss1(false) : setToggleCss1(true);
  };
  const handleChangeCss2 = () => {
    toggleCss2 ? setToggleCss2(false) : setToggleCss2(true);
  };
  const handleChangeCss3 = () => {
    toggleCss3 ? setToggleCss3(false) : setToggleCss3(true);
  };

  return (
    <div className="recordingModel_background">
      <div className="recordingModelContainer">
        <div className="recordingModel_title">
          <h1>Virtual library</h1>
          <img onClick={() => setOpenModel(false)} src={Cross} alt="" />
        </div>
        <div
          className={
            toggleCss ? "recordingModel_row_toggle" : "recordingModel_row"
          }
          onClick={() => {
            handleChangeCss();
            dispatch(addMenu(initialNote));
          }}
        >
          <img src={File} alt="file" />
          {Notes.map((Note, index) => (
            <h2 id={index}>{Note.Notes}</h2>
          ))}
        </div>
        <div
          className={
            toggleCss1 ? "recordingModel_row_toggle" : "recordingModel_row"
          }
          onClick={() => {
            handleChangeCss1();
            dispatch(addMenu(initialMedia));
          }}
        >
          <img src={File} alt="file" />
          {Media.map((Medias, index) => (
            <h2 id={index}>{Medias.Media}</h2>
          ))}
        </div>
        <div
          className={
            toggleCss2 ? "recordingModel_row_toggle" : "recordingModel_row"
          }
          onClick={() => {
            handleChangeCss2();
            dispatch(addMenu(initialDocs));
          }}
        >
          <img src={File} alt="file" />
          {Docs.map((Doc, index) => (
            <h2 id={index}>{Doc.Docs}</h2>
          ))}
        </div>
        <div
          className={
            toggleCss3 ? "recordingModel_row_toggle" : "recordingModel_row"
          }
          onClick={() => {
            handleChangeCss3();
            dispatch(addMenu(initialPodcast));
          }}
        >
          <img src={File} alt="file" />
          {Podcast.map((Podcasts, index) => (
            <h2 id={index}>{Podcasts.Podcast}</h2>
          ))}
        </div>
        <div className="recordingModel_row_2">
          <p>4 items</p>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
}

export default RecordingModel;
