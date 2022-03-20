import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>Linkedin news</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is back", "Top news -9909 readers")}
      {newsArticle("Tesla hit all time high", "Top news -929 readers")}
      {newsArticle("Anegel is hiring ", "Top news -9129 readers")}
      {newsArticle("Layoff in better", "Top news -12449 readers")}
      {newsArticle("Sharktank is back", "Top news -9909 readers")}
      {newsArticle("Next js is lit", "Top news -1209 readers")}
      {newsArticle("Web3 trending", "Top news -932 readers")}
      {newsArticle("tata motors share is high", "Top news -1209 readers")}
      {newsArticle("Coronavirus india updates", "Top news -4209 readers")}
      {newsArticle("Bitcoins dips", "Top news -932 readers")}
    </div>
  );
}

export default Widgets;
