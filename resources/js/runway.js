import Vue from 'vue'
// import ExampleComponent from './components/ExampleComponent.vue'

const files = require.context('./', true, /\.vue$/i, 'lazy').keys()

files.forEach(file => {
  Vue.component(
    file
      .split('/')
      .pop()
      .split('.')[0],
    () => import(`${file}` /*webpackChunkName: "js/[request]" */)
  )
})

new Vue({
  el: '#app',
})
