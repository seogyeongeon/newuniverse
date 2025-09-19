import React from 'react';
import clsx from 'clsx';
import styles from './resume.module.scss';

const Resume = () => {
  return (
    <div className={styles.root}>

      <div className={styles.readme}>
        <div className={styles.top}>
          <span> 📖 READ ME</span>
        </div>

        <div className={styles.info}>

          <div>
            안녕하세요! UI개발자 서경언입니다.</div>
          {/* <br /> */}

          {/* <div>
            "퍼블리싱과 프론트엔드 가능한 UI 개발자,
            새로운 도전과 꾸준함을 통해 끊임없는 성장을 추구합니다."
          </div> */}
          <br />
          <div>
            퍼블리싱과 프론트엔드 개발 경력 7년,<br />
            UI와 기능 개발을 효과적으로 결합하여 사용자에게 만족스러운 서비스를 제공하는 일에 열정을 가지고 있으며,<br />
            다양한 프로젝트를 통해 폭넓은 경험과 전문성을 길러왔습니다.
          </div>
        </div>


        <br />

        <div className={styles.content}>
          <div className={clsx(styles.repoHeader, styles.start)}>
            <h1>Education</h1>
          </div>

          <div className={styles.folderList}>
            <div>가천대학교 컴퓨터공학</div>
            <div>동광고 문과계열</div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={clsx(styles.repoHeader, styles.start)}>
            <h1>Skills</h1>
          </div>

          <div className={styles.folderList}>
            <div>React</div>
            <div>Javascript</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
          <div className={clsx(styles.folderList, styles.grey)}>
            <div>GitHub</div>
            <div>Jira</div>
            <div>Figma</div>
            <div>Zeplin</div>
            <div>Visual Studio Code</div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={clsx(styles.repoHeader, styles.start)}>
            <h1>Certificate</h1>
          </div>

          <div className={styles.folderList}>
            <div>정보처리기사</div>
            <div>TOEIC 855</div>
            <div>TOEIC SPECKING 140</div>
          </div>
        </div>
      </div>

    </div >
  )
};

export default Resume;