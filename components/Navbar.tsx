"use client";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import MobileNav from "./ui/mobile-nav";
import { Navlinks } from "@/constants/index";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
      setIsVisible(true);
    } else if (window.scrollY < scrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setIsAtTop(false);
    }
    setScrollY(window.scrollY);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const linkVariants = {
    hidden: {
      width: "0%",
      left: "50%",
    },
    visible: {
      width: "100%",
      left: "0%",
    },
  };

  return (
    <nav
      className={`items-center bg-background py-3 px-10 md:px-20 lg:px-40 xl:px-56 fixed left-0 z-50 w-full flex justify-between transition-transform duration-300 ${
        isAtTop ? "mt-0 shadow-lg sm:shadow-none sm:mt-10" : "mt-0 shadow-lg"
      } ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex items-center gap-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/">
            <Image
              src={"/sa.png"}
              alt="logo"
              height={100}
              width={100}
              className="w-10 h-10"
              priority
            />
          </Link>
        </motion.div>
      </div>
      <div className="hidden sm:flex gap-7">
        {Navlinks.map((link) => (
          <motion.div
            key={link.key}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "tween" }}
          >
            <Link
              href={link.href}
              className={`fs-400 fw-medium hover:text-primary transition-all relative ${
                pathname === link.href ? "text-primary" : ""
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  className="absolute -bottom-2 left-0 h-[2px] bg-primary"
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <ModeToggle />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
