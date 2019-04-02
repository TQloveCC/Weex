/*global Vue*/

import {Button} from 'mint-ui'

import 'mint-ui/lib/style.css'

Vue.component(Button.name,Button)
/* weex initialized here, please do not move this line */
const { router } = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/hello');

