exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            status: 'ok',
            data: [
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
            ]
        })
    }
}