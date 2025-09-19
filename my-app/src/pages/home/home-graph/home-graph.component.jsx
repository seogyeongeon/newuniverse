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

const wordList = ["DEVELOPER", "PUBLISHER"];
// PUBLISHER
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const colors = ["#4ac26b", "#2da44e", "#116329"]; // LED 랜덤 색상

export default function HomeGrapth() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const word = wordList[wordIndex];

  const getLetterRows = (char) => developerPattern[char] || [];

  // 자동 단어 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex(prev => (prev + 1) % wordList.length);
        setAnimating(false);
      }, 500);
    }, 1500);
    return () => clearInterval(interval);
  }, []);


  const letterHeight = 5;
  const gap = 1;

  const matrix = days.map((day, dayIdx) => {
    const row = [];
    for (let char of word) {
      row.push(...getLetterRows(char)[dayIdx % letterHeight], ...Array(gap).fill(0));
    }
    return row;
  });

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>706 contributions in 2025</h2>

      <div className={styles.container} role="grid" aria-label="Contributions calendar">
        {/* 월 헤더 */}
        <div className={styles.headerRow} role="row">
          <div className={styles.emptyCell} aria-hidden="true" />
          {months.map((month, idx) => (
            <div key={idx} className={styles.headerCell} role="columnheader">{month}</div>
          ))}
        </div>

        {/* 요일 + 그리드 */}
        {days.map((day, rIdx) => (
          <div key={rIdx} className={styles.calendarRow} role="row">
            <div className={styles.dayCell} role="rowheader">{day}</div>
            {matrix[rIdx].map((cell, cIdx) => {
              const color = cell === 1 ? colors[Math.floor(Math.random() * colors.length)] : "#eff2f5";
              return (
                <div
                  key={cIdx}
                  aria-hidden="true"
                  className={clsx(styles.cell, cell === 1 && styles.active)}
                  style={{
                    backgroundColor: color,
                    transitionDelay: animating ? `${cIdx * 30}ms` : "0ms"
                  }}
                />
              );
            })}
          </div>
        ))}

        <footer className={styles.footer}>
          <p className={styles.left}>Learn how we count contributions</p>
          <div className={styles.right}>
            <span>Less</span>
            <div className={styles.wrap} aria-hidden="true">
              {colors.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: item }}
                  className={styles.cell}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
