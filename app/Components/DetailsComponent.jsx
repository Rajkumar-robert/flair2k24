import React, { useRef } from "react";
import { secondDivAnimation } from "../utls";
import { motion, useInView } from "framer-motion";
import { Space_Grotesk } from "@next/font/google";
import EventCard from "./EventCard";
import { RevealLinks } from "./RevealLinks";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DetailsComponent = () => {
  const descriptionText =
    "Discover the amazing symposium adventure, crafted by ".split(" ");

  const events = [
    {
      name: "Collider Conclave",
      location: "H23 , I31",
      time: "10:00 AM - 11:30 AM",
      description:
        "A paper presentation event where innovators showcase their research and breakthrough ideas.",
      url: "",
    },
    {
      name: "Quantum Quest",
      location: "I32",
      time: "1:30 PM - 2:30 PM",
      description:
        "Test your technical knowledge in this challenging and engaging quiz competition.",
      url: "",
    },
    {
      name: "Glitchverse Guess",
      location: "H23",
      time: "1:30 PM - 2:45 PM",
      description:
        "A fun-filled event of technical charades where teams guess tech-related terms through clues.",
      url: "",
    },
    {
      name: "Into the Memeverse",
      location: "J14",
      time: "12:00 PM - 1:00 PM",
      description:
        "A creative event where participants showcase their skills by creating technical memes.",
      url: "",
    },
    {
      name: "Code Swing Duo",
      location: "A22",
      time: "11:00 AM - 12:30 PM",
      description:
        "Partner up and compete to debug code in real-time, racing against the clock.",
      url: "",
    },

    {
      name: "Sinister Hunt",
      location: "A21",
      time: "12:00 PM - 1:00 PM",
      description:
        "Embark on a thrilling treasure hunt, deciphering clues and solving puzzles to uncover the prize.",
      url: "",
    },
    {
      name: "Multiversal Link Up",
      location: "I32",
      time: "1:15 PM - 2:45 PM",
      description:
        "A networking event where participants connect the dots through interactive activities.",
      url: "",
    },
    {
      name: "Spidey Prompts",
      location: "A21",
      time: "10:30 AM - 11:30 AM",
      description:
        "Dive into the world of AI and see how creative you can get with generating AI prompts.",
      url: "",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="relative flex flex-col mx-auto pt-24 bg-white  h-fit text-black pb-14"
      variants={secondDivAnimation}
      ref={ref}
    >
      {/* Heading */}
      <motion.p
        className={`text-center mb-10 ${space_grotesk.className} text-xs font-bold`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        WELCOME TO FLAIR 2k24
      </motion.p>

      {/* Description Text Animation */}
      <motion.p className="text-4xl sm:text-8xl text-center font-bold w-[87%] sm:w-[70%] mx-auto mb-5">
        {descriptionText.map((el, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.75,
              delay: i / 5,
            }}
          >
            {el.toUpperCase()}{" "}
          </motion.span>
        ))}
      </motion.p>

      {/* Event Cards Section */}
      <div className="flex  justify-center">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mt-10 max-w-7xl">
          {events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DetailsComponent;
