import React from 'react';
import styles from './aside.module.scss';
import thumbnailPng from 'assets/images/profile.jpg';

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
            // src={thumbnailPng} 
            alt="프로필 이미지"
          />
        </div>

        <div className={styles.info}>
          <p className={styles.name}>Shaun(Net Ninja)</p>
          <p className={styles.email}>Shaun(Net Ninja)</p>
        </div>

        <button className={styles.btn}>Send</button>

        <div className={styles.hobbyItems}>
          {hobbys.map(item => {
            return (
              <div className={styles.item}>{item.name}</div>
            );
          })}
        </div>

      </div>

    </div>


  );
};

export default Aside;