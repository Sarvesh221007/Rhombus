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
import Footer from "../layout/Footer"; // ✅ make sure this path is correct

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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <WhatSetsUsApart />
        <AboutSection />
        <ServicesSection />
        <FullWidthHero />
        <VisionSection />
        <RightSoulution />
        <ClientsSection />
        <GetInTouch />
        <BrandLogos />
        <CEOInsights />
        <InsightsSuccess />
      </main>
    </div>
  );
};

export default Home;


// hover:bg-[rgb(200,248,169)]//light-green
// text-rgb(15, 61, 58)//dark-green
// bg-[rgb(244,245,241)]// text-white
//

// 0F3D3A add this color in bg gree dark