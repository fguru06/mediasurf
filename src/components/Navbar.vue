<template>
	<nav class="navbar">
		<div class="navbar-container">
			<div class="navbar-brand">
				<img :src="logoUrl" alt="Mediasurf Logo" class="navbar-logo" />
			</div>
			<div class="navbar-menu">
				<button @click="toggleMenu" class="menu-toggle">☰</button>
				<ul :class="['navbar-links', { show: menuOpen }]">
					<li>
						<router-link
							class="nav-link"
							:class="{ active: activeSection === 'home' }"
							to="/"
							@click.native="scrollToTop"
						>
							Home
						</router-link>
					</li>
					<li>
						<a
							class="nav-link"
							:class="{ active: activeSection === 'services' }"
							href="#services"
							@click="scrollToSection('services')"
						>
							Services
						</a>
					</li>
					<li>
						<a
							class="nav-link"
							:class="{ active: activeSection === 'process' }"
							href="#process"
							@click="scrollToSection('process')"
						>
							Process
						</a>
					</li>
					<li>
						<a
							class="nav-link"
							:class="{ active: activeSection === 'portfolio' }"
							href="#portfolio"
							@click="scrollToSection('portfolio')"
						>
							Portfolio
						</a>
					</li>
					<li>
						<a
							class="nav-link"
							:class="{ active: activeSection === 'team' }"
							href="#team"
							@click="scrollToSection('team')"
						>
							Team
						</a>
					</li>
					<li>
						<router-link
							class="nav-link"
							:class="{ active: activeSection === 'courses' }"
							to="/courses"
							@click.native="setActiveSection('courses')"
						>
							Courses
						</router-link>
					</li>
					<li>
						<router-link
							class="nav-link"
							:class="{ active: activeSection === 'contact' }"
							to="/contact"
							@click.native="setActiveSection('contact')"
						>
							Contact
						</router-link>
					</li>
				</ul>
			</div>
			<button @click="$emit('toggle-theme')" class="theme-toggle">
				{{ darkMode ? "☀️" : "🌙" }}
			</button>
		</div>
	</nav>
</template>

<script setup>
	import { defineProps, ref, onMounted, onUnmounted } from "vue";
	import { useRouter } from "vue-router";
	import logoUrl from "/Musa's_Made_Logo.png"; // Import the image URL

	defineProps({
		darkMode: Boolean,
	});

	const router = useRouter();
	const activeSection = ref("home");
	const menuOpen = ref(false);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		activeSection.value = "home";
	};

	const scrollToSection = (sectionId) => {
		if (router.currentRoute.value.path !== "/") {
			router.push("/").then(() => {
				setTimeout(() => {
					const section = document.getElementById(sectionId);
					if (section) {
						section.scrollIntoView({ behavior: "smooth" });
					}
					activeSection.value = sectionId;
				}, 300);
			});
		} else {
			const section = document.getElementById(sectionId);
			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			}
			activeSection.value = sectionId;
		}
	};

	const setActiveSection = (sectionId) => {
		activeSection.value = sectionId;
	};

	const handleScroll = () => {
		if (router.currentRoute.value.path === "/") {
			const sections = ["home", "services", "process", "portfolio", "team"];
			let currentSection = "home";

			sections.forEach((sectionId) => {
				const section = document.getElementById(sectionId);
				if (section) {
					const rect = section.getBoundingClientRect();
					if (rect.top <= 100 && rect.bottom >= 100) {
						currentSection = sectionId;
					}
				}
			});

			activeSection.value = currentSection;
		} else {
			activeSection.value = router.currentRoute.value.path.replace("/", "");
		}
	};

	const toggleMenu = () => {
		menuOpen.value = !menuOpen.value;
	};

	onMounted(() => {
		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Ensure the correct section is highlighted on load
	});

	onUnmounted(() => {
		window.removeEventListener("scroll", handleScroll);
	});
</script>

<style scoped lang="scss">
	.navbar {
		background-color: var(--card-bg-color);
		box-shadow: 0 2px 4px var(--shadow-color);
		padding: 10px 20px;
		position: sticky;
		top: 0;
		z-index: 1000;

		.navbar-container {
			display: flex;
			align-items: center;
			justify-content: space-between; // Ensure space between logo and menu
			flex-wrap: wrap; // Allow wrapping for smaller screens
		}

		.navbar-brand {
			display: flex;
			align-items: center;
			gap: 10px;
			font-size: 1.5rem;
			font-weight: bold;
			color: var(--text-color);

			.navbar-logo {
				width: 200px; // Adjust logo size for smaller screens
				height: auto;
				border-radius: 5px;
				transition: transform 0.3s;

				&:hover {
					transform: scale(1.05);
				}
			}
		}

		.navbar-menu {
			display: flex;
			align-items: center;
			gap: 10px;
			margin-left: auto; // Push the menu to the right
		}

		.menu-toggle {
			display: none;
			background: none;
			border: none;
			font-size: 1.5rem;
			cursor: pointer;
			color: var(--text-color);

			&:hover {
				color: var(--primary-color);
			}
		}

		.navbar-links {
			display: flex;
			gap: 20px;
			list-style: none;
			margin: 0;
			padding: 0;

			.nav-link {
				text-decoration: none;
				color: var(--text-color);
				font-size: 1rem;
				font-weight: 500;
				padding: 5px 10px;
				border-radius: 5px;
				transition: background-color 0.3s, color 0.3s;

				&:hover {
					background-color: var(--primary-color);
					color: #fff;
				}
			}

			.nav-link.active {
				background-color: var(--primary-color);
				color: #fff;
			}
		}

		@media (max-width: 768px) {
			.navbar-links {
				display: none; // Hide links by default in mobile view
				flex-direction: column;
				width: 100%;
				background-color: var(--card-bg-color);
				position: absolute;
				top: 100%;
				left: 0;
				box-shadow: 0 2px 4px var(--shadow-color);
				padding: 10px 0;
			}

			.navbar-links.show {
				display: flex; // Show links when toggled
			}

			.menu-toggle {
				display: block; // Show the menu toggle button in mobile view
			}
		}
	}
</style>
