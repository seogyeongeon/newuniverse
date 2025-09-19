import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from './home-graph.module.scss';

const developerPattern = {
  D: [
    [1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 0]
  ],
  E: [
    [1, 1, 1, 1], [1, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0], [1, 1, 1, 1]
  ],
  V: [
    [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0], [0, 0, 0, 0]
  ],
  L: [
    [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 1]
  ],
  O: [
    [0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]
  ],
  P: [
    [1, 1, 1, 0], [1, 0, 0, 1], [1, 1, 1, 0], [1, 0, 0, 0], [1, 0, 0, 0]
  ],
  R: [
    [1, 1, 1, 0], [1, 0, 0, 1], [1, 1, 1, 0], [1, 0, 1, 0], [1, 0, 0, 1]
  ],
  B: [
    [1, 1, 0, 0], [1, 0, 1, 0], [1, 1, 0, 0], [1, 0, 1, 0], [1, 1, 0, 0]
  ],
  I: [
    [1, 1, 1, 1], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [1, 1, 1, 1]
  ],
  S: [
    [0, 1, 1, 1], [1, 0, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 1, 1, 0]
  ],
  H: [
    [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1], [1, 0, 0, 1], [1, 0, 0, 1]
  ],
  U: [
    [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]
  ]
};

// const word = "DEVELOPER";
const wordList = ["DEVELOPER", "PUBLISHER"];
// PUBLISHER
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
// const colors = ["#aceebb", "#4ac26b", "#2da44e", "#116329"]; // LED 랜덤 색상
const colors = ["#4ac26b", "#2da44e", "#116329"]; // LED 랜덤 색상

export default function HomeGrapth() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [matrixColors, setMatrixColors] = useState([]); // LED 색상 저장

  const word = wordList[wordIndex];

  const getLetterRows = (char) => developerPattern[char] || [];

  // 자동 단어 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true); // 깜빡임 애니메이션 시작
      setTimeout(() => {
        setWordIndex(prev => (prev + 1) % wordList.length);
        setAnimating(false);
      }, 500); // 깜빡임 0.5초 후 단어 변경
    }, 1500);
    return () => clearInterval(interval);
  }, []);


  const letterHeight = 5; // 글자 세로 크기
  const gap = 1; // 글자 간 간격
  // 글자 패턴을 1차원 배열로 변환
  // const getLetterRows = (char) => developerPattern[char];

  // 각 요일별 LED 생성
  const matrix = days.map((day, dayIdx) => {
    const row = [];
    for (let char of word) {
      // 글자 패턴에서 요일별로 표시 (dayIdx % letterHeight)
      row.push(...getLetterRows(char)[dayIdx % letterHeight], ...Array(gap).fill(0));
    }
    return row;
  });

  return (
    <div className={styles.root}>
      <div className={styles.title}>0 contributions in 2025</div>

      <div className={styles.container}>

        {/* 월 헤더 */}
        <div className={styles.headerRow}>
          <div className={styles.emptyCell} />
          {months.map((month, idx) => (
            <div key={idx} className={styles.headerCell}>{month}</div>
          ))}
        </div>

        {/* 요일 + LED 그리드 */}
        {days.map((day, rIdx) => (
          <div key={rIdx} className={styles.calendarRow}>
            <div className={styles.dayCell}>{day}</div>
            {matrix[rIdx].map((cell, cIdx) => {
              const color = cell === 1 ? colors[Math.floor(Math.random() * colors.length)] : "#eff2f5";

              return (
                <div
                  key={cIdx}
                  className={clsx(styles.cell, cell === 1 && styles.active)}
                  style={{
                    backgroundColor: color,
                    transitionDelay: animating ? `${cIdx * 30}ms` : "0ms"
                  }} />
                // style={{ transitionDelay: animating ? `${cIdx * 30}ms` : "0ms" }}
                // style={{ transitionDelay: `${cIdx * 30}ms` }} // 순차적으로 켜짐
              );
            }
            )}
          </div>
        ))}

        <div className={styles.footer}>
          <div className={styles.left}>Learn how we count contributions</div>
          <div className={styles.right}>
            <span>Less</span>
            <div className={styles.wrap}>
              {colors.map((item, index) => {
                return (
                  <div
                    style={{
                      backgroundColor: colors[index],
                    }}
                    className={clsx(styles.cell)}
                  />
                );
              })}

            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
