<template>
	<header class="masthead">
		<div class="masthead-content text-white text-center">
			<div class="container px-4 px-lg-5">
				<h1 class="display-4 fw-bold mb-3">
					{{ $t('masthead.title') }}
				</h1>
				
				<p class="fs-5 mb-5 fw-light subtitle-text">
					{{ $t('masthead.subtitle') }}
				</p>

				<a class="btn btn-outline-light px-4 py-2 btn-xl" href="#about">
					{{ $t('masthead.button') }}
				</a>
			</div>
		</div>
	</header>
</template>