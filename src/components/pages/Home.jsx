import React, { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

import HeroSection from "../Home/Hero";
import AboutSection from "../Home/AboutRhombus";
import ServicesSection from "../Home/ServicesSection";
import FullWidthHero from "../Home/FullWidthHero";
import VisionSection from "../Home/VisionSection";
import ClientsSection from "../Home/ClientsSection";
import GetInTouch from "../Home/GetInTouch";
import InsightsSuccess from "../Home/InsightsSuccess";
import CEOInsights from "../Home/CEOInsights";
import WhatSetsUsApart from "../Home/WhatSetsUsApart";
import RightSoulution from "../Home/RightSolution";
import BrandLogos from "../Home/BrandLogos";

const Home = () => {
  const imageRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(imageRef, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 1.5 } });
    }
  }, [controls, inView]);

  return (
    <div className="overflow-x-hidden relative">
      <HeroSection />
      {/* <AboutSection /> */}
      <WhatSetsUsApart />
      <ServicesSection />
      <FullWidthHero />
      <VisionSection />
      <RightSoulution />
      <ClientsSection />
      <GetInTouch />
      <BrandLogos />
      <CEOInsights />
      <InsightsSuccess />
    </div>
  );
};

export default Home;

// hover:bg-[rgb(200,248,169)]//light-green
// text-rgb(15, 61, 58)//dark-green
// bg-[rgb(244,245,241)]// text-white


