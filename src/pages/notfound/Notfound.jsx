import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./notfound.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="notfound__code"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="notfound__title"
      >
       Страница не найдена
      </motion.h2>
    </div>
  );
};

export default NotFound;