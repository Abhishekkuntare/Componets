import React, { useState } from "react";
import "./PodcastMainSidebar.css";
import Vector1 from "../PodcastMainSidebar/assets/vector1.png";
import Vector3 from "../PodcastMainSidebar/assets/vector3.png";
import Vector4 from "../PodcastMainSidebar/assets/vector4.png";
import Vector5 from "../PodcastMainSidebar/assets/vector5.png";
import Vector6 from "../PodcastMainSidebar/assets/vector6.png";
import Vector7 from "../PodcastMainSidebar/assets/vector7.png";
import Vector8 from "../PodcastMainSidebar/assets/vector8.png";
import Vector9 from "../PodcastMainSidebar/assets/vector9.png";
import Vector10 from "../PodcastMainSidebar/assets/vector10.png";
import InfoDrawer from "./Drawer/InfoDrawer";

const PodcastMainSidebar = () => {
  const Options = [
    {
      image: Vector3,
      name: "Summary",
      alt: "Summary",
    },
    {
      image: Vector1,
      name: "Recording",
      alt: "Recording",
    },
    {
      image: Vector4,
      name: "Podcast",
      alt: "Podcast",
    },
    {
      image: Vector5,
      name: "Study Material",
      alt: "Study Material",
    },
    {
      image: Vector6,
      name: "Test",
      alt: "Test",
    },
    {
      image: Vector7,
      name: "Assignment",
      alt: "Assignment",
    },
    {
      image: Vector8,
      name: "Notice",
      alt: "Notice",
    },
    {
      image: Vector9,
      name: "Student",
      alt: "Student",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(true);
  };

  const [switchToggle, setSwitchToggle] = useState(false);
  const ToggleSwitch = () => {
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true);
    // console.log(switchToggle);
  };

  return (
    <div className={switchToggle ? "ClassToggled" : "ClassNotToggled"}>
      <div
        className={
          switchToggle
            ? "PodcastMainSidebar_bottomImg"
            : "PodcastMainSidebar_bottomImgToggle"
        }
      >
        <img src={Vector10} alt="Menu" onClick={ToggleSwitch} />
      </div>
      {Options.map((option, index) => (
        <div className="PodcastMainSidebar_items" key={index}>
          <div
            className={
              switchToggle
                ? "PodcastMainSidebar_all"
                : "PodcastMainSidebar_allToggle"
            }
          >
            <div
              className={
                switchToggle
                  ? "PodcastMainSidebar_menu"
                  : "PodcastMainSidebar_menuToggle"
              }
            >
              <img src={option.image} alt={option.alt} />
            </div>
            <p>{option.name}</p>
          </div>
        </div>
      ))}

      <InfoDrawer open={open} setOpen={setOpen} />
    </div>
  );
};

export default PodcastMainSidebar;
