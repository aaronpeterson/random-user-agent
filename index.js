const
    _random = require('lodash.random'),
    _sample = require('lodash.sample')
    _filter = require('lodash.filter');

let agents = {},
    validTypes = ['browser', 'cpu', 'device', 'engine', 'mediaplayer', 'os']

function get(type, predicate) {
    if (validTypes.indexOf(type) < 0)
        return Promise.reject(`Not a valid type "${type}", must be one of ${validTypes.join(', ')}`);

    if (!agents[type])
        agents[type] = require(`ua-parser-js/test/${type}-test.json`);

    let blocks = agents[type];

    // look in expects.name and expects.major
    if (typeof predicate === 'function')
        blocks = _filter(blocks, predicate);

    if (!blocks || blocks.length === 0)
        return Promise.resolve(null);

    console.log('blocks.length', blocks.length);

    return Promise.resolve(_sample(blocks).ua);
}

module.exports = {
    get
}