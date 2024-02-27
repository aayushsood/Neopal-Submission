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
}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardHeaderImage}>
        <img src="https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy" />
      </div>
      <div className={styles.cardContent}>
        <h3>{name}</h3>
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
            <IoGlobeOutline
              className={styles.iconClass}
              style={{ transform: "rotate(270deg)" }}
            />
            <p>{url}</p>
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.iconContainer}>
          <GoHeart className={styles.heartIcon} />
        </div>
        <div className={styles.iconContainer}>
          <AiOutlineEdit
            onClick={() => {
              setOpenModal(true);
            }}
            className={styles.footerIcons}
          />
        </div>
        <div>
          <AiFillDelete className={styles.footerIcons} />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
