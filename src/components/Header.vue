<template>
	<header>
		<!-- Header-start -->
		<div class="header-start">
			<img src="../assets/headerImg/h-1.svg" alt="h-logo">
			<div class="header-contacts">
				<div class="header-contact">
					<img src="../assets/headerImg/h-2.svg" alt="h-2img">
					<div class="header-contact__info">
						<h4>Emergency</h4>
						<h5>(237) 681-812-255</h5>
					</div>
				</div>
				<div class="header-contact">
					<img src="../assets/headerImg/h-3.svg" alt="h-3img">
					<div class="header-contact__info">
						<h4>Work Hour</h4>
						<h5>09:00 - 20:00 Everyday</h5>
					</div>
				</div>
				<div class="header-contact">
					<img src="../assets/headerImg/h-4.svg" alt="h-4img">
					<div class="header-contact__info">
						<h4>Location</h4>
						<h5>0123 Some Place</h5>
					</div>
				</div>
			</div>
		</div>

		<!-- Header-end -->
		<div class="header-end">
			<nav>
				<ul class="header-end__items">
					<RouterLink :to="{name: 'home'}">Home</RouterLink>
					<RouterLink :to="{name: 'about'}">About</RouterLink>
					<RouterLink :to="{name: 'services'}">Services</RouterLink>
					<RouterLink :to="{name: 'single'}">Single</RouterLink>
					<RouterLink :to="{name: 'doctors'}">Doctors</RouterLink>
				</ul>
			</nav>

			<div class="header-end-buttons">
				<img src="../assets/headerImg/h-5.png" alt="h-5img">
				<a href="#">Appointment</a>
			</div>
		</div>
	</header>
</template>

<script>
import { RouterLink} from 'vue-router'
export default {
	
}
</script>

<style>
/* Header-start */
	.header-start {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 180px;
	}
	.header-contacts {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 21px;
	}
	.header-contact {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
	.header-contact__info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 5px;
	}
	.header-contact__info h4 {
		font-weight: 600;
		font-size: calc(18/19.2 *1vw);
		text-transform: uppercase;
		color: #1F2B6C;
	}
	.header-contact__info h5 {
		font-weight: 500;
		font-size: calc(18/19.2 *1vw);
		color: #159EEC;
	}

	/* Header-end */
	.header-end {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		background-color: #1F2B6C;
		padding: 0 180px;
	}
	.header-end__items {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 30px 0;
		gap: 20px;
	}
	.header-end__items a {
		transition: all 500ms ease;
		color: white;
		font-size: calc(18/19.2 *1vw);
	}
	.header-end__items a:hover {
		color: #159EEC;
	}
	.header-end-buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	.header-end-buttons a {
		transition: all 500ms ease;
		display: inline-block;
		padding: 13px 35px;
		background-color: #BFD2F8;
		border-radius: 50px;
		color: #1F2B6C;
		font-size: calc(18/19.2 *1vw);
	}
	.header-end-buttons a:hover {
		transform: scale(1.1);
		background-color: #159EEC;
		color: white;
	}
</style>