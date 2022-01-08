import React, { useEffect, useState } from 'react';
import Tab from './tab';
import styles from './index.module.css';

function Tabs({ active, tabs, onTabClick }) {
    const [selectedTab, setSelectedTab] = useState(null);

    useEffect(() => {
        if (!tabs) {
            return;
        }

        const tab = tabs.find(t => t.key === active);
        if (tab) {
            setSelectedTab(tab);
        }
    }, [active, tabs]);

    return (
        <>
            <div className={styles.tabsContainer}>
                {tabs && tabs.map(t => (
                    <Tab key={t.key} title={t.title} active={selectedTab && selectedTab.key === t.key} onClick={onTabClick} id={t.key} />
                ))}
            </div>
            <div className={styles.outlet}>
                {selectedTab && selectedTab.component}
            </div>
        </>
    );
}

export default Tabs;