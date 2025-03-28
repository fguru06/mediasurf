<template>
	<div class="courses-page">
		<section id="courses" class="courses">
			<div class="courses-header">
				<h1>eLearning Course Catalog</h1>
				<p>
					Discover our diverse range of training courses designed to enhance
					employee skills and boost organizational performance.
				</p>
			</div>
			<div class="courses-content">
				<div class="filter-courses">
					<h3>Filter Courses</h3>
					<div class="filter-group">
						<h4>Categories</h4>
						<ul>
							<li>
								<input type="checkbox" id="onboarding" />
								<label for="onboarding">Employee Onboarding</label>
							</li>
							<li>
								<input type="checkbox" id="compliance" />
								<label for="compliance">Compliance Training</label>
							</li>
							<li>
								<input type="checkbox" id="leadership" />
								<label for="leadership">Leadership Development</label>
							</li>
							<li>
								<input type="checkbox" id="technical" />
								<label for="technical">Technical Skills</label>
							</li>
						</ul>
					</div>
					<div class="filter-group">
						<h4>Duration</h4>
						<ul>
							<li>
								<input type="checkbox" id="under1hour" />
								<label for="under1hour">Under 1 hour</label>
							</li>
							<li>
								<input type="checkbox" id="1to3hours" />
								<label for="1to3hours">1-3 hours</label>
							</li>
							<li>
								<input type="checkbox" id="3hours" />
								<label for="3hours">3+ hours</label>
							</li>
						</ul>
					</div>
				</div>
				<div class="courses-list">
					<div class="course-card" v-for="course in courses" :key="course.id">
						<img :src="course.image" :alt="course.title" />
						<div class="course-content">
							<span class="course-tag">{{ course.category }}</span>
							<h3>{{ course.title }}</h3>
							<p>{{ course.description }}</p>
							<div class="course-meta">
								<span><i class="fas fa-clock"></i> {{ course.duration }}</span>
								<span><i class="fas fa-user"></i> {{ course.level }}</span>
							</div>
							<button class="btn-primary">View Course Details</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const courses = ref([
		{
			id: 1,
			title: "New Employee Orientation",
			description:
				"Comprehensive orientation for new employees covering company policies, culture, and essential procedures.",
			category: "Onboarding",
			duration: "2 hours",
			level: "Beginner",
			image: new URL("../assets/course1.avif", import.meta.url).href,
		},
		{
			id: 2,
			title: "Cybersecurity Fundamentals",
			description:
				"Essential cybersecurity practices for all employees to protect sensitive company data and information.",
			category: "Compliance Training",
			duration: "1 hour",
			level: "All Levels",
			image: new URL("../assets/course2.avif", import.meta.url).href,
		},
		// Add more courses as needed
	]);
</script>

<style scoped lang="scss">
	.courses {
		padding: 50px 20px;
		background-color: var(--bg-color);
		color: var(--text-color);

		.courses-header {
			text-align: center;
			margin-bottom: 30px;

			h1 {
				font-size: 2rem;
				font-weight: bold;
				margin-bottom: 10px;
			}

			p {
				font-size: 1rem;
				color: var(--secondary-text-color);
			}
		}

		.courses-content {
			display: flex;
			gap: 20px;

			.filter-courses {
				flex: 1;
				background-color: var(--card-bg-color);
				padding: 20px;
				border-radius: 10px;
				box-shadow: 0 4px 6px var(--shadow-color);

				h3 {
					font-size: 1.5rem;
					font-weight: bold;
					margin-bottom: 20px;
				}

				.filter-group {
					margin-bottom: 20px;

					h4 {
						font-size: 1.2rem;
						font-weight: bold;
						margin-bottom: 10px;
					}

					ul {
						list-style: none;
						padding: 0;

						li {
							margin-bottom: 10px;

							label {
								margin-left: 5px;
								font-size: 1rem;
								color: var(--text-color);
							}
						}
					}
				}
			}

			.courses-list {
				flex: 3;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				gap: 20px;

				.course-card {
					background-color: var(--card-bg-color);
					border-radius: 10px;
					box-shadow: 0 4px 6px var(--shadow-color);
					overflow: hidden;

					img {
						width: 100%;
						height: 200px;
						object-fit: cover;
					}

					.course-content {
						padding: 20px;

						.course-tag {
							display: inline-block;
							background-color: var(--primary-color);
							color: #fff;
							font-size: 0.8rem;
							padding: 5px 10px;
							border-radius: 5px;
							margin-bottom: 10px;
						}

						h3 {
							font-size: 1.2rem;
							font-weight: bold;
							margin-bottom: 10px;
						}

						p {
							font-size: 0.9rem;
							color: var(--secondary-text-color);
							margin-bottom: 15px;
						}

						.course-meta {
							display: flex;
							justify-content: space-between;
							font-size: 0.9rem;
							color: var(--secondary-text-color);
							margin-bottom: 15px;

							i {
								margin-right: 5px;
							}
						}

						.btn-primary {
							background-color: var(--primary-color);
							color: #fff;
							border: none;
							padding: 10px 20px;
							font-size: 1rem;
							border-radius: 5px;
							cursor: pointer;

							&:hover {
								background-color: var(--primary-color-hover);
							}
						}
					}
				}
			}
		}
	}
</style>
