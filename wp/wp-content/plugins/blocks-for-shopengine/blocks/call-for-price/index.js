const json = require('./controls.json')
const { blockManager } = gutenova

import {Style} from './style'

new blockManager('gutenova/call-for-price')
    .controls(json)
    .css(Style)
    .register()