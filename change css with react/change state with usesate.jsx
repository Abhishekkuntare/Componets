import React, { useState } from "react";
import "./PodcastRightbar.css";
import Calender from "./assets/Vector.png";
import styled from "styled-components";
import { Clear } from "@material-ui/icons";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./PopUp2.css";

const PodcastRightbar = () => {
  const [switchToggle, setSwitchToggle] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const setSwitch = () => {
    dropDown ? setDropDown(false) : setDropDown(true);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const ToggleSwitch = () => {
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true);
    // console.log(switchToggle);
  };
  return (
    <div className="podcastRightbar">
      <div className="podcastRightbar_img">
        <img
          src={Calender}
          alt="AtTHeRate"
          onClick={() => {
            ToggleSwitch();
            setSwitch();
          }}
        />

        <p
          className={
            switchToggle
              ? "podcastRightbar_img_title_toggle"
              : "podcastRightbar_img_title"
          }
        >
          Virtual Library
        </p>
      </div>
      <Popup drop={dropDown}>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "text.secondary" }}>
                <p className="popup_text">Folder 1</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="popup_text_sub">
                <h1>Notes</h1>
                <h1>Podcast</h1>
                <h1>Docs</h1>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ color: "text.secondary" }}>
                <p className="popup_text">Folder 2</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="popup_text_sub">
                <h1>Notes</h1>
                <h1>Podcast</h1>
                <h1>Docs</h1>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ color: "text.secondary" }}>
                <p className="popup_text">Folder 3</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionDetails>
                <div className="popup_text_sub">
                  <h1>Notes</h1>
                  <h1>Podcast</h1>
                  <h1>Docs</h1>
                </div>
              </AccordionDetails>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <p className="popup_text">Folder 4</p>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionDetails>
                <div className="popup_text_sub">
                  <h1>Notes</h1>
                  <h1>Podcast</h1>
                  <h1>Docs</h1>
                </div>
              </AccordionDetails>
            </AccordionDetails>
          </Accordion>
        </div>
      </Popup>
    </div>
  );
};

export default PodcastRightbar;

const Popup = styled.div`
  position: fixed;
  top: 30%;
  right: 2.5%;
  background: #fcfafa;
  border-radius: 5px;
  width: 350px;
  height: 481px;

  transition: transform 0.6s ease-in-out;
  transform: ${(props) => (props.drop ? "translateX(0)" : "translateX(500px)")};
`;

const CustomClear = styled(Clear)`
  cursor: pointer;
  display:flex,
  justify-content: flex-end;
  font-size: 1.1rem;
  margin-left:5px;
  margin-top:5px;
margin-right: auto;
`;
const CloseWrapper = styled.div`
  color: gray;
`;
