import React from 'react';
import clsx from 'clsx';
import useProgressBar from 'hooks/useProgressBar';
import styles from './player-progress-bar.module.scss';

const PlayerProgressBar = ({
  className,
  max,
  value,
  theme = 'basic',
  start,
  end,
  onChangeStart,
  onChange,
  onChanged,
}) => {
  const { ref, dragging, startPercent, endPercent, getPercent } =
    useProgressBar({
      max,
      start,
      end,
      value,
      onChangeStart,
      onChange,
      onChanged,
    });
  const percent = getPercent(value);

  const renderRepeat = (percent, type) => {
    if (typeof percent !== "number") { percent = 0; };
    return <div className={styles[type]} style={{ left: percent + '%' }} />;
  };

  return (
    <div
      ref={ref}
      className={clsx(
        styles.root,
        styles[theme],
        dragging && styles.dragging,
        value === 0 && styles.zero,
        className
      )}
      role="slider"
      aria-valuemin="0"
      aria-valuemax={max}
      aria-valuenow={parseInt(value)}
    >
      <div
        className={styles.track}
        style={{
          paddingLeft: startPercent && startPercent + '%',
          paddingRight: endPercent && 100 - endPercent + '%',
        }}
      >
        <div className={styles.fill} style={{ width: percent + '%' }} />
      </div>
      {typeof start === 'number' && renderRepeat(startPercent, 'start')}
      {end && renderRepeat(endPercent, 'end')}
    </div>
  );
};

export default PlayerProgressBar;
