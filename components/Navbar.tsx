'use client';

import Link from "next/link";
import React from "react";
import { useState } from "react";
import AnimatedLink from "./AnimatedLink";
import MobileNavLinks from "./MobileNavLinks";
import { AnimatePresence, motion } from "framer-motion";


type Props = {}

const navLinks = [
  { title: "What we do", href: "/" },
  { title: "How it works", href: "/" },
  { title: "Case studies", href: "/" },
  { title: "About", href: "/" },
  { title: "Contact", href: "/" },
]

function Navbar({}: Props) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      }
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
      
    },
  }

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:py-4 px-2">
        <div className="flex items-center gap-[1ch]">
          <div className="w-5 h-5 bg-yellow-400 rounded-full" />
          <span className="text-sm font-semibold tracking-widest text-slate-900">
            PORTFOLIO
          </span>
        </div>
        <div className="lg:flex hidden gap-12 text-base text-zinc-400">
          <Link href="#" className="text-slate-900 font-medium">
            <AnimatedLink />
          </Link>

          <AnimatedLink />
          <AnimatedLink />
        </div>
        <div
          className="cursor-pointer lg:hidden text-base font-semibold text-slate-900 mr-2"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </nav>

      <AnimatePresence>
        {open && (
        <motion.div
        
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"

          className="fixed left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-slate-900 p-10">
          <div className="flex h-full flex-col">
            <div className="flex justify-between">
              <h1 className="text-lg text-slate-900">Portfolio</h1>
              <p className="cursor-pointer text-base text-slate-900"
              onClick={toggleMenu}
              >
                Close
              </p>
            </div>
            {/* mapping the links */}
            <motion.div 
              
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"

              className="flex flex-col h-full justify-center font-lora items-center gap-4">
              {
                navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLinks key={index} title={link.title} href={link.href} />
                    </div>
                )})
              }
            </motion.div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

export default Navbar
