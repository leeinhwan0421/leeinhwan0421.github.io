<template>
	<section id="projects" class="py-5 bg-light projects">
		<div class="container py-5">
			<div class="text-center mb-5">
				<h2 class="fw-bold display-5">{{ $t('projects.title') }}</h2>
				<hr class="divider mx-auto" />
			</div>

			<div class="d-flex justify-content-center align-items-center mb-5">
				<div class="form-check form-switch d-flex align-items-center gap-2" style="padding-left: 0 !important;">
					<label class="form-check-label fw-bold" for="projectFilter">
						{{ $t('projects.focusMajor') }}
					</label>
					<input 
						class="form-check-input switch-major" 
						type="checkbox" 
						role="switch" 
						id="projectFilter" 
						v-model="showOnlyFeatured"
					>
				</div>
			</div>

			<div class="row g-4">
				<div v-for="project in filteredProjects" :key="project.id" class="col-lg-6">
					<div class="project-card border rounded-3 overflow-hidden h-100" @click="openProject(project)">
						<div class="project-img-wrapper border-bottom">
							<img :src="getThumbnail(project.id)" class="img-fluid" :alt="project.title">
							<div class="project-overlay">
								<span class="btn btn-outline-light px-4">{{ $t('projects.details') }}</span>
							</div>
						</div>

						<div class="p-4 text-start">
							<div class="d-flex justify-content-between align-items-start mb-0">
								<h4 class="fw-bold mb-0">{{ project.title }}</h4>
								<span 
									class="badge" 
									:style="{ backgroundColor: project.featured ? '#FF4D4D' : '#828282' }"
								>
									{{ project.period }}
								</span>
							</div>
							<p class="text-secondary small mb-3 fw-bold">{{ project.category }}</p>

							<p class="text-muted small mb-3 project-description">{{ project.shortDesc }}</p>
							
							<div class="d-flex flex-wrap gap-2">
								<span v-for="tag in project.tags" :key="tag" class="badge bg-light text-dark border-0">
									#{{ tag }}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<Teleport to="body">
			<ProjectModal 
				v-if="isModalOpen" 
				:project="currentProject" 
				@close="closeProject" 
			/>
		</Teleport>
	</section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectModal from '@/views/modal/projectModal.vue';

const { tm } = useI18n();

const isModalOpen = ref(false);
const currentProject = ref(null);
const showOnlyFeatured = ref(true);

const filteredProjects = computed(() => {
	const allItems = [...tm('projects.items')];

	if (showOnlyFeatured.value) {
		return allItems.filter(item => {
			return item && item.featured === true;
		});
	}
	return allItems;
});

const openProject = (project) => {
	currentProject.value = project;
	isModalOpen.value = true;
	document.body.style.overflow = 'hidden';
};

const closeProject = () => {
	isModalOpen.value = false;
	currentProject.value = null;
	document.body.style.overflow = 'auto';
};

const getThumbnail = (id) => {
	return new URL(`../../assets/projects/${id}/thumbnail.png`, import.meta.url).href;
};
</script>