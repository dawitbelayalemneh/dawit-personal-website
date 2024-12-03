import React from "react";
import images from "../../constants/image";
import { motion } from "framer-motion";

const socials = [
  {
    logo: images.linkedinIcon,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/dawit-belay-b74492175",
  },
  {
    logo: images.githubIcon,
    alt: "Github Icon",
    link: "https://github.com/dawitbelayalemneh",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="bg-white dark:bg-primary">
      <div className="container relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen">
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="hero__heading"
            >
              Dawit B.
            </motion.h1>
            
            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"  // Replace this with your actual resume path
              //target="_blank"
              download="Dawit_Belay_Resume.pdf"
              className="mt-16 inline-block px-6 py-3 text-primary border-2 border-primary rounded-md shadow-lg hover:bg-primary-100 dark:border-primary-100 dark:text-white dark:hover:bg-primary-300 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              View Resume
            </motion.a>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="w-full relative bottom-20 md:w-auto md:absolute md:top-[70%]">
          <ul className="flex flex-row justify-center items-center w-full gap-6 md:flex-col">
            {socials.map((social, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
                key={index}
                className="bg-neutral w-max rounded-full hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300"
              >
                <a href={social.link} target="_blank">
                  <img
                    className="h-14 w-14 p-4 transition-all dark:invert"
                    src={social.logo}
                    alt={social.alt}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
