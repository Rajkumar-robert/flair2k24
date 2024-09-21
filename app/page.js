"use client";
import React, { useState, useRef,useEffect } from "react";
import { motion } from "framer-motion";
import { Space_Grotesk } from "@next/font/google";
import DetailsComponent from "@/components/DetailsComponent";
import { secondDivAnimation, styles, herotextAnimation } from "./utls";
import Preloader from "@/components/Preloader";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Page = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const detailsRef = useRef(null); // Create a ref for the DetailsComponent
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    let isLoaded = sessionStorage.getItem("isLoaded");

    if (!isLoaded) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);



  const text =
    "Join us for an extraordinary journey into the SpiderVerse".split(" ");

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  const scrollToDetails = () => {
    detailsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return <Preloader setLoading={setLoading} />;
  }


  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 0.8 }}>
      <div className="relative h-screen">
        {!isVideoEnded && (
          <div className="absolute inset-0 z-0">
            <video
              onEnded={handleVideoEnd}
              src={"/assets/videos/bg-video-49mb.mp4"}
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full object-cover"
            />
            <div style={styles.blackOverlay}></div>
          </div>
        )}
        <motion.div
          className="relative z-5 flex flex-col lg:flex-row justify-between lg:justify-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-[90rem] lg:px-8 h-screen text-white pt-[100px]"
          initial="hidden"
          animate="visible"
          variants={herotextAnimation}
        >
          <motion.div className="flex flex-col w-[100%] lg:w-[60%]">
            <motion.p className="text-[80px] sm:text-[9rem] font-bold tracking-wide mix-blend-exclusion">
              FLAIR - IT
            </motion.p>
            <motion.p className={space_grotesk.className + " sm:w-[50%] "}>
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </motion.p>
            <motion.button
              onClick={scrollToDetails}
              className="bg-white text-black py-2 px-10 mt-10 rounded-full w-fit"
            >
              Learn More
            </motion.button>
          </motion.div>

          

          <motion.div
            className="flex flex-col w-[100%] lg:w-[40%] relative items-end"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div className="text-[5rem] sm:text-[9rem] mb-5 font-bold absolute bottom-5 right-0 tracking-wide mix-blend-exclusion">
              <div>
                2K24
              </div>
              
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* DetailsComponent with ref */}
      <div ref={detailsRef}>
        <DetailsComponent />
      </div>
    </motion.div>
  );
};

export default Page;
