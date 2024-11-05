import Vue from 'vue'
import App from './App.vue'

import './style.css'

// import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

const vue = new Vue({
  render: h => h(App),
})

// Run!
vue
  .$mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
