import "./assets/styles/style.scss";

import Vue from "vue";
import store from "./store";
import VModal from "vue-js-modal";
import App from "./App.vue";
import {
	Validator,
	install as VeeValidate
} from "vee-validate/dist/vee-validate.minimal.esm.js";
import { required, regex } from "vee-validate/dist/rules.esm.js";

Validator.extend("required", required);
Validator.extend("regex", regex);

Vue.use(VeeValidate, {
	locale: "ru",
	dictionary: {
		ru: {
			messages: {
				required: field => `Поле обязательно.`,
				regex: field => `Неверный формат.`
			}
		}
	}
});

Vue.use(VModal);

new Vue({
	store,
	render(h) {
		return h(App);
	}
}).$mount("#app");
