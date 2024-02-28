import React from "react";

import styles from "./cardcomponent.module.css";

import { AiOutlineMail } from "react-icons/ai";
import { LiaPhoneSolid } from "react-icons/lia";
import { IoGlobeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const CardComponent = ({
  name = "Name",
  email = "example@gmail.com",
  phoneNumber = "1-770-736-8031 x56442",
  url = "http://example.org",
  setOpenModal = () => {},
  setUserData = () => {},
  setUserIndex = () => {},
  setData = () => {},
  index,
  data,
}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardHeaderImage}>
        <img src="https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy" />
      </div>
      <div className={styles.cardContent}>
        <h3 style={{ fontSize: "16px" }}>{name}</h3>
        <div>
          <div className={styles.iconTextContainer}>
            <AiOutlineMail className={styles.iconClass} />
            <p>{email}</p>
          </div>
          <div className={styles.iconTextContainer}>
            <LiaPhoneSolid
              className={styles.iconClass}
              style={{ transform: "rotate(270deg)" }}
            />
            <p>{phoneNumber}</p>
          </div>
          <div className={styles.iconTextContainer}>
            <IoGlobeOutline className={styles.iconClass} />
            <p>{url}</p>
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.iconContainer}>
          {data[index]?.liked ? (
            <GoHeartFill
              onClick={() => {
                let tempArr = [...data];
                tempArr[index].liked = false;

                setData([...tempArr]);
              }}
              className={styles.heartIcon}
            />
          ) : (
            <GoHeart
              onClick={() => {
                let tempArr = [...data];
                tempArr[index].liked = true;

                setData([...tempArr]);
              }}
              className={styles.heartIcon}
            />
          )}
        </div>
        <div className={styles.iconContainer}>
          <AiOutlineEdit
            onClick={() => {
              setUserIndex(index);
              setUserData({
                name: name,
                email: email,
                phone: phoneNumber,
                website: url,
              });
              setOpenModal(true);
            }}
            className={styles.footerIcons}
          />
        </div>
        <div>
          <AiFillDelete
            onClick={() => {
              const tempArr = [...data];
              tempArr.splice(index, 1);
              setData([...tempArr]);
            }}
            className={styles.footerIcons}
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
