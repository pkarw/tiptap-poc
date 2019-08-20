// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import "./assets/sass/_main.scss"
import "@storefrontui/vue/src/css/_all.scss"
import svgSpriteLoader from './helpers/svg-sprite-loader'
const __svg__ = { path: './assets/images/icons/*.svg', name: 'img/[name].[hash:7].[ext]' }
svgSpriteLoader(__svg__.filename)
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
