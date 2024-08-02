"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ContactDetails } from "@/constants";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="container">
        <div className="flex justify-center ">
          <h1 className="text-xl font-semibold">About Me</h1>
        </div>
        <section className="mb-10 py-10 px-4 sm:px-5 flex flex-col justify-center sm:justify-between lg:flex-row gap-10">
          <motion.div
            className="hidden lg:flex bg-about_shape_light dark:bg-about_shape_dark bg-contain bg-no-repeat min-w-[18rem] h-[18rem] relative"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <Image
              src={"/about-profile1.png"}
              alt="profile"
              height={700}
              width={700}
              className="h-[308px] w-96"
              priority
            />
          </motion.div>
          <div className="flex justify-start sm:justify-center w-full min-h-[400px]">
            <Tabs defaultValue="personal_info" className="w-full">
              <TabsList className="w-full">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TabsTrigger value="personal_info">Personal Info</TabsTrigger>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TabsTrigger value="qualification">Qualification</TabsTrigger>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </motion.div>
              </TabsList>

              <TabsContent value="personal_info" className="w-full">
                <h1 className="text-base sm:text-xl font-bold">
                  Web developer specializing in Next.js and UI/UX design.
                </h1>
                <p className="fs-300 text-muted-foreground mt-3">
                  I am a passionate and dedicated full stack developer with a
                  strong foundation in HTML, CSS, Javascript and React js.
                </p>
                <div className="mt-7 flex flex-col md:grid md:grid-cols-2 gap-4 items-center text-center justify-center">
                  {ContactDetails.map((details) => (
                    <span
                      key={details.key}
                      className="flex gap-2 fs-300 fw-medium"
                    >
                      <details.icon
                        size={16}
                        className="text-primary min-w-auto"
                      />{" "}
                      {details.text}
                    </span>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="qualification" className="w-full">
                <h1 className="text-base sm:text-xl font-bold pb-5">
                  My Awesome Journey
                </h1>
                <section className="grid xs:grid-cols-2 grid-cols-1 gap-5">
                  <div>
                    <div className="flex gap-x-2 text-primary items-center mb-3">
                      <User size={16} />
                      <h2 className="">Experience</h2>
                    </div>
                    <div className="flex group gap-x-3 sm:w-auto xs:w-[150px]">
                      <div className="h-[84px] w-[1px] bg-border relative ml-2">
                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                      </div>
                      <div className="text-left flex flex-col gap-y-2">
                        <h1 className="fw-semi-bold fs-600">ABC INC.</h1>
                        <h3 className="fs-300">Software Engineer</h3>
                        <h2 className="fs-400 text-primary fw-medium pl-1">
                          2018-2020
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-x-2 text-primary items-center mb-3">
                      <User size={16} />
                      <h2 className="">Experience</h2>
                    </div>
                    <div className="flex group gap-x-3 sm:w-auto xs:w-[150px]">
                      <div className="h-[84px] w-[1px] bg-border relative ml-2">
                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                      </div>
                      <div className="text-left flex flex-col gap-y-2">
                        <h1 className="fw-semi-bold fs-600">ABC INC.</h1>
                        <h3 className="fs-300">Software Engineer</h3>
                        <h2 className="fs-400 text-primary fw-medium pl-1">
                          2018-2020
                        </h2>
                      </div>
                    </div>
                  </div>
                </section>
              </TabsContent>

              <TabsContent value="skills" className="w-full">
                <h1 className="text-base sm:text-xl font-bold pb-5">
                  Tools I Use Everyday
                </h1>
                <h1 className="fs-600 fw-semi-bold border-b text-primary">
                  Skills
                </h1>
                <div className="flex flex-col fs-500 pt-2 fw-medium text-muted-foreground">
                  <span>HTML,CSS</span>
                  <span>Frontend Development</span>
                  <span>Javascript PHP</span>
                  <span>Backend Development</span>
                </div>
                <div className="mt-4">
                  <h3 className="fs-500 fw-semi-bold border-b text-primary">
                    Tools
                  </h3>
                  <div className="flex gap-4 mt-3 justify-center">
                    <Image
                      src={"/vscode.svg"}
                      alt="vscode"
                      height={100}
                      width={100}
                      className="h-6 w-6"
                    />
                    <Image
                      src={"/figma.svg"}
                      alt="vscode"
                      height={100}
                      width={100}
                      className="h-6 w-6"
                    />
                    <Image
                      src={"/notion.svg"}
                      alt="vscode"
                      height={100}
                      width={100}
                      className="h-6 w-6"
                    />
                    <Image
                      src={"/wordpress.svg"}
                      alt="vscode"
                      height={100}
                      width={100}
                      className="h-6 w-6"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
