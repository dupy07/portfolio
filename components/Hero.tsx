"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Socials from "./Socials";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const MotionButton = motion(Button);

const Hero = () => {
  const router = useRouter();
  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.jpg"; // Path to your resume.jpg file
    link.download = "resume.jpg"; // File name to be saved as
    link.click();
  };

  return (
    <section
      className="container pt-28 xl:pt-0
 mb-40 flex flex-col sm:flex-row gap-5 justify-normal sm:justify-between items-center h-auto sm:h-screen relative"
    >
      <div className="order-2 sm:order-1 text-center sm:text-left">
        <h2 className="text-lg fw-medium pb-2">Hi I am Piyush Shrestha</h2>

        <h1 className="text-primary fw-bold text-3xl sm:fs-700 mb-4">
          <Typewriter
            options={{
              strings: ["Web Developer", "UI/UX Designer"],
              autoStart: true,
              loop: true,
              delay: 60, // Speed of typing
              deleteSpeed: 60, // Speed of deletion
            }}
          />
        </h1>
        <div className="fs-300 max-w-96 mb-7 fw-medium">
          <span>
            I am passionate and a dedicated web developer with a passion for
            creating dynamic and engaging web applications.
          </span>
        </div>
        <div className="flex flex-col">
          <span className="fs-300 fw-medium pb-3">Find Me On</span>

          <Socials />

          <div className="flex gap-5 justify-center sm:justify-start">
            <MotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => router.push("/Contact")}
            >
              Contact Me{" "}
            </MotionButton>

            <MotionButton
              variant="secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDownloadCV}
            >
              Download CV
            </MotionButton>
          </div>
        </div>
      </div>

      <motion.div
        className="order-1 sm:order-2 hidden xs:flex bg-hero_shape2_light dark:bg-hero_shape2_dark bg-no-repeat bg-contain
          w-[13rem] h-[13rem] md:w-[15rem] md:h-[15rem] lg:w-[18rem] lg:h-[18rem]"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <div
          className="bg-hero_shape bg-contain bg-no-repeat bg-center -ml-2 -mt-1 
         w-[14rem] h-[13rem] md:w-[16rem] md:h-[15rem] lg:w-[19rem] lg:h-[18rem]"
        >
          <Image
            src={"/hero-profile1.png"}
            alt="profile"
            height={700}
            width={700}
            className="h-[219px] md:h-[252px] lg:h-[302px] "
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
