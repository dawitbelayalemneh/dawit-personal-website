import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
    >
      <motion.div
        variants={{
          offscreen: {
            y: 150,
          },
          onscreen: {
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          Amhara Science and Technology Commission
          
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            SEPTEMBER, 2018 - JUNE, 2019
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            JUNIOR FRONT-END DEVELOPER
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>

        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Developed web based applications using JavaScript, React, Tailwind, and
            NextJS.
          </li>
          <li>
            Created and developed websites, landing pages, and an Inventory System for the
            commission.
          </li>
          <li>
            Assisted in the maintenance and troubleshooting of client's websites
            to ensure smooth performance and user satisfaction.
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          Freelancer
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            JULY, 2022 - PRESENT
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            FREELANCE FRONT-END DEVELOPER
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Successfully trained students in iCog-ACC summer camp 2022
            about web development using HTML5, CSS3 and JavaScript.
          </li>
          <li>
            Successfully resolved various technical issues for clients,
            contributing to a positive and productive project experience
          </li>
          <li>
            Achieved completion of frontend projects starting as a freelancer, 
            demonstrating exceptional performance and customer satisfaction in 
            delivering high-quality front-end development services.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default TwoColumnCard;
