"use client";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "next-share";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div className="flex gap-5 py-3 mb-4 justify-center sm:justify-start">
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <FacebookShareButton
          url={"https://github.com/next-share"}
          quote={
            "next-share is a social share buttons for your next React apps."
          }
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={28} round />
        </FacebookShareButton>
      </motion.div>{" "}
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <FacebookMessengerShareButton
          url={"https://github.com/next-share"}
          appId={""}
        >
          <FacebookMessengerIcon size={28} round />
        </FacebookMessengerShareButton>{" "}
      </motion.div>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <WhatsappShareButton
          url={"https://github.com/next-share"}
          title={
            "next-share is a social share buttons for your next React apps."
          }
          separator=":: "
        >
          <WhatsappIcon size={28} round />
        </WhatsappShareButton>{" "}
      </motion.div>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <TwitterShareButton
          url={"https://github.com/next-share"}
          title={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <TwitterIcon size={28} round />
        </TwitterShareButton>{" "}
      </motion.div>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <LinkedinShareButton url={"https://github.com/next-share"}>
          <LinkedinIcon size={28} round />
        </LinkedinShareButton>{" "}
      </motion.div>
    </div>
  );
};

export default Socials;
