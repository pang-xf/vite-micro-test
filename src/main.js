import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

export default function mount(container) {
  app.mount(container)
}

export const unmount = () => {
  app.unmount()
}