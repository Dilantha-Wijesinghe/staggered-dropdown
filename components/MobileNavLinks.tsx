import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';

interface MobileNavLinkProps {
  title: string;
  href: string;
}
function MobileNavLinks({title, href}: MobileNavLinkProps) {

  const mobileLinkVars = {
    initial: { 
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1]
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1]
      }
    }
  }  
  
  return (
    <motion.div 
      
      variants={mobileLinkVars}
      
      
      className='text-4xl uppercase text-slate-900'>
      <Link href={href}>
        {title}
      </Link>
    </motion.div>
  );
}

export default MobileNavLinks