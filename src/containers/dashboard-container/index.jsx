import React, { useEffect, useState } from 'react';
import Search from '../../components/search';
import { getCategories, getPopularCategories, getRecentExperiences, getTrendingExperiences } from '../../services/sandbox.service';
import Categories from '../categories';
import Experiences from '../recent-experiences';
import styles from './index.module.css';
import Modal from '../../components/modal';
import FilterOptions from '../filter';
import Button from '../../components/button';
import closeIcon from '../../svg/closeIcon.svg';

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
        getCategories().then(result => setAllCategories([
            { checked: false, id: 'all', label: 'All Experiences', category: null },
            ...result.map(o => ({ checked: false, id: o.id, label: o.name, category: o }))
        ]));
    }, []);

    const handleOnSearch = (event) => {
        console.log(event);
    }

    const handleOnFilterClick = (filters) => {
        setShowFilterModal(!showFilterModal);
    }

    const handleOnFilterOptionClick = (event) => {
        setAllCategories(allCategories.map(c => {
            if (c.id === event.id) {
                return {
                    ...c,
                    checked: !event.checked,
                };
            }

            return {
                ...c,
            };
        }))
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
                <div className={styles.titleContainer}>
                    <div className={styles.titleTextContainer}>
                        <h3 className={styles.modalTitle}>Filter</h3>
                        <span className={styles.count}>{allCategories && allCategories.length}</span>
                    </div>
                    <Button onClick={() => setShowFilterModal(false)}>
                        <img src={closeIcon} alt="Close" />
                    </Button>
                </div>
                <FilterOptions options={allCategories} onFilterClick={handleOnFilterOptionClick} />
            </Modal>
        </>
    );
}

export default DashboardContainer;