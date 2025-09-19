import React from 'react';
import styles from './aside.module.scss';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaRegBuilding } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import thumbnailPng from 'assets/images/emoji.png';

const Aside = ({
  onClose,
}) => {
  const hobbys = [
    { name: 'Code Ninja', icon: '' },
    { name: 'Traveller', icon: '' },
    { name: 'Code Ninja', icon: '' },
    { name: 'Traveller', icon: '' },
    { name: 'Code Ninja', icon: '' },
    { name: 'Traveller', icon: '' },
  ];

  hobbys.map(item => {
    console.log(item)
  })

  return (
    <div className={styles.root}>
      {/* <button onClick={onClose}>X</button> */}
      <div className={styles.profile}>

        <div className={styles.thumbnail}>
          <img
            src={thumbnailPng}
            alt="프로필 이미지"
          />
        </div>

        <div className={styles.info}>
          {/* <p className={styles.name}>Seo g (Net Ninja)</p> */}
          <p className={styles.name}>서경언</p>
          <p className={styles.email}>(Seo GyeongEon)</p>
          {/* <p className={styles.email}>seoddaddo@naver.com</p> */}
          <p className={styles.desc}>"퍼블리싱과 프론트엔드 가능한 UI 개발자, 새로운 도전과 꾸준함을 통해 끊임없는 성장을 추구합니다."</p>
        </div>


        {/* <div style={{ display: "inline-flex", alignItems: "start", gap: "4px", fontSize: "16px" }}>
          <FaRegBuilding size={18} color="#4b5563" />
          <span style={{ color: "#111827" }}>@dktechin</span>
        </div> */}
        <div style={{ display: "inline-flex", alignItems: "start", marginTop: '10px', gap: "4px", fontSize: "16px" }}>
          <FiLink size={18} color="#4b5563" />
          <a href="https://my.surfit.io/w/1557039046" target="_blank" rel="noopener noreferrer">
            <span style={{ color: "#0969da" }}>간단한이력서.com</span>
          </a>
        </div>
        <div style={{ display: "inline-flex", alignItems: "start", marginTop: '10px', gap: "4px", fontSize: "16px" }}>
          <AiOutlineMail size={18} color="#4b5563" />
          <span style={{ color: "#111827" }}>seoddaddo@naver.com</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "start", marginTop: '10px', gap: "4px", fontSize: "16px" }}>
          <MdOutlinePhoneAndroid size={18} color="#4b5563" />
          <span style={{ color: "#111827" }}>010-2701-5717</span>
        </div>

        {/* <button className={styles.btn}>Send</button> */}

        {/* <div className={styles.hobbyItems}>
          {hobbys.map(item => {
            return (
              <div className={styles.item}>{item.name}</div>
            );
          })}
        </div> */}

      </div>

    </div>


  );
};

export default Aside;