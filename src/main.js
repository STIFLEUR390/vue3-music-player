import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// sweetalert2 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const sweetalert2options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
};
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(VueSweetalert2, sweetalert2options);
app.use(VueAxios, axios)

app.mount("#app");
