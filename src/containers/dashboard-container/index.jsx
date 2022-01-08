import React, { useEffect, useState } from 'react';
import Search from '../../components/search';
import { getPopularCategories, getRecentExperiences, getTrendingExperiences } from '../../services/sandbox.service';
import Categories from '../categories';
import Experiences from '../recent-experiences';
import styles from './index.module.css';
import Modal from '../../components/modal';

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
    const [trending, setTrending] = useState([]);
    const [showFilterModal, setShowFilterModal] = useState(false);

    useEffect(() => {
        getRecentExperiences().then(result => setExperiences(result));
        getPopularCategories().then(result => setCategories(result));
        getTrendingExperiences().then(result => setTrending(result));
    }, []);

    const handleOnSearch = (event) => {
        console.log(event);
    }

    const handleOnFilterClick = (filters) => {
        setShowFilterModal(!showFilterModal);
    }

    return (
        <>
            <div className={styles.container}>
                <Search onSearch={handleOnSearch} onFilterClick={handleOnFilterClick} />
                <Experiences experiences={experiences} title="Recent Experiences" />
                <Categories categories={categories} title="Popular Categories" seeAll={true} />
                <Experiences experiences={trending} title="Trending Experiences" seeAll={true} />
            </div>
            <Modal show={showFilterModal}>
                <h3>Modal content</h3>
            </Modal>
        </>
    );
}

export default DashboardContainer;