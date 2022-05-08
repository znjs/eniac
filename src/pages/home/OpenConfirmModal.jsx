import React from "react";
import { useConfirmModal } from "../../context";

function OpenConfirmModal() {
  const { confirmModal, setConfirmModal, setIsConfirm } = useConfirmModal();
  return (
    <>
      <div
        className={`modal-container justify-center items-center fixed ${
          confirmModal ? "flex" : "hidden"
        }`}
        onClick={() => setConfirmModal(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal-container-main flex flex-col relative  gap-4 py-6 px-8 rounded-xl w-96  bg-nav-background "
        >
          <p className="text-lg">
            ! Are you sure want schedule this interview ?
          </p>

          <div className="flex items-end">
            <button
              className="px-4 py-1 rounded-lg bg-red-500 text-white font-bold hover:bg-red-400 max-w-xs mx-auto"
              onClick={() => setConfirmModal(false)}
            >
              Later
            </button>
            <button
              className="px-4 py-1 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-400 max-w-xs mx-auto"
              onClick={() => {
                setIsConfirm(true);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { OpenConfirmModal };
