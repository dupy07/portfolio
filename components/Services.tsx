"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="pb-20 container relative">
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
            <h3 className="+fw-medium">Custom Web Development</h3>
            <p className="p-3 fs-300 text-muted-foreground">
              I create tailored web applications with seamless user experiences,
              optimized for performance and scalability.
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
            <h3 className="+fw-medium">Responsive Design</h3>
            <p className="p-3 fs-300 text-muted-foreground">
              Ensuring your website looks and functions beautifully on all
              devices, from desktops to mobile phones.
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
            <h3 className="+fw-medium">UI/UX Design</h3>
            <p className="p-3 fs-300 text-muted-foreground">
              Crafting visually appealing and user-friendly interfaces that
              enhance user engagement and satisfaction.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
