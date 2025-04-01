<template>
	<div class="home-page" :class="{ dark: darkMode }">
		<!-- Navbar is already included in App.vue -->
		<nav class="navbar">
			<!-- Navbar content -->
		</nav>

		<!-- Hero Section with Slider -->
		<section class="hero">
			<div class="slider">
				<div
					class="slider-images"
					:style="{ transform: `translateX(-${currentSlide * 100}%)` }"
				>
					<!-- First Slide with Updated Text and Buttons -->
					<div class="slide first-slide">
						<img :src="sliderImages[0].src" :alt="sliderImages[0].alt" />
						<div class="slide-text">
							<h1>Modern Web Design & eLearning Solutions</h1>
							<p>
								We help small and medium businesses create impactful digital
								experiences and empower their teams through custom eLearning
								programs.
							</p>
							<div class="cta-buttons">
								<button class="btn-primary">Explore Services</button>
								<button class="btn-secondary">Get in Touch</button>
							</div>
						</div>
					</div>

					<!-- Other Slides -->
					<div
						class="slide"
						v-for="(image, index) in sliderImages.slice(1)"
						:key="index"
					>
						<img :src="image.src" :alt="image.alt" />
					</div>
				</div>
				<div class="slider-controls">
					<button @click="prevSlide">❮</button>
					<button @click="togglePlayPause">
						{{ isPlaying ? "❚❚" : "▶" }}
					</button>
					<button @click="nextSlide">❯</button>
				</div>
			</div>
		</section>

		<!-- Services Section -->
		<section id="services" class="services">
			<h2>Our Services</h2>
			<p>
				Comprehensive solutions tailored to your business needs, from
				cutting-edge web design to transformative eLearning programs.
			</p>
			<div class="services-cards">
				<div class="service-card">
					<div class="service-icon">
						<i class="fas fa-laptop-code"></i>
					</div>
					<h3>Web Design & Development</h3>
					<p>
						Modern, responsive websites and web applications that engage your
						audience and drive business growth.
					</p>
					<ul>
						<li>Custom website design and development</li>
						<li>Responsive layouts for all devices</li>
						<li>User experience optimization</li>
						<li>E-commerce solutions</li>
						<li>Content management systems</li>
					</ul>
					<a href="#" class="learn-more">Learn more →</a>
				</div>
				<div class="service-card">
					<div class="service-icon">
						<i class="fas fa-chalkboard-teacher"></i>
					</div>
					<h3>eLearning Solutions</h3>
					<p>
						Custom eLearning programs that enhance employee skills and improve
						organizational performance.
					</p>
					<ul>
						<li>Employee onboarding programs</li>
						<li>Interactive training modules</li>
						<li>Compliance and policy training</li>
						<li>Skill development courses</li>
						<li>Learning management systems</li>
					</ul>
					<a href="#" class="learn-more">Learn more →</a>
				</div>
			</div>
		</section>

		<!-- Our Process Section -->
		<section id="process" class="our-process">
			<h2>Our Process</h2>
			<p>
				We follow a proven methodology to deliver exceptional results for all
				our projects.
			</p>
			<div class="process-steps">
				<div class="process-step">
					<div class="step-number">1</div>
					<h3>Discovery</h3>
					<p>
						We learn about your business, goals, and requirements to establish a
						clear vision.
					</p>
				</div>
				<div class="process-step">
					<div class="step-number">2</div>
					<h3>Strategy</h3>
					<p>
						We develop a tailored plan that addresses your unique challenges and
						opportunities.
					</p>
				</div>
				<div class="process-step">
					<div class="step-number">3</div>
					<h3>Creation</h3>
					<p>
						Our experts bring your vision to life with cutting-edge design and
						development.
					</p>
				</div>
				<div class="process-step">
					<div class="step-number">4</div>
					<h3>Refinement</h3>
					<p>
						We test, optimize, and perfect your solution to ensure exceptional
						quality.
					</p>
				</div>
			</div>
		</section>

		<!-- Portfolio Section -->
		<section id="portfolio" class="portfolio">
			<h2>Our Portfolio</h2>
			<p>
				Explore our recent projects and see how we've helped businesses
				transform their digital presence and learning programs.
			</p>
			<div class="portfolio-filters">
				<button
					class="filter-btn"
					:class="{ active: activeFilter === 'all' }"
					@click="filterPortfolio('all')"
				>
					All Projects
				</button>
				<button
					class="filter-btn"
					:class="{ active: activeFilter === 'web-design' }"
					@click="filterPortfolio('web-design')"
				>
					Web Design
				</button>
				<button
					class="filter-btn"
					:class="{ active: activeFilter === 'elearning' }"
					@click="filterPortfolio('elearning')"
				>
					eLearning
				</button>
			</div>
			<div class="portfolio-cards">
				<div
					class="portfolio-card"
					v-for="project in filteredProjects"
					:key="project.id"
				>
					<img :src="project.image" :alt="project.title" />
					<div class="portfolio-card-content">
						<span class="portfolio-tag">{{ project.category }}</span>
						<h3>{{ project.title }}</h3>
						<p>{{ project.description }}</p>
						<a href="#" class="view-case-study">View Case Study →</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Team Section -->
		<section id="team" class="team">
			<h2>Meet Our Team</h2>
			<p>
				We're a diverse team of experts passionate about creating exceptional
				digital experiences and learning solutions.
			</p>
			<div class="team-cards">
				<div class="team-card" v-for="member in teamMembers" :key="member.id">
					<img :src="member.image" :alt="member.name" class="team-image" />
					<h3>{{ member.name }}</h3>
					<p class="team-role">{{ member.role }}</p>
					<p class="team-description">{{ member.description }}</p>
					<div class="team-socials">
						<a
							v-for="social in member.socials"
							:key="social.platform"
							:href="social.link"
							target="_blank"
						>
							<i :class="social.icon"></i>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Call to Action Section -->
		<section id="courses" class="cta">
			<div class="cta-content">
				<h2>Ready to Transform Your Digital Experience?</h2>
				<p>
					Let's discuss how our web design and eLearning solutions can help your
					business grow and your team excel.
				</p>
				<div class="cta-buttons">
					<button class="btn-primary">Get Started</button>
					<button class="btn-secondary">Learn More</button>
				</div>
			</div>
		</section>

		<!-- Footer Section -->
		<footer id="contact" class="footer">
			<div class="footer-content">
				<div class="footer-column">
					<h3>Nexus</h3>
					<p>
						Transforming businesses through innovative web design and impactful
						eLearning solutions.
					</p>
					<div class="footer-socials">
						<a href="#"><i class="fab fa-linkedin"></i></a>
						<a href="#"><i class="fab fa-twitter"></i></a>
						<a href="#"><i class="fab fa-facebook"></i></a>
						<a href="#"><i class="fab fa-instagram"></i></a>
					</div>
				</div>
				<div class="footer-column">
					<h3>Services</h3>
					<ul>
						<li>Web Design</li>
						<li>Web Development</li>
						<li>UX/UI Design</li>
						<li>eLearning Development</li>
						<li>LMS Implementation</li>
					</ul>
				</div>
				<div class="footer-column">
					<h3>Resources</h3>
					<ul>
						<li>Portfolio</li>
						<li>Case Studies</li>
						<li>Blog</li>
						<li>FAQ</li>
						<li>Support</li>
					</ul>
				</div>
				<div class="footer-column">
					<h3>Contact</h3>
					<p>123 Business Avenue</p>
					<p>San Francisco, CA 94107</p>
					<p>Email: info@nexuslearn.com</p>
					<p>Phone: (415) 555-0123</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted, onUnmounted } from "vue";

	defineProps({
		darkMode: Boolean,
	});

	// Portfolio data
	const projects = ref([
		{
			id: 1,
			title: "E-commerce Website Redesign",
			description:
				"Modern redesign of an e-commerce platform, resulting in a 45% increase in conversions.",
			category: "Web Design",
			image: new URL("../assets/portfolio1.png", import.meta.url).href,
			type: "web-design",
		},
		{
			id: 2,
			title: "Corporate Website Redesign",
			description:
				"Complete overhaul of a corporate website, improving lead generation by 60%.",
			category: "Web Design",
			image: new URL("../assets/portfolio2.avif", import.meta.url).href,
			type: "web-design",
		},
		{
			id: 3,
			title: "Employee Onboarding Program",
			description:
				"Comprehensive onboarding program that reduced training time by 30% for a healthcare company.",
			category: "eLearning",
			image: new URL("../assets/portfolio3.avif", import.meta.url).href,
			type: "elearning",
		},
	]);

	// Active filter state
	const activeFilter = ref("all");

	// Filtered projects based on active filter
	const filteredProjects = computed(() => {
		if (activeFilter.value === "all") {
			return projects.value;
		}
		return projects.value.filter(
			(project) => project.type === activeFilter.value
		);
	});

	// Function to set the active filter
	const filterPortfolio = (filter) => {
		activeFilter.value = filter;
	};

	// Team members data
	const teamMembers = ref([
		{
			id: 1,
			name: "David Miller",
			role: "Founder & CEO",
			description:
				"With over 15 years in digital transformation, David leads our vision and strategy.",
			image: "../assets/team-david.jpg",
			socials: [
				{
					platform: "LinkedIn",
					link: "https://linkedin.com",
					icon: "fab fa-linkedin",
				},
				{
					platform: "Twitter",
					link: "https://twitter.com",
					icon: "fab fa-twitter",
				},
			],
		},
		{
			id: 2,
			name: "Jennifer Lee",
			role: "Lead UX Designer",
			description:
				"Jennifer crafts intuitive user experiences that balance aesthetics with functionality.",
			image: "../assets/team-jennifer.jpg",
			socials: [
				{
					platform: "LinkedIn",
					link: "https://linkedin.com",
					icon: "fab fa-linkedin",
				},
				{
					platform: "Dribbble",
					link: "https://dribbble.com",
					icon: "fab fa-dribbble",
				},
			],
		},
	]);

	// Slider data
	const sliderImages = ref([
		{
			src: "src/assets/banner1.png", // Old image with text
			alt: "Hero Banner",
		},
		{
			src: "https://picsum.photos/1200/500?random=2", // Placeholder image 2
			alt: "Placeholder Slide 2",
		},
		{
			src: "https://picsum.photos/1200/500?random=3", // Placeholder image 3
			alt: "Placeholder Slide 3",
		},
	]);

	const currentSlide = ref(0);
	const isPlaying = ref(true);
	let sliderInterval;

	const nextSlide = () => {
		currentSlide.value = (currentSlide.value + 1) % sliderImages.value.length;
	};

	const prevSlide = () => {
		currentSlide.value =
			(currentSlide.value - 1 + sliderImages.value.length) %
			sliderImages.value.length;
	};

	const togglePlayPause = () => {
		isPlaying.value = !isPlaying.value;
		if (isPlaying.value) {
			startSlider();
		} else {
			stopSlider();
		}
	};

	const startSlider = () => {
		sliderInterval = setInterval(nextSlide, 3000);
	};

	const stopSlider = () => {
		clearInterval(sliderInterval);
	};

	onMounted(() => {
		startSlider();
	});

	onUnmounted(() => {
		stopSlider();
	});
