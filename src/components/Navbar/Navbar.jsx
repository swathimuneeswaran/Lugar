// // import { useState, useRef, useEffect } from "react";
// // import { MdMenu, MdClose, MdExpandMore, MdExpandLess } from "react-icons/md";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Lugar-Prime.png";
// // import { NavbarMenu } from "../../mockData/data.js";

// // function NavItem({ item, activeDropdown, setActiveDropdown, onClick, dropdownRef }) {
// //   const navigate = useNavigate();
// //   return (
// //     <li className="relative group">
// //       {item?.dropdown ? (
// //         <>
// //           <button
// //             onClick={() => onClick(item.id)}
// //             className="flex items-center text-gray-600 text-sm xl:text-base py-2 px-3 hover:text-secondary transition-all duration-300 font-semibold"
// //           >
// //             {item.title}
// //             {activeDropdown === item.id ? <MdExpandLess className="ml-1" /> : <MdExpandMore className="ml-1" />}
// //           </button>
// //           <AnimatePresence>
// //             {activeDropdown === item.id && (
// //               <motion.ul
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 transition={{ duration: 0.2 }}
// //                 className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
// //                 style={{
// //                   maxHeight: "calc(100vh - 100%)",
// //                   overflowY: "auto",
// //                   top: "100%"
// //                 }}
// //                 ref={dropdownRef}
// //               >
// //                 {item.dropdown.map((subItem, index) => (
// //                   <li key={index}>
// //                     <Link
// //                       to={subItem.link}
// //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         setActiveDropdown(null);
// //                         navigate(subItem?.link);
// //                       }}
// //                     >
// //                       {subItem.title}
// //                     </Link>
// //                   </li>
// //                 ))}
// //               </motion.ul>
// //             )}
// //           </AnimatePresence>
// //         </>
// //       ) : (
// //         <Link
// //           to={item.link}
// //           className="inline-block text-gray-600 text-sm xl:text-base py-2 px-3 hover:text-secondary transition-all duration-300 font-semibold"
// //         >
// //           {item.title}
// //         </Link>
// //       )}
// //     </li>
// //   );
// // }

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeDropdown, setActiveDropdown] = useState(null);
// //   const dropdownRef = useRef(null);

// //   const handleClickOutside = (event) => {
// //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //       setActiveDropdown(null);
// //     }
// //   };

