import React from 'react';
import styles from './home.module.scss';

const Home = () => {
  const projectItems = [
    { name: 'aa', summary: '', url: '' },
    { name: 'bb', summary: '', url: '' },
  ];

  const historyItems = [
    { name: '대동', start: 2017, end: 2017 },
    { name: '엠텍', start: 2018, end: 2020 },
    { name: '디케이', start: 2021, end: 2024 },
  ];

  const items = projectItems.slice(0, 6);

  const max = historyItems.map(o => o.end).reduce((max, curr) => max < curr ? curr : max);
  const min = historyItems.map(o => o.start).reduce((min, curr) => min > curr ? curr : min);

  const tableMax = max - min + 1;

  const handleItemClick = (url) => {
    // linkTo(url);
  }

  // let start = 0;

  return (
    <div className={styles.root}>
      <div className={styles.project}>

        <div>Projects</div>
        {items.map((item) => {
          return (
            <div className={styles.item} onClick={() => handleItemClick(item.url)}>
              <div>{item.name}</div>
              <div>{item.summary}</div>
            </div>
          );
        })}
      </div>

      // historyItems
      <div className={styles.resume}>

        {/* {historyItems.map((item, index) => {
          const value = item.end - item.start + 1;
          const prev = historyItems[index - 1];
          const prevValue = prev?.end - prev?.start + 1;
          // console.log(',,,,,item.end - item.start,,,', start, value, tableMax)
          // debugger
          // const start = item[index - 1].end - item[index - 1].start || 1;
          // start = value;
          // let prev = item[index-1]
          // const start = 
          return (
          )
        })} */}


        <div>

        </div>


      </div>
    </div>
  )
};

export default Home;