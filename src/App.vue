<template>
	<div id="app">
		<div class="sticky">
			<Navbar :darkMode="darkMode" @toggle-theme="toggleTheme" />
		</div>
		<router-view :darkMode="darkMode" />
	</div>
</template>

<script setup>
	import { ref, onMounted } from "vue";
	import Navbar from "./components/Navbar.vue";

	const darkMode = ref(false);

	const toggleTheme = () => {
		darkMode.value = !darkMode.value;
		if (darkMode.value) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	};

	onMounted(() => {
		if (darkMode.value) {
			document.body.classList.add("dark-mode");
		}
	});
</script>

<style lang="scss">
	#app {
		font-family: Arial, sans-serif;
		transition: background-color 0.3s, color 0.3s;
	}

	.sticky {
		position: sticky;
		top: 0;
		z-index: 1000;
		background-color: var(--card-bg-color);
		box-shadow: 0 2px 4px var(--shadow-color);
	}
</style>