</script>

<style scoped lang="scss">
	:root {
		--primary-color: #007bff; // Define your primary color here
	}

	.home-page {
		font-family: Arial, sans-serif;
		color: var(--text-color);
		line-height: 1.6;
		transition: background-color 0.3s, color 0.3s;
		background-color: var(--bg-color);
	}

	.hero {
		position: relative;
		height: 500px; // Adjust height for the slider
		overflow: hidden;

		.slider {
			position: relative;
			height: 100%;
			width: 100%;

			.slider-images {
				display: flex;
				transition: transform 0.5s ease-in-out;
				height: 100%;

				.slide {
					min-width: 100%;
					height: 100%;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}

				.first-slide {
					position: relative;

					.slide-text {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						text-align: center;
						color: #fff;
						background-color: rgba(
							0,
							0,
							0,
							0.5
						); // Transparent black background
						padding: 20px;
						border-radius: 10px;
						width: 80%;

						h1 {
							font-size: 2.5rem;
							font-weight: bold;
							margin-bottom: 15px;
						}

						p {
							font-size: 1rem;
							margin-bottom: 20px;
						}

						.cta-buttons {
							display: flex;
							justify-content: center;
							gap: 15px;

							.btn-primary {
								background-color: #007bff;
								color: #fff;
								border: none;
								padding: 10px 20px;
								font-size: 1rem;
								border-radius: 5px;
								cursor: pointer;

								&:hover {
									background-color: #0056b3;
								}
							}

							.btn-secondary {
								background-color: transparent;
								color: #fff;
								border: 2px solid #fff;
								padding: 10px 20px;
								font-size: 1rem;
								border-radius: 5px;
								cursor: pointer;

								&:hover {
									background-color: rgba(255, 255, 255, 0.1);
								}
							}
						}
					}
				}
			}

			.slider-controls {
				position: absolute;
				bottom: 20px;
				left: 50%;
				transform: translateX(-50%);
				display: flex;
				gap: 10px;

				button {
					background-color: rgba(0, 0, 0, 0.5);
					color: #fff;
					border: none;
					padding: 10px 15px;
					cursor: pointer;
					font-size: 1.2rem;
					border-radius: 5px;

					&:hover {
						background-color: rgba(0, 0, 0, 0.8);
					}
				}
			}
		}
	}

	.services {
		text-align: center;
		padding: 50px 20px;
		background-color: #fff;

		h2 {
			font-size: 2rem;
			font-weight: bold;
			margin-bottom: 10px;
			color: #333;
		}

		p {
			font-size: 1rem;
			color: #555;
			margin-bottom: 30px;
		}

		.services-cards {
			display: flex;
			justify-content: center;
			gap: 20px;
			flex-wrap: wrap;
		}

		.service-card {
			background-color: #f9f9f9;
			border-radius: 10px;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			padding: 20px;
			width: 300px;
			text-align: left;
			transition: transform 0.3s, box-shadow 0.3s;

			&:hover {
				transform: translateY(-5px);
				box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
			}

			.service-icon {
				font-size: 2.5rem;
				color: var(--primary-color);
				margin-bottom: 15px;
				text-align: center;
			}

			h3 {
				font-size: 1.5rem;
				font-weight: bold;
				margin-bottom: 10px;
				color: #333;
			}

			p {
				font-size: 0.9rem;
				color: #555;
				margin-bottom: 15px;
			}

			ul {
				list-style: none;
				padding: 0;
				margin: 0 0 15px 0;

				li {
					font-size: 0.9rem;
					color: #555;
					margin-bottom: 5px;

					&::before {
						content: "✔";
						color: var(--primary-color);
						margin-right: 5px;
					}
				}
			}

			.learn-more {
				color: var(--primary-color);
				text-decoration: none;
				font-size: 0.9rem;
				font-weight: bold;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.our-process {
		text-align: center;
		padding: 50px 20px;
		background-color: #f9f9f9;
	}

	.our-process h2 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 10px;
		color: #333;
	}

	.our-process p {
		font-size: 1rem;
		color: #555;
		margin-bottom: 30px;
	}

	.process-steps {
		display: flex;
		justify-content: center;
		gap: 20px;
		flex-wrap: wrap;
	}

	.process-step {
		text-align: center;
		width: 200px;
	}

	.step-number {
		width: 50px;
		height: 50px;
		background-color: #eaeaea;
		color: #333;
		font-size: 1.5rem;
		font-weight: bold;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 15px auto;
		position: relative;
	}

	.step-number::after {
		content: "";
		width: 50px;
		height: 2px;
		background-color: #eaeaea;
		position: absolute;
		top: 50%;
		right: -60px;
		transform: translateY(-50%);
	}

	.process-step:last-child .step-number::after {
		display: none;
	}

	.process-step h3 {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 10px;
		color: #333;
	}

	.process-step p {
		font-size: 0.9rem;
		color: #555;
	}

	.portfolio {
		text-align: center;
		padding: 50px 20px;
		background-color: #fff;
	}

	.portfolio h2 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 10px;
		color: #333;
	}

	.portfolio p {
		font-size: 1rem;
		color: #555;
		margin-bottom: 30px;
	}

	.portfolio-filters {
		display: flex;
		justify-content: center;
		gap: 15px;
		margin-bottom: 30px;
	}

	.filter-btn {
		background-color: #fff;
		color: #007bff;
		border: 2px solid #0064b1;
		padding: 10px 20px;
		font-size: 1rem;
		border-radius: 5px;
		cursor: pointer;
	}

	.filter-btn.active {
		background-color: #0064b1;
		color: #fff;
	}

	.filter-btn:hover {
		background-color: #f0f8ff;
		color: #0064b1;
		border-color: #0064b1;
	}

	.portfolio-cards {
		display: flex;
		justify-content: center;
		gap: 20px;
		flex-wrap: wrap;
	}

	.portfolio-card {
		background-color: #f9f9f9;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		width: 300px;
		text-align: left;
	}

	.portfolio-card img {
		width: 100%;
		height: auto;
	}

	.portfolio-card-content {
		padding: 20px;
	}

	.portfolio-tag {
		display: inline-block;
		background-color: #0064b1;
		color: #fff;
		font-size: 0.8rem;
		padding: 5px 10px;
		border-radius: 5px;
		margin-bottom: 10px;
	}

	.portfolio-card h3 {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 10px;
		color: #333;
	}

	.portfolio-card p {
		font-size: 0.9rem;
		color: #555;
		margin-bottom: 15px;
	}

	.view-case-study {
		color: #0064b1;
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: bold;
	}

	.view-case-study:hover {
		text-decoration: underline;
	}

	.team {
		text-align: center;
		padding: 50px 20px;
		background-color: #f9f9f9;
	}

	.team h2 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 10px;
		color: #333;
	}

	.team p {
		font-size: 1rem;
		color: #555;
		margin-bottom: 30px;
	}

	.team-cards {
		display: flex;
		justify-content: center;
		gap: 20px;
		flex-wrap: wrap;
	}

	.team-card {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 20px;
		width: 300px;
		text-align: center;
	}

	.team-image {
		width: 100%;
		height: auto;
		border-radius: 10px;
		margin-bottom: 15px;
	}

	.team-card h3 {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 5px;
		color: #333;
	}

	.team-role {
		font-size: 1rem;
		color: #007bff;
		margin-bottom: 10px;
	}

	.team-description {
		font-size: 0.9rem;
		color: #555;
		margin-bottom: 15px;
	}

	.team-socials {
		display: flex;
		justify-content: center;
		gap: 10px;
	}

	.team-socials a {
		color: #007bff;
		font-size: 1.2rem;
		text-decoration: none;
	}

	.team-socials a:hover {
		color: #0056b3;
	}

	.cta {
		background: linear-gradient(to right, #1a1a2e, #16213e);
		color: #fff;
		text-align: center;
		padding: 50px 20px;
	}

	.cta-content h2 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.cta-content p {
		font-size: 1rem;
		margin-bottom: 30px;
		color: #d1d1d1;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 15px;
	}

	.cta-buttons .btn-primary {
		background-color: #007bff;
		color: #fff;
		border: none;
		padding: 10px 20px;
		font-size: 1rem;
		border-radius: 5px;
		cursor: pointer;

		&:hover {
			background-color: #0056b3;
		}
	}

	.cta-buttons .btn-secondary {
		background-color: transparent;
		color: #fff;
		border: 2px solid #fff;
		padding: 10px 20px;
		font-size: 1rem;
		border-radius: 5px;
		cursor: pointer;

		&:hover {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}

	.footer {
		background-color: #f9f9f9;
		padding: 50px 20px;
		color: #333;
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 20px;
	}

	.footer-column {
		flex: 1;
		min-width: 200px;
	}

	.footer-column h3 {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 15px;
		color: #333;
	}

	.footer-column p,
	.footer-column ul {
		font-size: 0.9rem;
		color: #555;
		margin-bottom: 10px;
	}

	.footer-column ul {
		list-style: none;
		padding: 0;
	}

	.footer-column ul li {
		margin-bottom: 5px;
	}

	.footer-socials {
		display: flex;
		gap: 10px;
	}

	.footer-socials a {
		color: #007bff;
		font-size: 1.2rem;
		text-decoration: none;
	}

	.footer-socials a:hover {
		color: #0056b3;
	}

	.sticky {
		position: sticky;
		top: 0;
		z-index: 1000;
		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.navbar {
		padding: 10px 20px;
	}
</style>
