import React from "react";
import "./App.css";
import "./components/header.css";
import "./components/card.css"
import "./components/sectionhero.css";
import Header from "./components/Header";
import SectionHero from "./components/SectionHero";
import Card from "./components/Card";
import { EventHandling } from "./components/EventHandling";
import ConfirmationDialog from "./components/ConfirmationDialog";

function App() {
  return (
    <>
      <Header />
      <SectionHero />
      <div className="grid grid-three--cols">
        <Card
          imageSource="/iman.jpg"
          seriesName="Iron Man"
          rating=" 9.2"
          releaseDate="Aug 30 2024"
          castName="Staurnt Benny"
          seriesDesc="The Paris 2024 Paralympic Games, which will take place between 28 August and 8 September, will bring together as many as 4,400 athletes from around the world."
        />
        <Card
          imageSource="/iman.jpg"
          seriesName="Thor"
          rating=" 8.5"
          releaseDate="Aug 31 2024"
          castName="Malik Raha"
          seriesDesc="The Paris 2024 Paralympic Games, which will take place between 28 August and 8 September, will bring together as many as 4,400 athletes from around the world."
        />
        <Card
          imageSource="/cap.jpg"
          seriesName="Captain America"
          rating=" 6.3"
          releaseDate="Aug 31 2024"
          castName="Malik Raha"
          seriesDesc="The Paris 2024 Paralympic Games, which will take place between 28 August and 8 September, will bring together as many as 4,400 athletes from around the world."
        />
      </div>
      {/* <EventHandling />       */}
      <ConfirmationDialog />
    </>
  );
}

export default App;
