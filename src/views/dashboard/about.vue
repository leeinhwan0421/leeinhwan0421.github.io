<template>
	<section id="about" class="py-5 bg-light about">
		<div class="container py-5">
			<div class="text-center mb-5">
				<h2 class="fw-bold display-5">{{ $t('about.title') }}</h2>
				<hr class="divider mx-auto" />
			</div>

			<div class="row g-4 text-center justify-content-center mb-3">
				<div class="col-6 col-md-4">
					<div class="info-item">
						<i class="bi bi-person-fill fs-2 mb-3"></i>
						<h5 class="fw-bold">{{ $t('about.info.name') }}</h5>
						<p>{{ $t('about.values.name') }}</p>
					</div>
				</div>
				<div class="col-6 col-md-4">
					<div class="info-item">
						<i class="bi bi-calendar-event-fill fs-2 mb-3"></i>
						<h5 class="fw-bold">{{ $t('about.info.birth') }}</h5>
						<p>{{ $t('about.values.birth') }}</p>
					</div>
				</div>
				<div class="col-6 col-md-4">
					<div class="info-item">
						<i class="bi bi-geo-alt-fill fs-2 mb-3"></i>
						<h5 class="fw-bold">{{ $t('about.info.address') }}</h5>
						<p>{{ $t('about.values.address') }}</p>
					</div>
				</div>
				<div class="col-6 col-md-4">
					<div class="info-item">
						<i class="bi bi-telephone-fill fs-2 mb-3"></i>
						<h5 class="fw-bold">{{ $t('about.info.phone') }}</h5>
						<p>{{ $t('about.values.phone') }}</p>
					</div>
				</div>
				<div class="col-6 col-md-4">
					<div class="info-item">
						<i class="bi bi-envelope-fill fs-2 mb-3"></i>
						<h5 class="fw-bold">{{ $t('about.info.email') }}</h5>
						<p class="small text-break">{{ $t('about.values.email') }}</p>
					</div>
				</div>
				<div class="col-6 col-md-4">
					<div class="info-item">
						<i class="bi bi-mortarboard-fill fs-2 mb-3"></i>
						<h5 class="fw-bold">{{ $t('about.info.education') }}</h5>
						<p style="white-space: pre-line;">{{ $t('about.values.education') }}</p>
					</div>
				</div>
			</div>

			<div class="d-flex justify-content-center gap-4">
				<a href="https://github.com/leeinhwan0421" target="_blank" class="link-icon github">
					<i class="bi bi-github fs-1"></i>
				</a>
				<a href="https://youtube.com/@leeinhwan0421" target="_blank" class="link-icon youtube">
					<i class="bi bi-youtube fs-1"></i>
				</a>
			</div>
		</div>
	</section>
</template>