"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import Socials from "../Socials";
import { Navlinks } from "@/constants/index";
import { motion } from "framer-motion";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="sm:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <div className="flex justify-center h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={"/sa.png"} alt="logo" height={40} width={40} />
              <span className="">Piyush Shrestha</span>
            </Link>
          </div>
          <VisuallyHidden>
            <SheetTitle className="text-sm px-3">Main Links</SheetTitle>
            <SheetDescription>Sidebar navigation links</SheetDescription>
          </VisuallyHidden>
          <nav className="grid pt-10 items-center px-2 text-sm font-medium lg:px-4">
            {Navlinks.map((link) => (
              <motion.div
                key={link.key} // Ensure each motion.div has a unique key
                whileHover={{ scale: 1.1 }}
                transition={{ type: "tween" }}
              >
                <SheetClose asChild>
                  <Link
                    key={link.key} // This key is not necessary on the Link component itself
                    href={link.href}
                    className={`flex items-center gap-3 rounded-lg px-2 py-2 text-muted-foreground transition-transform duration-300 hover:text-primary justify-center ${
                      pathname === link.href ? "text-primary" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              </motion.div>
            ))}
          </nav>
          <div className="pt-10">
            <Socials />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
