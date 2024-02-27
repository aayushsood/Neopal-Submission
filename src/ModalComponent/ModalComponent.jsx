import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const ModalComponent = ({ open = false, setOpen = () => {} }) => {
  return (
    <div
      style={{
        display: open ? "flex" : "none",
      }}
      class="modalOverlay"
    >
      <div className="modalMainBody">
        <div className="headerContainer">
          <p className="modalHeading">Basic Modal</p>
          <IoCloseOutline
            onClick={() => {
              setOpen(false);
            }}
            className="modalCloseIcon"
          />
        </div>

        <div className="contentContainer">
          <div className="singleInputContainer">
            <p style={{ color: "red" }}>*</p>
            <p className="inputLabel">Name:</p>
          </div>
          <div className="parentInput">
            <input />
          </div>
          <div className="singleInputContainer">
            <p style={{ color: "red" }}>*</p>
            <p className="inputLabel">Email:</p>
          </div>
          <div className="parentInput">
            <input />
          </div>
          <div className="singleInputContainer">
            <p style={{ color: "red" }}>*</p>
            <p className="inputLabel">Phone:</p>
          </div>
          <div className="parentInput">
            <input />
          </div>
          <div className="singleInputContainer">
            <p style={{ color: "red" }}>*</p>
            <p className="inputLabel">Website:</p>
          </div>
          <div className="parentInput">
            <input />
          </div>
        </div>

        <div className="modalFooter">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "15px",
            }}
          >
            <button
              style={{
                padding: "7px 15px",
                background: "#fff",
                border: "1px solid #40a9ff",
                color: "#40a9ff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              style={{
                marginLeft: "5px",
                padding: "7px 15px",
                color: "#fff",
                background: "#1890ff",
                border: "1px solid #1890ff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
