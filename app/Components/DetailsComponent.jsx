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
      date: "2024-10-12",
      location: "San Francisco, CA",
      time: "10:00 AM - 4:00 PM",
      description:
        "A paper presentation event where innovators showcase their research and breakthrough ideas.",
      url: "",
    },
    {
      name: "Quantum Quest",
      date: "2024-11-05",
      location: "New York, NY",
      time: "9:00 AM - 3:00 PM",
      description:
        "Test your technical knowledge in this challenging and engaging quiz competition.",
      url: "",
    },
    {
      name: "Glitchverse Guess",
      date: "2024-12-01",
      location: "Las Vegas, NV",
      time: "12:00 PM - 8:00 PM",
      description:
        "A fun-filled event of technical charades where teams guess tech-related terms through clues.",
      url: "",
    },
    {
      name: "Code Swing Duo",
      date: "2024-10-20",
      location: "London, UK",
      time: "10:00 AM - 5:00 PM",
      description:
        "Partner up and compete to debug code in real-time, racing against the clock.",
      url: "",
    },
    {
      name: "Into the Memeverse",
      date: "2024-09-28",
      location: "Austin, TX",
      time: "6:00 PM - 9:00 PM",
      description:
        "A creative event where participants showcase their skills by creating technical memes.",
      url: "",
    },
    {
      name: "Sinister Hunt",
      date: "2024-11-15",
      location: "Los Angeles, CA",
      time: "10:00 AM - 6:00 PM",
      description:
        "Embark on a thrilling treasure hunt, deciphering clues and solving puzzles to uncover the prize.",
      url: "",
    },
    {
      name: "Multiversal Link Up",
      date: "2024-10-07",
      location: "Miami, FL",
      time: "2:00 PM - 11:00 PM",
      description:
        "A networking event where participants connect the dots in the tech world through interactive activities.",
      url: "",
    },
    {
      name: "Spidey Prompts",
      date: "2024-12-12",
      location: "Toronto, Canada",
      time: "10:00 AM - 4:00 PM",
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
