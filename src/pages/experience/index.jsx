import React from 'react';
import styles from './index.module.css';
import rightArrowIcon from '../../svg/rightArrowIcon.svg';
import { useParams } from 'react-router-dom';

function ExperiencePage (props) {
    const params = useParams();

    console.log(params);

    return (
        <div>
            <div className={styles.headerContainer}>
                <div>
                    <div className={styles.headerIconContainer}>
                        <img src={rightArrowIcon} alt="Icon" />
                    </div>
                    <div className={styles.separator}></div>
                </div>
            </div>
        </div>
    );
}

export default ExperiencePage;