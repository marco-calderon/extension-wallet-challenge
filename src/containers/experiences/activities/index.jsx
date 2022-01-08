import React from 'react';
import Activity from './activity';
import styles from './index.module.css';

/**
 * Shows the content of the activity tab.
 * 
 * @param {Object} props - is the props object
 * @param {Array} props.activities - is the array of activites to SharedWorker
 * @returns the rendered component.
 */
function ActivitiesTab ({ activities }) {
    return (
        <div className={styles.container}>
            <span className={styles.note}>{activities && activities.length} activities found</span>
            {activities && activities.map(a => (
                <Activity key={a.id} user={a.user} description={a.description} timestamp={a.timestamp} />
            ))}
        </div>
    );
}

export default ActivitiesTab;