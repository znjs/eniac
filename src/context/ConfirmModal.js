import { createContext, useContext, useState } from "react";

const ConfirmModalContext = createContext();

const ConfirmModalProvider = ({ children }) => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <ConfirmModalContext.Provider
      value={{ confirmModal, setConfirmModal, isConfirm, setIsConfirm }}
    >
      {children}
    </ConfirmModalContext.Provider>
  );
};

const useConfirmModal = () => useContext(ConfirmModalContext);

export { useConfirmModal, ConfirmModalProvider };
