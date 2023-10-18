import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import ModalUser from "./components/ModalUser";
import EMPTY_VALUES from "./utils/EMPTY_VALUES";
import HeaderCp from "./components/HeaderCp";
import UsersList from "./components/UsersList";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const BASE_URL = "https://users-crud.academlo.tech/users/";
  //state
  const [users, setUsers] = useState([]);
  const [isIdUpdate, setIsIdUpdate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setisDarkMode] = useState(false);

  //react hook form
  const { handleSubmit, reset, register, formState } = useForm();
  const { errors } = formState;

  //logic
  const handleCloseModal = () => {
    setShowModal(false);
    reset(EMPTY_VALUES);
    setIsIdUpdate(null);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleUpdate = (userInfo) => {
    handleOpenModal();
    reset(userInfo);
    setIsIdUpdate(userInfo);
  };

  const handleDarkMode = () => {
    setisDarkMode(!isDarkMode);
  };

  //https
  const getAllUsers = () => {
    axios
      .get(BASE_URL)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createUser = (data) => {
    axios
      .post(BASE_URL, data)
      .then(() => {
        getAllUsers();
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete(BASE_URL + `${id}/`)
      .then(() => {
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (data) => {
    axios
      .patch(BASE_URL + `${isIdUpdate.id}/`, data)
      .then(() => {
        getAllUsers();
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  //effect
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <motion.div layout
    className={`page ${
      isDarkMode ? "isDarkMode" : "isLightMode" 
    }`}
    >
      <AnimatePresence>
        {showModal ? (
          <ModalUser
            createUser={createUser}
            handleSubmit={handleSubmit}
            register={register}
            handleCloseModal={handleCloseModal}
            showModal={showModal}
            isIdUpdate={isIdUpdate}
            updateUser={updateUser}
            errors={errors}
          />
        ) : (
          ""
        )}
      </AnimatePresence>
      <HeaderCp 
      openModal={handleOpenModal} 
      handleDarkMode={handleDarkMode} 
      isDarkMode={isDarkMode}
      />
      <UsersList
        users={users}
        handleUpdate={handleUpdate}
        deleteUser={deleteUser}
      />
    </motion.div>
  );
}

export default App;
