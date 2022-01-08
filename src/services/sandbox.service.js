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
        resolve([
            {
                id: 'asd123',
                name: 'DeFi Swap',
                description: 'Swap your digital assets',
                color: '#2F80ED',
                icon: '',
                users: '+200 users'
            },
            {
                id: 'asd124',
                name: 'Docu sign',
                description: 'sign smart contracts seamlessly',
                color: '#BB85FF',
                icon: '+1k users',
            },
            {
                id: 'asd125',
                name: 'Experience',
                description: 'Description',
                color: '#00C08B',
                icon: '+500 users',
            },
        ])
    });
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
        resolve([
            {
                id: 'zxc123',
                name: 'Exchanges',
                icon: '',
                iconColor: '#587BE0',
                background: '#EAEFFF',
            },
            {
                id: 'zxc124',
                name: 'Games',
                icon: '',
                iconColor: '#414047',
                background: '#F5F5F5',
            },
            {
                id: 'zxc125',
                name: 'Marketplaces',
                icon: '',
                iconColor: '#34AE91',
                background: '#E2F9F3',
            },
            {
                id: 'zxc126',
                name: 'Marketplaces',
                icon: '',
                iconColor: '#F98F54',
                background: '#FFF3EC',
            },
        ]);
    });
}