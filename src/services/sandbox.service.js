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
export const getRecentExperiences = async () => {
    const data = await fetch(`https://extension-wallet-challenge.netlify.app/.netlify/functions/experiences/recent`);
    return await data.json();
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
export const getPopularCategories = async () => {
    const data = await fetch(`https://extension-wallet-challenge.netlify.app/.netlify/functions/categories/popular`);
    return await data.json();
}