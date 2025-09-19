import React from 'react';
import { FiLink } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import thumbnailPng from 'assets/images/emoji.png';
import styles from './aside.module.scss';

const Aside = () => {
  return (
    <aside className={styles.root} aria-label="Sidebar profile info">
      <figure className={styles.profile}>
        <img src={thumbnailPng} alt="Seo GyeongEon profile" className={styles.thumbnail} />

        <figcaption className={styles.info}>
          <p className={styles.name}>서경언</p>
          <p className={styles.email}>SeoGyeongEon</p>
          <p className={styles.desc}>
            퍼블리셔로 시작해 프론트엔드까지, <br /> 새로운 도전과 꾸준함으로 성장해나는 개발자입니다.
            {/* "퍼블리싱과 프론트엔드 가능한 UI 개발자, 새로운 도전과 꾸준함을 통해 끊임없는 성장을 추구합니다." */}
          </p>
        </figcaption>
      </figure>

      <div className={styles.contact}>
        <a href="https://my.surfit.io/w/1557039046" target="_blank" rel="noopener noreferrer">
          <FiLink />
          <span >간단한이력서.com</span>
        </a>
        <div><AiOutlineMail /> seoddaddo@naver.com</div>
        <div><MdOutlinePhoneAndroid /> 010-2701-5717</div>
      </div>
    </aside>
  );
};

export default Aside;
