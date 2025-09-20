import React, { useState, useEffect, useMemo, useCallback } from "react";
import clsx from "clsx";
import styles from "./home-graph.module.scss";

const developerPattern = {
  D: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  V: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  O: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  P: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  R: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  B: [
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ],
  I: [
    [1, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
  ],
  S: [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  H: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  U: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
};

const wordList = ["PUBLISHER", "DEVELOPER"];
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const colors = ["#4ac26b", "#2da44e", "#116329"]; // LED 색상

export default function HomeGraph() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const word = wordList[wordIndex];

  const getLetterRows = useCallback((char) => developerPattern[char] || [], []);

  // 자동 단어 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);           // 애니메이션 시작
      setWordIndex((prev) => (prev + 1) % wordList.length); // 단어 즉시 변경
      setAnimating(false);          // 애니메이션 끝
    }, 1500); // 0.8초마다 단어 변경

    return () => clearInterval(interval);
  }, []);

  // matrix 메모이제이션
  const matrix = useMemo(() => {
    const letterHeight = 5;
    const gap = 1;
    return days.map((_, dayIdx) => {
      const row = [];
      for (let char of word) {
        row.push(
          ...getLetterRows(char)[dayIdx % letterHeight],
          ...Array(gap).fill(0)
        );
      }
      return row;
    });
  }, [word, getLetterRows]);

  const colorMatrix = useMemo(() => {
    return matrix.map((row) =>
      row.map((cell) =>
        cell === 1
          ? colors[Math.floor(Math.random() * colors.length)]
          : "#eff2f5"
      )
    );
  }, [matrix]);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>706 contributions in 2025</h2>

      <div
        className={styles.container}
        role="grid"
        aria-label="Contributions calendar"
      >
        {/* 월 헤더 */}
        <div className={styles.headerRow} role="row">
          <div className={styles.emptyCell} aria-hidden="true" />
          {months.map((month, idx) => (
            <div
              key={month}
              className={styles.headerCell}
              role="columnheader"
            >
              {month}
            </div>
          ))}
        </div>

        {/* 요일 + 그리드 */}
        {days.map((day, rIdx) => (
          <div key={day} className={styles.calendarRow} role="row">
            <div className={styles.dayCell} role="rowheader">
              {day}
            </div>
            {matrix[rIdx].map((cell, cIdx) => (
              <div
                key={`${rIdx}-${cIdx}`}
                aria-hidden="true"
                className={clsx(
                  styles.cell,
                  cell === 1 && styles.active,
                  animating && styles.animating
                )}
                style={{
                  backgroundColor: colorMatrix[rIdx][cIdx],
                }}
              />
            ))}
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
