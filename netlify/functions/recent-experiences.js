exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            status: 'ok',
            data: [
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
            ]
        })
    }
}