<template>
	<div class="front-page">
		<!-- Header Section -->
		<header class="header">
			<div class="logo">STUDIO SHOWDE</div>
			<div class="tagline">
				WE ARE CURRENTLY IN SEARCH OF A PASSIONATE INDIVIDUAL TO JOIN OUR TEAM
				AS AN E-LEARNING CONSULTANT FOCUSED ON ACCESSIBILITY AND STUDENT
				ENGAGEMENT!
			</div>
		</header>

		<!-- Banner Section -->
		<section class="banner">
			<div class="banner-text">
				<h1>E-LEARNING CONSULTANT</h1>
				<div class="sub-banner">
					<span>ACCESSIBILITY</span>
					<span>STUDENT ENGAGEMENT</span>
					<span>INNOVATION</span>
					<span>COLLABORATION</span>
				</div>
			</div>
		</section>

		<!-- Job Details Section -->
		<section class="job-details">
			<h2>GENERAL REQUIREMENTS:</h2>
			<ul>
				<li>At least 2 years experience in e-Learning consulting</li>
				<li>Expertise in accessibility standards and inclusive design</li>
				<li>Strong understanding of student engagement strategies</li>
				<li>
					Ability to create innovative and interactive learning experiences
				</li>
			</ul>
			<div class="dates">
				<p><strong>Submission Date:</strong> 17 March 2027</p>
				<p><strong>Interview Date:</strong> 20 March 2027</p>
			</div>
		</section>

		<!-- Footer Section -->
		<footer class="footer">
			<p>
				Send your latest CV and portfolio to:
				<strong>hello@reallygreatsite.com</strong>
			</p>
			<p>For more information: <strong>www.reallygreatsite.com</strong></p>
		</footer>
	</div>
</template>

<script setup>
	// No additional logic for now
</script>

<style scoped>
	.front-page {
		font-family: Arial, sans-serif;
		color: #333;
		line-height: 1.6;
	}

	.header {
		text-align: center;
		padding: 20px;
		background-color: #fff;
		border-bottom: 2px solid #000;
	}

	.logo {
		font-size: 1.8rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	.tagline {
		font-size: 1rem;
		color: #000;
		margin-top: 10px;
	}

	.banner {
		text-align: center;
		padding: 50px 20px;
		background-color: #f4f4f4;
	}

	.banner-text h1 {
		font-size: 3rem;
		font-weight: bold;
		margin-bottom: 15px;
		text-transform: uppercase;
	}

	.sub-banner {
		display: flex;
		justify-content: center;
		gap: 10px;
		flex-wrap: wrap;
		margin-top: 20px;
	}

	.sub-banner span {
		background-color: #000;
		color: #fff;
		padding: 5px 10px;
		font-size: 0.9rem;
		text-transform: uppercase;
	}

	.job-details {
		padding: 30px 20px;
		background-color: #fff;
	}

	.job-details h2 {
		font-size: 1.8rem;
		margin-bottom: 15px;
		font-weight: bold;
		text-transform: uppercase;
	}

	.job-details ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.job-details ul li {
		font-size: 1.1rem;
		margin-bottom: 10px;
		position: relative;
		padding-left: 20px;
	}

	.job-details ul li::before {
		content: "•";
		position: absolute;
		left: 0;
		color: #000;
		font-size: 1.5rem;
		line-height: 1;
	}

	.dates {
		margin-top: 20px;
		font-size: 1.1rem;
	}

	.dates p {
		margin: 5px 0;
	}

	.footer {
		text-align: center;
		padding: 20px;
		background-color: #f4f4f4;
		font-size: 1rem;
		border-top: 2px solid #000;
	}

	.footer p {
		margin: 5px 0;
	}

	.footer strong {
		color: #000;
	}
</style>
