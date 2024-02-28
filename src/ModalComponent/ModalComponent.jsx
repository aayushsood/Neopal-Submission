import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ModalComponent = ({
  open = false,
  setOpen = () => {},
  userData = {},
  setUserData = () => {},
  setData = () => {},
  data = [],
  userIndex,
}) => {
  const [error, setError] = useState({});

  const handleErrors = () => {
    let err = false;

    let errObj = {
      name: "",
      email: "",
      phone: "",
      website: "",
    };

    if (userData?.name?.trim() === "") {
      errObj.name = "This field is required";
      err = true;
    }

    if (userData?.email?.trim() === "") {
      errObj.email = "This field is required";
      err = true;
    } else if (!emailRegex.test(userData?.email)) {
      errObj.email = "Invalid email";
      err = true;
    }

    if (userData?.phone?.trim() === "") {
      errObj.phone = "This field is required";
      err = true;
    }

    if (userData?.website?.trim() === "") {
      errObj.website = "This field is required";
      err = true;
    }

    setError({ ...errObj });
    return err;
  };

  const handleOk = () => {
    if (!handleErrors()) {
      let tempArr = [...data];

      let { name, email, phone, website } = userData;

      tempArr.splice(userIndex, 1, {
        name,
        email,
        number: phone,
        url: website,
      });
      setData([...tempArr]);
      setOpen(false);
    }
  };

  useEffect(() => {
    handleErrors();
  }, [userData]);

  return (
    <div
      style={{
        display: open ? "flex" : "none",
      }}
      class="modalOverlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
        }
      }}
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
            <input
              value={userData?.name}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
              className={`${error?.name ? "inputStyleError" : "inputStyle"} `}
            />
            <p className="error-text">{error.name}</p>
          </div>
          <div className="singleInputContainer">
            <p style={{ color: "red" }}>*</p>
            <p className="inputLabel">Email:</p>
          </div>
          <div className="parentInput">
            <input
              value={userData?.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              className={`${error?.email ? "inputStyleError" : "inputStyle"} `}
            />
            <p className="error-text">{error.email}</p>
          </div>
          <div className="singleInputContainer">
            <p style={{ color: "red" }}>*</p>
            <p className="inputLabel">Phone:</p>
          </div>
          <div className="parentInput">
            <input
              value={userData?.phone}
              onChange={(e) => {
                setUserData({ ...userData, phone: e.target.value });
              }}
              className={`${error?.phone ? "inputStyleError" : "inputStyle"} `}
            />
            <p className="error-text">{error.phone}</p>
          </div>
          <div className="singleInputContainer">
            <p style={{ color: "red" }}>*</p>
            <p className="inputLabel">Website:</p>
          </div>
          <div className="parentInput">
            <input
              value={userData?.website}
              onChange={(e) => {
                setUserData({ ...userData, website: e.target.value });
              }}
              className={`${
                error?.website ? "inputStyleError" : "inputStyle"
              } `}
            />
            <p className="error-text">{error.website}</p>
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
              onClick={() => {
                handleOk();
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
