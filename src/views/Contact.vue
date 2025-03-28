<template>
	<div class="contact-page">
		<h1 class="contact-heading">GET IN TOUCH</h1>
		<div class="contact-container">
			<div class="contact-form">
				<form @submit.prevent="handleSubmit">
					<div class="form-row">
						<div class="form-group">
							<label for="fullName">Full Name</label>
							<input
								type="text"
								id="fullName"
								v-model="form.fullName"
								placeholder="John Doe"
								required
							/>
						</div>
						<div class="form-group">
							<label for="email">Email Address</label>
							<input
								type="email"
								id="email"
								v-model="form.email"
								placeholder="john@example.com"
								required
							/>
						</div>
					</div>
					<div class="form-group">
						<label for="companyName">Company Name</label>
						<input
							type="text"
							id="companyName"
							v-model="form.companyName"
							placeholder="Your Company Ltd."
						/>
					</div>
					<div class="form-group">
						<label for="service">Service Interested In</label>
						<select id="service" v-model="form.service" required>
							<option value="" disabled>Select a service</option>
							<option value="web-design">Web Design</option>
							<option value="elearning">eLearning Development</option>
							<option value="consulting">Consulting</option>
						</select>
					</div>
					<div class="form-group">
						<label for="message">Your Message</label>
						<textarea
							id="message"
							v-model="form.message"
							placeholder="Tell us about your project or requirements..."
							rows="5"
							required
						></textarea>
					</div>
					<button type="submit" class="btn-primary">Send Message</button>
				</form>
			</div>
			<div class="contact-info">
				<div class="info-item">
					<i class="fas fa-map-marker-alt"></i>
					<p>123 Business Avenue<br />Suite 200<br />San Francisco, CA 94107</p>
				</div>
				<div class="info-item">
					<i class="fas fa-envelope"></i>
					<p>info@nexuslearn.com</p>
				</div>
				<div class="info-item">
					<i class="fas fa-phone"></i>
					<p>(415) 555-0123</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const form = ref({
		fullName: "",
		email: "",
		companyName: "",
		service: "",
		message: "",
	});

	const handleSubmit = () => {
		alert("Your message has been sent!");
		// Add logic to handle form submission
	};
</script>

<style scoped lang="scss">
	.contact-page {
		padding: 50px 20px;
		background-color: var(--bg-color);
		color: var(--text-color);

		.contact-heading {
			text-align: center;
			font-size: 2rem;
			font-weight: bold;
			margin-bottom: 30px;
		}

		.contact-container {
			display: flex;
			gap: 20px;
			flex-wrap: wrap;

			.contact-form {
				flex: 2;
				background-color: var(--card-bg-color);
				padding: 20px;
				border-radius: 10px;
				box-shadow: 0 4px 6px var(--shadow-color);

				form {
					display: flex;
					flex-direction: column;
					gap: 15px;

					.form-row {
						display: flex;
						gap: 15px;

						.form-group {
							flex: 1;
						}
					}

					.form-group {
						display: flex;
						flex-direction: column;

						label {
							font-size: 1rem;
							margin-bottom: 5px;
							color: var(--text-color);
						}

						input,
						select,
						textarea {
							padding: 10px;
							border: 1px solid var(--shadow-color);
							border-radius: 5px;
							font-size: 1rem;
							color: var(--text-color);
							background-color: var(--bg-color);
						}

						input:focus,
						select:focus,
						textarea:focus {
							outline: none;
							border-color: var(--primary-color);
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

			.contact-info {
				flex: 1;
				background-color: var(--card-bg-color);
				padding: 20px;
				border-radius: 10px;
				box-shadow: 0 4px 6px var(--shadow-color);

				.info-item {
					display: flex;
					align-items: center;
					gap: 10px;
					margin-bottom: 20px;

					i {
						font-size: 1.5rem;
						color: var(--primary-color);
					}

					p {
						font-size: 1rem;
						color: var(--text-color);
					}
				}
			}
		}
	}
</style>
