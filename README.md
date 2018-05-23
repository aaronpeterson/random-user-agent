# Generate Random User Agent

Generate a random user agent using an optional predicate to further filter by device type, browser, etc.

This currently uses the test data files for ua-parser-js.  I figured it would
have some more recent User-agent strings. There's not a ton of variety, though. 
What better reason to contribute to ua-parser-js's tests, though!

```
yarn add ...coming soon maybe...
```

### By Type

Must be browser, cpu, device, engine, mediaplayer, or os.

```javascript
const randomUserAgent = require('random-user-agent')

randomUserAgent.get('browser').then(ua => {
    console.log(`Get a random device: ${ua}`);
})
```

### Optional Predicate

```javascript
const randomUserAgent = require('random-user-agent')

randomUserAgent.get('device',
        device =>
            ['Apple', 'Samsung', 'Amazon', 'Microsoft'].indexOf(device.expect.vendor) > -1
            &&
            ['mobile', 'tablet'].indexOf(device.expect.type) > -1
).then(ua => {
    console.log(`Apple, Samsung or Amazon mobile or tablet: ${ua}`);
})
```