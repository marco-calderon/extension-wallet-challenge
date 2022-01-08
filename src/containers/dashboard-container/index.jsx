import React, { useEffect, useState } from 'react';
import Search from '../../components/search';
import { getPopularCategories, getRecentExperiences } from '../../services/sandbox.service';
import Categories from '../categories';
import Experiences from '../recent-experiences';
import styles from './index.module.css';

/**
 * This section will handle the requesting data for Recent Experiences and Popular Categories.
 * It will properly show them in the required format.
 * 
 * @param {Object} props - is the props object
 * @returns 
 */
function DashboardContainer (props) {
    const [experiences, setExperiences] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getRecentExperiences().then(result => setExperiences(result));
        getPopularCategories().then(result => setCategories(result));
    }, []);

    const handleOnSearch = (event) => {
        console.log(event);
    }

    return (
        <div className={styles.container}>
            <Search onSearch={handleOnSearch} />
            <Experiences experiences={experiences} title="Recent Experiences" />
            <Categories categories={categories} title="Popular Categories" />
        </div>
    );
}

export default DashboardContainer;