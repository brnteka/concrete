require("es6-promise/auto");

import Vue from "vue";
import Vuex from "vuex";

import data from "../assets/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		data: data,
		formModalVisible: false
	},
	mutations: {
		formModalVisibility(state) {
			state.formModalVisible = !state.formModalVisible;
		}
	}
});
