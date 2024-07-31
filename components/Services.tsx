"use client";
import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <section className="pb-20 container relative">
      <Element name="services" className="relative">
        <div className="flex justify-center">
          <h1 className="text-xl font-semibold">Services</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 py-10 px-4 sm:px-5 sm:py-16">
          <Card className="flex flex-col justify-center shadow-md">
            <CardContent className="text-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 cursor-pointer"
              >
                <Image
                  src={"/vscode.svg"}
                  alt="vscode"
                  height={500}
                  width={500}
                  className="h-20 w-29"
                />
              </motion.div>
              <h3 className="+fw-medium">Card Content</h3>
              <p className="p-3 fs-300 text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur adipisci at molestiae{" "}
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col justify-center shadow-md">
            <CardContent className="text-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 cursor-pointer"
              >
                <Image
                  src={"/vscode.svg"}
                  alt="vscode"
                  height={500}
                  width={500}
                  className="h-20 w-29"
                />
              </motion.div>
              <h3 className="+fw-medium">Card Content</h3>
              <p className="p-3 fs-300 text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur adipisci at molestiae{" "}
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col justify-center shadow-md">
            <CardContent className="text-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 cursor-pointer"
              >
                <Image
                  src={"/vscode.svg"}
                  alt="vscode"
                  height={500}
                  width={500}
                  className="h-20 w-29"
                />
              </motion.div>
              <h3 className="+fw-medium">Card Content</h3>
              <p className="p-3 fs-300 text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur adipisci at molestiae{" "}
              </p>
            </CardContent>
          </Card>
        </div>
      </Element>
    </section>
  );
};

export default Services;
