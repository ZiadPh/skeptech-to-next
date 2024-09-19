import styles from '../../styles/Tabs.module.css';

const Tabs = ({ tabs, contents, tabProps }) => {
  const activeTab = tabProps.props[0];
  const contentVisible = tabProps.props[1];
  const handleTabClick = tabProps.props[2];

  // Define the hover colors for each tab
  const tabColors = [
    'rgba(0, 255, 254, 0.60)', // Tab 1 color
    'rgba(255, 0, 0, 0.60)',   // Tab 2 color
    'rgba(42, 255, 0, 0.70)',  // Tab 3 color
  ];

  return (
    <div className="tabsContainer">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${styles[`tab${index + 1}`]} ${
              index === activeTab ? styles.activeTab : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
            <div
              className={styles.bottomLine}
              style={{
                backgroundColor: index === activeTab ? tabColors[index] : 'transparent',
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Render all contents and hide non-active ones */}
      <div className={styles.contentsContainer}>
        {contents.map((content, index) => (
          <div
            key={index}
            className={`${styles.content} ${
              index === activeTab ? styles.fadeIn : styles.fadeOut
            }`}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
