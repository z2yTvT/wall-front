import Vue from 'vue'
import router from './router'
import App from './App.vue'
import elementUi from 'element-ui'
import VueCookies from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css'
import "./assets/reset.css"
import './assets/css/iconfont.css'
import './assets/css/iconfont.eot'
import './assets/css/iconfont.svg'
import './assets/css/iconfont.ttf'
import './assets/css/iconfont.woff'
import 'ant-design-vue/dist/antd.css';
import qs from 'qs'
import store from './store/main'
import Antd from 'ant-design-vue';

Vue.prototype.$store = store
Vue.use(VueCookies)
import axios from 'axios'
Vue.prototype.$qs = qs;

Vue.prototype.$axios = axios;

Vue.prototype.$red = false;

axios.defaults.withCredentials = true;

Vue.use(elementUi)

Vue.use(Antd);

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'zk1bdbOIAuo5lTxlnoyfScWhZGE4Vubk'
})

// $.ajaxSetup({
//   contentType: 'application/json;charset=utf-8'
// });

Vue.config.productionTip = false
Vue.config.devtools = true;

axios.withCredentials = true
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
