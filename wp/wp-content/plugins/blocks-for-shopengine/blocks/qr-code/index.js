const json = require('./controls.json')
const { blockManager } = gutenova

import {Style} from './style'

new blockManager('gutenova/qr-code')
    .controls(json)
    .css(Style)
    .register()