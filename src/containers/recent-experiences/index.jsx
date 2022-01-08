import React from 'react';
import { PropTypes } from 'prop-types';
import Experience from '../../components/experience';
import styles from './index.module.css';

/**
 * Shows a list of Experiences group given a title and content.
 * 
 * @param {Object} props - is the props object
 * @param {String} title - is the title of this group
 * @param {Array<Experience>} experiences - is the array of the data to display (Experiences)
 * @returns the rendered component
 */
function Experiences (props) {
    const handleOnExperienceClick = (event) => {
        console.log(event);
    } 

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.experiences}>
                {props.experiences && props.experiences.map(e => (
                    <Experience key={e.id} experience={e} onClick={handleOnExperienceClick} />
                ))}
            </div>
        </div>
    );
}

Experiences.props = {
    title: PropTypes.string,
    experiences: PropTypes.array,
}

Experiences.defaultProps = {
    title: 'Title',
    experiences: [],
}

export default Experiences;