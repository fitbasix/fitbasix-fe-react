import React from "react";
import AboutUs from "./AboutUs";
import BMI from "./BMI";

import Home from "./Home";
import LiveClass from "./LiveClass";
import PopularClasses from "./PopularClasses";
import TopTrainers from "./TopTrainers";
import UserReviews from "./UserReviews";
import WorkoutSessions from "./WorkoutSessions";
import "./styles.css";
import FAQ from "./FAQ";
import GetStarted from "./GetStarted";
import Footer from "./Footer";
import Navbar from "./Navbar";

// GTM MODULE
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const Landing = () => {

  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        pageName: "HomePage",
      },
      gtmId: "GTM-K7HC9VF",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);
  
  return (
    <div className="landingContainer">
      <Navbar />
      <Home />
      <LiveClass />
      <AboutUs />
      <PopularClasses />
      <WorkoutSessions />
      <TopTrainers />
      <BMI />
      <UserReviews />
      <GetStarted />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Landing;
