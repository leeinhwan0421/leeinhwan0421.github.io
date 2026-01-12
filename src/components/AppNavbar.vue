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
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-left">
					<li class="nav-item" v-for="menu in menuList" :key="menu.id">
						<a class="nav-link px-3 custom-link" :href="'#' + menu.id">
							{{ menu.title }}
						</a>
					</li>

					<li class="nav-item ms-lg-3">
						<div class="lang-switcher">
							<button 
								class="btn-lang" 
								:class="{ active: locale === 'ko' }" 
								@click="changeLang('ko')"
							>KO</button>
							<span class="divider">|</span>
							<button 
								class="btn-lang" 
								:class="{ active: locale === 'en' }" 
								@click="changeLang('en')"
							>EN</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const menuList = [
	{ title: 'About me', id: 'about' },
	{ title: 'Awards', id: 'awards' },
	{ title: 'Skills', id: 'skills' },
	{ title: 'Projects', id: 'projects' }
];

const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 50;
};

const changeLang = (lang) => {
	locale.value = lang;
	localStorage.setItem('user-lang', lang);
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);

	const savedLang = localStorage.getItem('user-lang');
	if (savedLang) locale.value = savedLang;
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>