import React from "react";
import UserCard from "./UserCard";
import "../styles/userListCss.css";
import { AnimatePresence } from "framer-motion";

const UsersList = ({ users, handleUpdate, deleteUser }) => {
  return (
    <article className="containerCards">
      <AnimatePresence>
        {users.map((user) => (
          <UserCard
            user={user}
            key={user.id}
            handleUpdate={handleUpdate}
            deleteUser={deleteUser}
          />
        ))}
      </AnimatePresence>
    </article>
  );
};

export default UsersList;
