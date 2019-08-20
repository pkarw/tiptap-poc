import Vue from 'vue'
import Router from 'vue-router'
import EditorPoc from '@/components/EditorPoc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EditorPoc',
      component: EditorPoc
    }
  ]
})
