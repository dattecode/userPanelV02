import React from "react";
import "../styles/headerCss.css";
import { AnimatePresence, motion } from "framer-motion";
import { IconMoonStars, IconSunFilled } from "@tabler/icons-react";

const HeaderCp = ({ openModal, handleDarkMode, isDarkMode }) => {
  return (
    <section className="subDecoration">
      <div className="containerHeader">
        <motion.button
          className="darkBtn"
          whileHover={{ scale: 1.2, rotate: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleDarkMode()}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {isDarkMode ? <IconSunFilled /> : <IconMoonStars />}
        </motion.button>
        <h2>Users</h2>
        <motion.button
          onClick={() => openModal()}
          className="addUserBtn"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 1 }}
        >
          Create
        </motion.button>
      </div>
    </section>
  );
};

export default HeaderCp;
