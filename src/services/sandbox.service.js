const experiences = [
    {
        id: 'asd123',
        name: 'DeFi Swap',
        description: 'Swap your digital assets',
        color: '#2F80ED',
        icon: '',
        users: '+200 users',
        category: 'Utilities',
        details: 'it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly. ',
        url: 'https://docusignn.io',
        background: '#F5F5F5',
    },
    {
        id: 'asd124',
        name: 'Docu sign',
        description: 'sign smart contracts seamlessly',
        color: '#BB85FF',
        icon: '',
        users: '+1k users',
        category: 'Utilities',
        details: 'it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly. ',
        url: 'https://docusignn.io',
        background: '#F5F5F5',
    },
    {
        id: 'asd125',
        name: 'Experience',
        description: 'Description',
        color: '#00C08B',
        icon: '',
        users: '+500 users',
        category: 'Utilities',
        details: 'it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly. ',
        url: 'https://docusignn.io',
        background: '#F5F5F5',
    },
];

const activities = [
    {
        experienceId: 'asd123',
        id: 'qwe123',
        user: 'johndoe.near',
        description: 'signed the contract successfully',
        timestamp: '2 days ago',
    },
    {
        experienceId: 'asd123',
        id: 'qwe124',
        user: 'johndoe.near',
        description: 'signed the contract successfully',
        timestamp: '2 days ago',
    },
    {
        experienceId: 'asd123',
        id: 'qwe125',
        user: 'johndoe.near',
        description: 'signed the contract successfully',
        timestamp: '2 days ago',
    },
    {
        experienceId: 'asd124',
        id: 'qwe123',
        user: 'johndoe.near',
        description: 'signed the contract successfully',
        timestamp: '2 days ago',
    },
    {
        experienceId: 'asd124',
        id: 'qwe124',
        user: 'johndoe.near',
        description: 'signed the contract successfully',
        timestamp: '2 days ago',
    },
    {
        experienceId: 'asd124',
        id: 'qwe125',
        user: 'johndoe.near',
        description: 'signed the contract successfully',
        timestamp: '2 days ago',
    },
    {
        experienceId: 'asd125',
        id: 'qwe123',
        user: 'johndoe.near',
        description: 'signed the contract successfully',
        timestamp: '2 days ago',
    },
    {
        experienceId: 'asd125',
        id: 'qwe124',
        user: 'johndoe.near',
        description: 'signed the contract successfully',
        timestamp: '2 days ago',
    },
    {
        experienceId: 'asd125',
        id: 'qwe125',
        user: 'johndoe.near',
        description: 'signed the contract successfully',
        timestamp: '2 days ago',
    },
];

const categories = [
    {
        id: 'zxc123',
        name: 'Exchanges',
        icon: 'ph:trend-up',
        iconColor: '#587BE0',
        background: '#EAEFFF',
    },
    {
        id: 'zxc124',
        name: 'Games',
        icon: 'dashicons:games',
        iconColor: '#414047',
        background: '#F5F5F5',
    },
    {
        id: 'zxc125',
        name: 'Marketplaces',
        icon: 'icon-park-outline:weixin-market',
        iconColor: '#34AE91',
        background: '#E2F9F3',
    },
    {
        id: 'zxc126',
        name: 'Defi',
        icon: 'carbon:cube',
        iconColor: '#F98F54',
        background: '#FFF3EC',
    },
    {
        id: 'zxc127',
        name: 'Collectibles',
        icon: 'akar-icons:crown',
        iconColor: '#54AAF9',
        background: '#EBF5FF',
    },
    {
        id: 'zxc128',
        name: 'Utilities',
        icon: 'bx:bx-shape-triangle',
        iconColor: '#885FFF',
        background: '#F0EBFF',
    },
];

/**
 * Gets the recent experiences.
 * 
 * It will return an array of elements with this structure:
 * 
 * ```
 * {
 *    id: 'asd123',
 *    name: 'DeFi Swap',
 *    description: 'Swap your digital assets',
 *    color: '#2F80ED',
 *    icon: '',
 *    users: '+200 users'
 * }
 * ```
 * 
 * @returns a Promise that resolves into an array of Experiences.
 */
export const getRecentExperiences = () => {
    return new Promise((resolve, rejext) => {
        resolve(experiences)
    });
}

/**
 * Gets the trending experiences.
 * 
 * It will return an array of elements with this structure:
 * 
 * ```
 * {
 *    id: 'asd123',
 *    name: 'DeFi Swap',
 *    description: 'Swap your digital assets',
 *    color: '#2F80ED',
 *    icon: '',
 *    users: '+200 users'
 * }
 * ```
 * 
 * @returns a Promise that resolves into an array of Experiences.
 */
 export const getTrendingExperiences = () => {
    return new Promise((resolve, rejext) => {
        resolve(experiences)
    });
}

/**
 * Obtains a list of filtered experiences by a search term.
 * 
 * @param {String} term - is the search term
 * @returns an Array of filtered experiences.
 */
export const getFilteredExperiences = (term) => {
    return new Promise((resolve, reject) => {
        resolve(experiences.filter(e => e.name.toLowerCase().includes(term)));
    });
}

/**
 * Gets a experience from the mock data. 
 * 
 * It will return an array of elements with this structure:
 * 
 * ```
 * {
 *    id: 'asd123',
 *    name: 'DeFi Swap',
 *    description: 'Swap your digital assets',
 *    color: '#2F80ED',
 *    icon: '',
 *    users: '+200 users'
 * }
 * ```
 * 
 * @param {String} id - is the identifier of the experience.
 * @returns the experience found.
 */
export const getExperience = (id) => {
    return new Promise((resolve, reject) => {
        resolve(experiences.find(e => e.id === id));
    });
}

/**
 * Gets the related activities given an experience id.
 * 
 * It will return an array of objects of the next shape:
 * 
 * ```
 * {
 *     experienceId: 'asd123',
 *     id: 'qwe123',
 *     user: 'johndoe.near',
 *     description: 'signed the contract successfully',
 *     timestamp: '2 days ago',
 * },
 * ```
 * 
 * @param {String} experienceId - is the experience Id to filter the activities
 */
export const getActivities = (experienceId) => {
    return new Promise((resolve, reject) => {
        resolve(activities.filter(a => a.experienceId === experienceId));
    })
    
}

/**
 * Gets the popular categories using a mock function.
 * 
 * It will resolve into an array of Categories, which have this shape:
 * 
 * ```
 * {
 *     id: 'zxc123',
 *     name: 'Exchanges',
 *     icon: '',
 *     iconColor: '#587BE0',
 *     background: '#EAEFFF'
 * }
 * ``` 
 * 
 * @returns a Promise that will resolve in an array of Categories.
 */
export const getPopularCategories = () => {
    return new Promise((resolve, reject) => {
        resolve(categories);
    });
}

/**
 * Get all categories using a mock function.
 * 
 * It will resolve into an array of Categories, which have this shape:
 * 
 * ```
 * {
 *     id: 'zxc123',
 *     name: 'Exchanges',
 *     icon: '',
 *     iconColor: '#587BE0',
 *     background: '#EAEFFF'
 * }
 * ``` 
 * 
 * @returns a Promise that will resolve in an array of Categories.
 */
export const getCategories = () => {
    return new Promise((resolve, reject) => {
        resolve(categories);        
    });
}