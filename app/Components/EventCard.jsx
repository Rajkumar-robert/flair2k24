"use client";

import Image from "next/image";

import { Space_Grotesk } from "@next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function EventCard({ event }) {
  return (
    <Card
      className={
        "w-auto max-w-[19rem] flex-col shadow-lg cursor-pointer pb-2 z-10 border "
      }
    >
      <CardHeader className="p-2 md:p-4">
        <CardTitle className="">
          <Image
            className="rounded-lg object-contain w-full"
            src={""}
            alt={event.name}
            width={500}
            height={300}
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 md:px-6 text-black font-medium pb-2">
        <div className="flex justify-between items-center">
          <p className="text-wrap  text-sm sm:text-lg tracking-wider">
            {event.name}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p
            className={
              "text-wrap text-xs sm:text-sm font-bold " +
              space_grotesk.className
            }
          >
            Venue: <span className="font-normal">{event.location}</span>
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p
            className={
              "text-wrap text-xs sm:text-sm " + space_grotesk.className
            }
          >
            {event.time}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p
            className={
              "text-wrap text-xs sm:text-sm  " + space_grotesk.className
            }
          >
            {event.description}
          </p>
        </div>

        <div
          className={
            "flex justify-between items-center mt-5  gap-3 " +
            space_grotesk.className
          }
        >
          <Button className="flex-1 ">
            <Link href={event.url.toString()} className="text-xs">
              Register Now
            </Link>
          </Button>
          <Button className="flex-1">
            <Link href={event.url.toString()} className="text-xs">
              Event Guidelines
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
