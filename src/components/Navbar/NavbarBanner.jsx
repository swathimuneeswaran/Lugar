import React from "react";
import { motion } from "framer-motion";

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-red-500 text-white text-sm text-center font-semibold p-2 fixed top-[85px] left-0 w-full z-50" // Adjusted top to avoid overlap
      >
        We specialize in custom software development, helping businesses streamline operations and maximize efficiency.
        <a href="#" className="text-secondary ml-2">Talk to us</a>
        <div
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;