// //   useEffect(() => {
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   const toggleDropdown = (id) => {
// //     setActiveDropdown(activeDropdown === id ? null : id);
// //   };

// //   return (
// //     <nav className="relative">
// //       <div className="w-full flex justify-between items-center py-4 px-4 md:px-8 shadow-lg rounded-lg bg-white">
// //         <Link to="/" className="text-2xl flex items-center gap-2 font-bold">
// //           <img src={logo} className="w-[149px] px-2" alt="Lugar Prime Logo" />
// //         </Link>

// //         <div className="hidden lg:block">
// //           <ul className="flex items-center justify-center space-x-6">
// //             {NavbarMenu.map((item) => (
// //               <NavItem
// //                 key={item.id}
// //                 item={item}
// //                 activeDropdown={activeDropdown}
// //                 setActiveDropdown={setActiveDropdown}
// //                 onClick={toggleDropdown}
// //                 dropdownRef={dropdownRef}
// //               />
// //             ))}
// //           </ul>
// //         </div>

// //         <div className="hidden lg:flex space-x-4">
// //           {/* <button className="font-semibold whitespace-nowrap">Sign in</button> */}
// //           <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 whitespace-nowrap">
// //             Contact Us
// //           </button>
// //         </div>

// //         <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
// //           {isOpen ? <MdClose className="text-3xl" /> : <MdMenu className="text-3xl" />}
// //         </button>
// //       </div>

// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, x: "-100%" }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: "-100%" }}
// //             transition={{ duration: 0.3 }}
// //             className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-start justify-start pt-20 px-4"
// //           >
// //             <ul className="w-full flex flex-col items-center">
// //               <img src={logo} className="w-[149px] px-2 mt-4" alt="Lugar Prime Logo" />
// //               {NavbarMenu.map((item) => (
// //                 <li key={item.id} className="my-2 mt-5">
// //                   {item.dropdown ? (
// //                     <div>
// //                       <button
// //                         onClick={() => toggleDropdown(item.id)}
// //                         className="flex items-center justify-between w-full text-left text-xl font-semibold py-2"
// //                       >
// //                         {item.title}
// //                         {activeDropdown === item.id ? <MdExpandLess /> : <MdExpandMore />}
// //                       </button>
// //                       <AnimatePresence>
// //                         {activeDropdown === item.id && (
// //                           <motion.ul
// //                             initial={{ opacity: 0, y: -10 }}
// //                             animate={{ opacity: 1, y: 0 }}
// //                             exit={{ opacity: 0, y: -10 }}
// //                             transition={{ duration: 0.2 }}
// //                             className="ml-4"
// //                           >
// //                             {item.dropdown.map((subItem, index) => (
// //                               <li key={index} className="my-5 flex items-center">
// //                                 <Link
// //                                   to={subItem.link}
// //                                   className="block text-gray-600 hover:text-secondary"
// //                                   onClick={() => setIsOpen(false)}
// //                                 >
// //                                   {subItem.title}
// //                                 </Link>
// //                               </li>
// //                             ))}
// //                           </motion.ul>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>
// //                   ) : (
// //                     <Link
// //                       to={item.link}
// //                       className="block text-xl font-semibold py-2"
// //                       onClick={() => setIsOpen(false)}
// //                     >
// //                       {item.title}
// //                     </Link>
// //                   )}
// //                 </li>
// //               ))}
// //             </ul>
// //             <div className="mt-6">
// //               {/* <button className="w-full text-center font-semibold py-2 mb-2">Sign in</button> */}
// //               {/* <button className="w-full text-center text-white bg-secondary font-semibold rounded-full py-2">
// //                 Get Started
// //               </button> */}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );

// // };

// // export default Navbar;

// import { useState, useRef, useEffect } from "react";
// import { MdMenu, MdClose, MdExpandMore, MdExpandLess } from "react-icons/md";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/Lugar-Prime.png";
// import { NavbarMenu } from "../../mockData/data.js";

// // function NavItem({ item, activeDropdown, setActiveDropdown, onClick, dropdownRef }) {
// //   const navigate = useNavigate();
// //   return (
// //     <li className="relative group">
// //       {item?.dropdown ? (
// //         <>
// //           <button
// //             onClick={() => onClick(item.id)}
// //             className="flex items-center justify-between w-full text-gray-600 text-sm xl:text-base py-2 px-3 hover:text-secondary transition-all duration-300 font-semibold"
// //           >
// //             <span>{item.title}</span>
// //             {activeDropdown === item.id ? <MdExpandLess className="ml-2" /> : <MdExpandMore className="ml-2" />}
// //           </button>
// //           <AnimatePresence>
// //             {activeDropdown === item.id && (
// //               <motion.ul
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 transition={{ duration: 0.2 }}
// //                 className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
// //                 style={{
// //                   maxHeight: "calc(100vh - 100%)",
// //                   overflowY: "auto",
// //                   top: "100%"
// //                 }}
// //                 ref={dropdownRef}
// //               >
// //                 {item.dropdown.map((subItem, index) => (
// //                   <li key={index}>
// //                     <Link
// //                       to={subItem.link}
// //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         setActiveDropdown(null);
// //                         navigate(subItem?.link);
// //                       }}
// //                     >
// //                       {subItem.title}
// //                     </Link>
// //                   </li>
// //                 ))}
// //               </motion.ul>
// //             )}
// //           </AnimatePresence>
// //         </>
// //       ) : (
// //         <Link
// //           to={item.link}
// //           className="inline-block text-gray-600 text-sm xl:text-base py-2 px-3 hover:text-secondary transition-all duration-300 font-semibold"
// //         >
// //           {item.title}
// //         </Link>
// //       )}
// //     </li>
// //   );
// // }

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const dropdownRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setActiveDropdown(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = (id) => {
//     setActiveDropdown(activeDropdown === id ? null : id);
//   };

//   return (
//     <nav className="relative">
//       <div className="w-full flex justify-between items-center py-4 px-4 md:px-8 shadow-lg rounded-lg bg-white">
//         <Link to="/" className="text-2xl flex items-center gap-2 font-bold">
//           <img src={logo} className="w-[149px] px-2" alt="Lugar Prime Logo" />
//         </Link>

//         <div className="hidden lg:block">
//           <ul className="flex items-center justify-center space-x-6">
//             {NavbarMenu.map((item) => (
//               <NavItem
//                 key={item.id}
//                 item={item}
//                 activeDropdown={activeDropdown}
//                 setActiveDropdown={setActiveDropdown}
//                 onClick={toggleDropdown}
//                 dropdownRef={dropdownRef}
//               />
//             ))}
//           </ul>
//         </div>

//         <div className="hidden lg:flex space-x-4">
//           <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 whitespace-nowrap">
//             Contact Us
//           </button>
//         </div>

//         <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <MdClose className="text-3xl" /> : <MdMenu className="text-3xl" />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "-100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "-100%" }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-start justify-start pt-20 px-4 overflow-y-auto"
//           >
//             <ul className="w-full flex flex-col items-center">
//               <img src={logo} className="w-[149px] px-2 mt-4" alt="Lugar Prime Logo" />
//               {NavbarMenu.map((item) => (
//                 <li key={item.id} className="my-2 mt-5 w-full">
//                   {item.dropdown ? (
//                     <div>
//                       <button
//                         onClick={() => toggleDropdown(item.id)}
//                         className="flex items-center justify-between w-full text-left text-xl font-semibold py-2"
//                       >
//                         {item.title}
//                         {activeDropdown === item.id ? <MdExpandLess /> : <MdExpandMore />}
//                       </button>
//                       <AnimatePresence>
//                         {activeDropdown === item.id && (
//                           <motion.ul
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             transition={{ duration: 0.2 }}
//                             className="ml-4"
//                           >
//                             {item.dropdown.map((subItem, index) => (
//                               <li key={index} className="my-2 flex items-center">
//                                 <Link
//                                   to={subItem.link}
//                                   className="block text-gray-600 hover:text-secondary"
//                                   onClick={() => setIsOpen(false)}
//                                 >
//                                   {subItem.title}
//                                 </Link>
//                               </li>
//                             ))}
//                           </motion.ul>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <Link
//                       to={item.link}
//                       className="block text-xl font-semibold py-2"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {item.title}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-6 w-full">
//               <button className="w-full text-center text-white bg-secondary font-semibold rounded-full py-2">
//                 Contact Us
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { NavbarMenu } from "../../mockData/data.js";
// import { MdMenu } from "react-icons/md";
// import { motion } from "framer-motion";
// import ResponsiveMenu from "./ResponsiveMenu.jsx";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//       >
//         <div className="container flex justify-between items-center py-3 shadow-lg bg-white fixed top-7 left-0 w-full z-50">
//           {/* Logo section */}
//           <div className="text-2xl flex items-center gap-2 font-bold">
//             <img src={logo} className="w-[149px] px-2" alt="Lugar Prime Logo" />
//           </div>

//           {/* Menu section */}
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-6">
//               {NavbarMenu.map((item) => {
//                 return (
//                   <li key={item.id}>
//                     <a
//                       href={item.link}
//                       className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
//                     >
//                       {item.title}
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//           {/* CTA Button section */}
//           <div className="hidden lg:block space-x-6">
//             {/* <button className="font-semibold">Sign in</button> */}
//             <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 ">
//               Contact Us
//             </button>
//           </div>
//           {/* Mobile Hamburger Menu */}
//           <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
//             <MdMenu className="text-4xl" />
//           </div>
//         </div>
//       </motion.div>

//       {/* mobile Sidebar section */}
//       <ResponsiveMenu isOpen={isOpen} />
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
       <div className="w-full fixed top-0 left-0 right-0 z-50 shadow-lg bg-white">
  <div className="container mx-auto flex justify-between items-center py-3 px-4 ">
    {/* Logo section */}
    <div className="text-2xl flex items-center gap-2 font-bold">
      <img src={logo} className="w-[210px] px-2" alt="Lugar Prime Logo" />
    </div>

    {/* Menu section */}
    <div className="hidden lg:block">
      <ul className="flex items-center gap-6">
        {NavbarMenu.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* CTA Button section */}
    <div className="hidden lg:block space-x-6">
  <a
    href="https://wa.me/918825827613" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
    Connect Now
    </button>
  </a>
</div>


    {/* Mobile Hamburger Menu */}
    <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
      <MdMenu className="text-4xl" />
    </div>
  </div>
</div>

      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
