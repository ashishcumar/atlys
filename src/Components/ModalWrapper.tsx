import React from "react";

interface ModalProps {
  isOpen: boolean;
  // onClose: () => void;
  children: React.ReactNode;
}

const ModalWrapper = (props: ModalProps) => {
  const { isOpen,  children } = props;
  if (!isOpen) return null;

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          // backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
          position: "relative",
        }}
      >
        {/* <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "none",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          &times;
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
