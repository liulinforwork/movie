/**
 * Created by Administrator on 2017/9/22.
 */
require('babel-core/register')({
    'presets': [
        'stage-3',
        'latest-node'
    ],
})

require('babel-polyfill')
require('./server')