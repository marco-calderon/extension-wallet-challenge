import React, { useEffect, useState } from 'react';
import Search from '../../components/search';
import { getCategories, getPopularCategories, getRecentExperiences, getTrendingExperiences } from '../../services/sandbox.service';
import Categories from '../categories';
import Experiences from '../recent-experiences';
import styles from './index.module.css';
import Modal from '../../components/modal';
import FilterOptions from '../filter';

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
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        getRecentExperiences().then(result => setExperiences(result));
        getPopularCategories().then(result => setCategories(result));
        getTrendingExperiences().then(result => setTrending(result));
        getCategories().then(result => setAllCategories(result.map(o => ({ checked: false, id: o.id, label: o.name }))));
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
            <Modal show={showFilterModal} onClose={() => setShowFilterModal(false)}>
                <h3>Filter</h3>
                <FilterOptions options={allCategories} />
            </Modal>
        </>
    );
}

export default DashboardContainer;