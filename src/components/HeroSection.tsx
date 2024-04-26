"use client";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";



function HeroSection(){
return (
    <AuroraBackground>
              <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative
    overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent  bg-gradient-to-b from-amber-100 to-teal-400">Passive Money</h1>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          For Passive Monkeys
        </div>

    </div>


    </motion.div>
    </AuroraBackground>
)

}
export default HeroSection