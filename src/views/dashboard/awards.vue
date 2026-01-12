<template>
	<section id="awards" class="py-5 bg-gray-light awards">
		<div class="container py-5">
			<div class="text-center mb-5">
				<h2 class="fw-bold display-5">{{ t('awards.title') }}</h2>
				<hr class="divider mx-auto" />
			</div>
			
			<div class="list mx-auto">
				<div 
					v-for="(award, index) in filteredAwards" 
					:key="index"
					class="item mb-4 p-4 bg-light border"
				>
					<div class="content">
						<div class="d-flex align-items-center mb-2">
							<span class="date text-secondary me-2">{{ award.date }}</span>
						</div>

						<div class="d-flex flex-column flex-md-row justify-content-between align-items-md-start mb-3">
							<div>
								<h4 class="title mb-1">{{ award.title }}</h4>
								<p class="organization mb-0">
									{{ award.organization }}
								</p>
							</div>
						</div>

						<div class="description mt-3 pt-3 border-top">
							<p class="text-muted mb-0">{{ award.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { computed } from 'vue';
	import { useI18n } from 'vue-i18n';

	const { tm, t } = useI18n();

	const filteredAwards = computed(() => {
		return [...tm('awards.list')];
	});
</script>