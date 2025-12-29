<template>
	<div class="modal fade show d-block projectModal" tabindex="-1" style="background: rgba(0,0,0,0.75); z-index: 1050;">
		<div class="modal-dialog modal-lg modal-dialog-scrollable">
			<div class="modal-content border-0 shadow-lg modal-content">
				<div class="modal-header text-white p-3 modal-header">
					<h3 class="modal-title fw-bold ms-3">{{ project.title }}</h3>
					<button type="button" class="btn-close btn-close-white me-3" @click="$emit('close')"></button>
				</div>

				<div class="modal-body p-0">
					<div class="project-banner-wrapper">
						<div class="ratio ratio-16x9 banner-container">
							<img :src="getThumbnail(project.id)" class="banner-img" :alt="project.title">
						</div>
					</div>

					<div class="container-fluid px-4 px-lg-5 py-0 mt-5 mb-3">
						<section class="mb-5">
							<h4 class="fw-bold border-bottom pb-2 mb-3">{{ $t('projectModal.description') }}</h4>
							<p class="text-secondary leading-relaxed" style="white-space: pre-line;">
								{{ project.details.description }}
							</p>
						</section>

						<section class="mb-5">
							<h4 class="fw-bold border-bottom pb-2 mb-3">{{ $t('projectModal.devleopmentSpecs.title') }}</h4>
							<div class="spec-list bg-light rounded-2 border p-4">
								<div class="spec-item mb-3">
									<label class="small text-muted fw-bold d-block mb-1">{{ $t('projectModal.devleopmentSpecs.environment') }}</label>
									<p class="mb-0 text-muted fw-bold">{{ project.details.specs.environment }}</p>
								</div>
								<div class="spec-item mb-3">
									<label class="small text-muted fw-bold d-block mb-1">{{ $t('projectModal.devleopmentSpecs.members') }}</label>
									<p class="mb-0 text-muted fw-bold">{{ project.details.specs.members }}</p>
								</div>
								<div class="spec-item">
									<label class="small text-muted fw-bold d-block mb-1">{{ $t('projectModal.devleopmentSpecs.rule') }}</label>
									<p class="mb-0 text-muted fw-bold">{{ project.details.specs.role }}</p>
								</div>
							</div>
						</section>

						<section class="mb-5">
							<h4 class="fw-bold border-bottom pb-2 mb-3">{{ $t('projectModal.mainTasks') }}</h4>
							<div class="tech-card bg-light p-4 rounded-2 border">
								<ul class="list-unstyled mb-0">
									<li v-for="(feat, idx) in project.details.keyFeatures" :key="idx" class="d-flex mb-3">
										<i class="bi bi-gear-fill text-dark me-3"></i>
										<span class="text-dark">{{ feat }}</span>
									</li>
								</ul>
							</div>
						</section>

						<section v-if="pdfUrl" class="mb-5">
							<h4 class="fw-bold border-bottom pb-2 mb-3">{{ $t('projectModal.presentation') }}</h4>
							<div class="pdf-container border rounded-2 overflow-hidden">
								<div class="ratio ratio-16x9">
									<iframe :src="pdfUrl" frameborder="0"></iframe>
								</div>
								<div class="p-2 bg-light text-end border-top">
									<a :href="pdfUrl" target="_blank" class="btn btn-sm btn-dark">
										<i class="bi bi-file-earmark-pdf me-1"></i>{{ $t('projectModal.popUp') }}
									</a>
								</div>
							</div>
						</section>

						<section class="mb-5">
							<h4 class="fw-bold border-bottom pb-2 mb-3">{{ $t('projectModal.review') }}</h4>
							<p class="text-secondary leading-relaxed" style="white-space: pre-line;">
								{{ project.details.review }}
							</p>
						</section>

						<section v-if="project.links.youtube || project.links.github" class="mb-2">
							<h4 class="fw-bold border-bottom pb-2 mb-3">{{ $t('projectModal.browsing.title') }}</h4>
							<div class="d-flex flex-column flex-sm-row gap-3">
								<a 
									v-if="project.links.youtube"
									:href="project.links.youtube" 
									target="_blank" 
									class="btn btn-outline-danger flex-fill d-flex align-items-center justify-content-center py-3 fw-bold transition-hover"
								>
									<i class="bi bi-play-btn-fill fs-5 me-2"></i> 
									{{ $t('projectModal.browsing.video') }}
								</a>
								
								<a 
									v-if="project.links.github"
									:href="project.links.github" 
									target="_blank" 
									class="btn btn-dark flex-fill d-flex align-items-center justify-content-center py-3 fw-bold transition-hover"
								>
									<i class="bi bi-github fs-5 me-2"></i> 
									{{ $t('projectModal.browsing.source') }}
								</a>
							</div>
						</section>
					</div>
				</div>

				<div class="modal-footer bg-light p-3">
					<button type="button" class="btn btn-secondary px-4 rounded-1" @click="$emit('close')">{{ $t('projectModal.close') }}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['project']);
defineEmits(['close']);

const getThumbnail = (id) => {
	return new URL(`../../assets/projects/${id}/banner.png`, import.meta.url).href;
};

const pdfUrl = computed(() => {
	const projectId = props.project?.id;

	if (!projectId || !props.project.hasPdf) {
		return null;
	}

	try {
		return new URL(`../../assets/projects/${projectId}/summary.pdf`, import.meta.url).href;
	} catch (e) {
		return null;
	}
});
</script>
