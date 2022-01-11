import React from 'react';
import { PropTypes } from 'prop-types';
import Experience from '../../components/experience';
import styles from './index.module.css';
import rightArrowIcon from '../../svg/rightArrowIcon.svg';
import { useNavigate } from 'react-router-dom';

/**
 * Shows a list of Experiences group given a title and content.
 * 
 * @param {Object} props - is the props object
 * @param {String} title - is the title of this group
 * @param {Array<Experience>} experiences - is the array of the data to display (Experiences)
 * @param {Boolean} seeAll - indicates whether it should show a See All button
 * @param {Function} onSeeAll - callback that is called when See All button is clicked
 * @returns the rendered component
 */
function Experiences ({ title, experiences, seeAll, onSeeAll }) {
    const navigate = useNavigate();
    
    const handleOnExperienceClick = (event) => {
        navigate(`/experience/${event.id}`);
    } 

    return (
        <div className={styles.container} data-cy="experiences-container">
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
                {seeAll && (
                    <>
                        <div className={styles.separator}></div>
                        <button className={styles.seeAll} >
                            <span className={styles.seeAllLabel}>See All</span>
                            <img src={rightArrowIcon} alt="See All" />
                        </button>
                    </>
                )}
            </div>
            <div className={styles.experiences}>
                {experiences && experiences.map(e => (
                    <Experience key={e.id} experience={e} onClick={handleOnExperienceClick} />
                ))}
            </div>
        </div>
    );
}

Experiences.props = {
    title: PropTypes.string,
    experiences: PropTypes.array,
    seeAll: PropTypes.bool,
    onSeeAll: PropTypes.func,
}

Experiences.defaultProps = {
    title: 'Title',
    experiences: [],
    seeAll: false,
    onSeeAll: () => {},
}

export default Experiences;