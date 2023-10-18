import React from "react";
import "../styles/userCardCss.css";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import { easeInOut, motion } from "framer-motion";


const UserCard = ({ user, handleUpdate, deleteUser }) => {

  const btnCard = {
    hover:{
      scale:1.2,
      rotate:[0,15,0,-15],
    },
    tap:{
      scale:0.9
    }
  }

  return (
    <motion.article 
    className="containerCard"
    initial={{scale:0.5, opacity:0}}
    animate={{scale:1, opacity:1}}
    exit={{scale:0.3, opacity:0}}
    layout
    >
      <h2 className="titleName">{user.first_name}</h2>
      <div className="hr70" />
      <div />
      <section className="userInfo">
        <div className="divInfo">
          <p className="pCard">Email</p>
          <strong>{user.email}</strong>
        </div>
        <div className="divInfo">
          <p className="pCard">Birthday</p>
          <strong>{user.birthday}</strong>
        </div>
      </section>
      <div className="hr70" />
      <div />
      <section className="userEdit">
        <div className="btnsEdit">
          <motion.button 
          className="btnCard btnDelete"
          onClick={() => deleteUser(user.id)}
          whileHover="hover"
          whileTap="tap"
          transition={{
            duration:0.4,
            ease:easeInOut,
          }}
          variants={btnCard}
          >
            <IconTrash />
          </motion.button>
          <motion.button 
          className="btnCard btnUpdate"
          onClick={() => handleUpdate(user)}
          whileHover="hover"
          whileTap="tap"
          transition={{
            duration:0.4,
            ease:easeInOut,
          }}
          variants={btnCard}
          >
            <IconEdit />
          </motion.button>
        </div>
      </section>
    </motion.article>
  );
};

export default UserCard;
