
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)

app.directive("admin-disabled", {
    mounted: (el) => {
        el.classList.add("disabled")
    }
})

app.mount('#app')
