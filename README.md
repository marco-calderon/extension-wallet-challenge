# Extension Wallet Challenge

This is the application made for a challenge.

## Data sources

For the data inside the application a simple structure is given by the User Stories and given documentation.
The functions that trigger the mock data resides in src/services/sandbox.service.js file.

### Categories

The Categories are of the form:

```
{
    id: 'zxc123',
    name: 'Exchanges',
    icon: '',
    iconColor: '#587BE0',
    background: '#EAEFFF'
}
```

The endpoints available are:
- Popular categories: https://extension-wallet-challenge.netlify.app/.netlify/functions/categories-popular

### Experiences

Experiences are of the form:

```
{
    id: 'asd123',
    name: 'DeFi Swap',
    description: 'Swap your digital assets',
    color: '#2F80ED',
    icon: '',
    users: '+200 users'
}
```

The endpoints available are:
- Recent experiences: https://extension-wallet-challenge.netlify.app/.netlify/functions/experiences-recent