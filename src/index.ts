import Vue, { DirectiveOptions } from 'vue'
import './css/common.less' // 引入公共样式

import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'

import '@/styles/element-variables.scss'
import '@/styles/index.scss'

import App from './pages/app.vue'
import store from '@/store'
import { AppModule } from '@/store/modules/app'
import router from '@/router'
import i18n from '@/lang'
import '@/icons/components'
import '@/permission'
import '@/utils/error-log'
import * as directives from '@/directives'
import * as filters from '@/filters'

Vue.use(ElementUI, {
  size: AppModule.size,
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives as { [key: string]: DirectiveOptions })
})


// Register global filter functions
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string ]: Function })[key])
})

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  router,
  store,
  i18n,
  render: h => h(App)
})
