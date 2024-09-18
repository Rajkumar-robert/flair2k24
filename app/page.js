"use client";
import React, { useState } from "react";

const Page = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    console.log("Video Ended");
    setIsVideoEnded(true);
  };

  console.log(isVideoEnded);

  const styles = {
    gradientBackground: {
      background: "linear-gradient(to bottom right, #6FAB87, #184A2C)",
    },
    rippleOverlay: {
      backgroundImage: "url('/assets/images/miles-eyes.jpeg')",
      opacity: 0.1,
      backgroundSize: "contain",
      backgroundPosition: "center",
    },

    blackOverlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for better readability
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
    },
  };

  return (
    <div className="relative h-screen">
      {/* Video Background */}
      {!isVideoEnded && (
        <div className="absolute inset-0 z-0">
          <video
            onEnded={handleVideoEnd}
            src={"/assets/videos/bg-video-49mb.mp4"}
            data-wf-ignore="true"
            data-object-fit="cover"
            autoPlay
            playsInline
            muted
            loop
            className={`w-full h-full object-cover`}
          />
          {/* Overlay on Top of Video */}
          <div style={styles.blackOverlay}></div>
        </div>
      )}

      {/* Text Content */}
      <div className="relative z-10 flex justify-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-[90rem] lg:px-8 h-full text-white pt-[100px]">
        {isVideoEnded && (
          <div
            className="absolute inset-0 z-10"
            style={styles.rippleOverlay}
          ></div>
        )}

        <div className="flex flex-col w-[60%]">
          <p className="text-8xl mb-5 font-bold">WELCOME</p>
          <p className="text-base font-light w-[80%]">
            Join us for an extraordinary journey into the SpiderVerse — where
            science, storytelling, technology, and pop culture intersect to
            explore.
          </p>
          <button className="bg-white text-black py-2 px-10 mt-10 rounded-full w-fit">
            Learn More
          </button>
        </div>
        <div className="flex flex-col w-[40%] relative">
          <p className="text-8xl mb-10 font-bold absolute bottom-5 right-0">
            SPIDEYS
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative z-20 flex flex-col mx-auto max-w-2xl px-4 pb-24 pt-14 sm:px-6 lg:max-w-[70rem] bg-white lg:px-8 h-[90vh] text-black">
        <p className="text-center mb-10">Welcome to Flair 2k24</p>
        <p className="text-8xl text-center font-extrabold">
          Discover the world's largest shared adventure, crafted by everyone
        </p>
      </div>
    </div>
  );
};

export default Page;
