import React, { useState } from 'react';
import styles from '../styles/Tabs.module.css';

const Tabs = ({ tabs, contents }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='tabsContainer'>
      <div className='tabs'>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${styles[`tab${index + 1}`]} ${
              index === activeTab ? styles.activeTab : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
            <div className={styles.bottomLine}></div>
          </div>
        ))}
      </div>
      <div className={styles.content}>{contents[activeTab]}</div>
    </div>
  );
};

export default Tabs;