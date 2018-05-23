const randomUserAgent = require('../index')

randomUserAgent.get('browser').then(ua => {
    console.log(`Get a random device: ${ua}`);
})

randomUserAgent.get('device',
        device =>
            ['Apple', 'Samsung', 'Amazon', 'Microsoft'].indexOf(device.expect.vendor) > -1
            &&
            ['mobile', 'tablet'].indexOf(device.expect.type) > -1
).then(ua => {
    console.log(`Apple, Samsung or Amazon mobile or tablet: ${ua}`);
})