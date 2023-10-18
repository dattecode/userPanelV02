import React from "react";
import "../styles/modalCss.css";
import { motion } from "framer-motion";
import { IconCircleX } from "@tabler/icons-react";

const ModalUser = ({
  handleSubmit,
  register,
  createUser,
  handleCloseModal,
  isIdUpdate,
  updateUser,
  errors,
}) => {
  //logic
  const submit = (data) => {
    data.image_url = null;

    if (isIdUpdate) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

  //animated
  const delayVariant = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.16 },
    },
    closed: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
  };

  return (
    <motion.section
      className="sectForm"
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{
        opacity: 1,
        scale: 1,
        borderRadius: ["80%", "40%", "30%", "10%", "0%"],
      }}
      exit={{
        opacity: 0,
        scale: 0.1,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.form
        onSubmit={handleSubmit(submit)}
        className="formContainer"
        variants={delayVariant}
        initial="closed"
        animate="open"
        exit={{ opacity: 0, scale: [1, 1.2, 0.3] }}
        transition={{ duration: 0.5 }}
        key={Math.random()}
      >
        <motion.button
          className="closeBtn"
          type="button"
          onClick={() => handleCloseModal()}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1 }}
        >
          <IconCircleX />
        </motion.button>
        <h2>{isIdUpdate ? "Update User" : "Create User"}</h2>
        <motion.div className="divForm" variants={delayVariant}>
          <label htmlFor="email" className="labelForm">
            Email
          </label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            className="inputForm"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Mail",
              },
              maxLength: {
                value: 30,
                message: "Enter fewer characters 30",
              },
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </motion.div>
        <motion.div className="divForm" variants={delayVariant}>
          <label htmlFor="password" className="labelForm">
            Password
          </label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            className="inputForm"
            {...register("password", {
              maxLength: {
                value: 25,
                message: "enter fewer characters 25",
              },
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </motion.div>
        <motion.div className="divForm" variants={delayVariant}>
          <label htmlFor="first_name" className="labelForm">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            autoComplete="off"
            className="inputForm"
            {...register("first_name", {
              maxLength: {
                value: 25,
                message: "enter fewer characters 25",
              },
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          {errors.first_name && <span>{errors.first_name.message}</span>}
        </motion.div>
        <motion.div className="divForm" variants={delayVariant}>
          <label htmlFor="last_name" className="labelForm">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            autoComplete="off"
            className="inputForm"
            {...register("last_name", {
              maxLength: {
                value: 25,
                message: "enter fewer characters 25",
              },
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          {errors.last_name && <span>{errors.last_name.message}</span>}
        </motion.div>
        <motion.div className="divForm" variants={delayVariant}>
          <label htmlFor="birthday" className="labelForm">
            Birthday
          </label>
          <input
            type="date"
            id="birthday"
            autoComplete="off"
            className="inputForm"
            {...register("birthday", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          {errors.birthday && <span>{errors.birthday.message}</span>}
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="btnForm"
        >
          {isIdUpdate ? "Update" : "Create"}
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default ModalUser;
