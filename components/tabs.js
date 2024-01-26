import styles from '../styles/Tabs.module.css';
const Tabs = ({ tabs, contents , tabProps }) => {

  const activeTab = tabProps[0]
  const contentVisible = tabProps[1]
  const handleTabClick = tabProps[2]
  
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
      <div className={`${styles.content} ${contentVisible ? styles.fadeIn : styles.fadeOut}`}>{contents[activeTab]}</div>
    </div>
  );
};

export default Tabs;