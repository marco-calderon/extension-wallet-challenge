import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import rightArrowIcon from '../../svg/rightArrowIcon.svg';
import { useParams } from 'react-router-dom';
import shareIcon from '../../svg/shareIcon.svg';
import openIcon from '../../svg/openIcon.svg';
import usersIcon from '../../svg/usersIcon.svg';
import Button from '../../components/button';
import { getActivities, getExperience } from '../../services/sandbox.service';
import Tabs from '../../components/tabs';
import DetailsTab from '../../containers/experiences/details';
import ActivitiesTab from '../../containers/experiences/activities';

function ExperiencePage (props) {
    const params = useParams();

    const [experience, setExperience] = useState(null);
    const [activities, setActivities] = useState(null);
    const [selectedTab, setSelectedTab] = useState('details');

    useEffect(() => {
        getExperience(params.experienceId).then(result => setExperience(result));
        getActivities(params.experienceId).then(result => setActivities(result));
    }, [params.experienceId]);

    if (!experience) {
        return (
            <h4>Loading...</h4>
        )
    }

    const handleOnTabClick = (key) => {
        setSelectedTab(key);
    } 

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.headerColor}></div>
                <div className={styles.headerIconContainer}>
                    <div className={styles.headerIcon}>
                        <img src={rightArrowIcon} alt="Icon" style={{ color: '#fff' }} />
                    </div>
                    <Button>
                        <div className={styles.shareButton}>
                            <img src={shareIcon} alt="Share" />&nbsp;
                            Share
                        </div>
                    </Button>
                </div>
            </div>
            <div className={styles.detailsContainer}>
                <h2 className={styles.detailsTitle}>{experience.name}</h2>
                <p className={styles.detailsDesc}>{experience.description}</p>
                <span className={styles.detailsCategory}>{experience.category}</span>
            </div>
            <div className={styles.openContainer}>
                <Button>
                    <div className={styles.openButton}>
                        Open
                        &nbsp;
                        <img src={openIcon} alt="Open" />
                    </div>
                </Button>
                <div className={styles.usersContainer}>
                    <img src={usersIcon} alt="Users" />
                    &nbsp;
                    {experience.users}
                </div>
            </div>
            <Tabs
                active={selectedTab}
                tabs={[
                    { title: 'Details', key: 'details', component: <DetailsTab title="Overview" description={experience.details} url={experience.url} /> },
                    { title: 'Activities', key: 'activities', component: <ActivitiesTab activities={activities} /> }
                ]}
                onTabClick={handleOnTabClick}
            />
        </div>
    );
}

export default ExperiencePage;