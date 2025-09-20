import React from 'react';
import clsx from 'clsx';
import styles from './about.module.scss';

const About = () => {
  const getTotalExperience = () => {
    const start = new Date(2017, 10); // JS Date: 0부터 시작, 10 = 11월
    const today = new Date();

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return months > 0 ? `${years}년 ${months}개월` : `${years}년`;
  };

  return (
    <div className={styles.root}>
      <div className={styles.readme}>

        <div className={styles.title}><span>📖 READ ME</span></div>

        <div className={styles.info}>
          <p>
            안녕하세요! UI개발자 서경언입니다.<br /><br />
            퍼블리싱과 프론트엔드 개발 경력 {getTotalExperience()},<br />
            UI와 기능 개발을 효과적으로 결합하여 사용자에게 만족스러운 서비스를 제공하는 일에 열정을 가지고 있으며,<br />
            다양한 프로젝트를 통해 폭넓은 경험과 전문성을 길러왔습니다.<br /><br />
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.repoHeader}><h1>Education</h1></div>
          <div className={clsx(styles.tagList)} role="list">
            <div>가천대학교 컴퓨터공학</div>
            <div>동광고 문과계열</div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.repoHeader}><h1>Skills</h1></div>
          <div className={clsx(styles.tagList)} role="list">
            <div>React</div>
            <div>Javascript</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
          <div className={clsx(styles.tagList, styles.grey)} role="list">
            <div>GitHub</div>
            <div>Jira</div>
            <div>Figma</div>
            <div>Zeplin</div>
            <div>Visual Studio Code</div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.repoHeader}><h1>Certificate</h1></div>
          <div className={clsx(styles.tagList)} role="list">
            <div>정보처리기사</div>
            <div>TOEIC 855</div>
            <div>TOEIC SPEAKING 140</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
