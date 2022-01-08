# Extension Wallet Challenge

This is a React application made for a challenge in which it is showcased practices of front end development.

## Production site

https://extension-wallet-challenge.netlify.app

## User flow implemented

Dashboard -> Experience
Dashboard -> Filtering

## Data sources

For the data inside the application a simple structure is given by the User Stories and given documentation.
The functions that trigger the mock data resides in src/services/sandbox.service.js file.

Also a couple of Netlify functions were implemented but not used in this case. They can be found under the netlify/functions directory.

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

Endpoints to be implemented:
- Popular categories

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

Endpoints to be implemented:
- Recent experiences
- Experiences search
- Trending experiences

### Activities

Activities are of the form:

```
{
    experienceId: 'asd123',
    id: 'qwe123',
    user: 'johndoe.near',
    description: 'signed the contract successfully',
    timestamp: '2 days ago'
}
```

Endpoints to be implemented:
- Search activities by experienceId.

## Build

As with other React projects created with the create-react-app script, this can be build by

```
yarn build
```

or
```
npm run build
```

For deployment a Netlify account should be connected and consumed by the site.