<template>
	<nav 
		class="navbar navbar-expand-lg fixed-top custom-navbar" 
		:class="{ 'navbar-scrolled': isScrolled }"
	>
		<div class="container">
			<a class="navbar-brand fw-bold" href="#">
				LIH's Portfolio
			</a>

			<button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#portfolioNav">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="portfolioNav">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item" v-for="menu in menuList" :key="menu.id">
						<a class="nav-link px-3 custom-link" :href="'#' + menu.id">
							{{ menu.title }}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="ab" style="width: auto;">
		<div style="height: 200vh; width: 100%; background-color: black;"></div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menuList = [
	{ title: 'About me', id: 'about' },
	{ title: 'Skills', id: 'skills' },
	{ title: 'Projects', id: 'projects' },
	{ title: 'Experience', id: 'experience' }
];

// 스크롤 상태 관리
const isScrolled = ref(false);

const handleScroll = () => {
	// 스크롤 위치가 50px 이상일 때 상태 변경
	isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>