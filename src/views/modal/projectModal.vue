<template>
	<div class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.8); z-index: 1050;">
		<div class="modal-dialog modal-xl modal-dialog-scrollable">
			<div class="modal-content border-0 shadow-lg">
				<div class="modal-header bg-dark text-white p-4">
					<h3 class="modal-title fw-bold">{{ project.title }}</h3>
					<button type="button" class="btn-close btn-close-white" @click="$emit('close')"></button>
				</div>

				<div class="modal-body p-0">
					<div class="ratio ratio-16x9 bg-black">
						<iframe 
							:src="`https://www.youtube.com/embed/${getYoutubeId(project.links.youtube)}`" 
							title="YouTube video player" 
							frameborder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
							allowfullscreen>
						</iframe>
					</div>

					<div class="container-fluid p-4 p-lg-5">
						<div class="row g-5">
							<div class="col-lg-8">
								<section class="mb-5">
									<h4 class="fw-bold border-bottom pb-2 mb-3">📝 프로젝트 개요</h4>
									<p class="text-secondary leading-relaxed" style="white-space: pre-line;">
										{{ project.details.description }}
									</p>
								</section>

								<section class="mb-5">
									<h4 class="fw-bold border-bottom pb-2 mb-3">🔧 핵심 구현 사항 (Technical Challenges)</h4>
									<div class="tech-card bg-light p-4 rounded-3 border">
										<ul class="list-unstyled mb-0">
											<li v-for="(feat, idx) in project.details.keyFeatures" :key="idx" class="d-flex mb-3">
												<i class="bi bi-gear-fill text-dark me-3 mt-1"></i>
												<span class="text-dark">{{ feat }}</span>
											</li>
										</ul>
									</div>
								</section>

								<section>
									<h4 class="fw-bold border-bottom pb-2 mb-3">🗨️ 개발 후기</h4>
									<blockquote class="blockquote bg-light p-4 rounded border-start border-4 border-dark">
										<p class="mb-0 small text-muted leading-relaxed">
											{{ project.details.review }}
										</p>
									</blockquote>
								</section>
							</div>

							<div class="col-lg-4">
								<div class="info-sidebar sticky-top" style="top: 2rem;">
									<div class="card border-0 bg-light p-4 mb-4">
										<h5 class="fw-bold mb-4">💻 개발 정보</h5>
										<div class="mb-3">
											<label class="small text-muted d-block">개발 환경</label>
											<span class="small fw-bold">{{ project.details.specs.environment }}</span>
										</div>
										<div class="mb-3">
											<label class="small text-muted d-block">참여 인원</label>
											<span class="small fw-bold">{{ project.details.specs.members }}</span>
										</div>
										<div class="mb-3">
											<label class="small text-muted d-block">담당 역할</label>
											<p class="small fw-bold mb-0 text-primary">{{ project.details.specs.role }}</p>
										</div>
									</div>

									<div class="d-grid gap-2">
										<a :href="project.links.github" target="_blank" class="btn btn-dark p-3">
											<i class="bi bi-github me-2"></i> GitHub Repository
										</a>
										<a :href="project.links.youtube" target="_blank" class="btn btn-outline-danger p-3">
											<i class="bi bi-play-btn-fill me-2"></i> Watch Gameplay
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="modal-footer bg-light p-3">
					<button type="button" class="btn btn-secondary px-4" @click="$emit('close')">닫기</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps(['project']);
defineEmits(['close']);

const getYoutubeId = (url) => {
	if (!url) return '';
	const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	const match = url.match(regExp);
	return (match && match[2].length === 11) ? match[2] : '';
};
</script>

<style lang="scss" scoped>
.modal-body {
	overflow-x: hidden;
}

.tech-card li {
	line-height: 1.6;
	&:last-child { margin-bottom: 0 !important; }
}

.leading-relaxed {
	line-height: 1.8;
}

.info-sidebar label {
	letter-spacing: -0.5px;
	margin-bottom: 4px;
}

/* 모달 애니메이션 및 스크롤 방지 */
.modal.show {
	display: block;
}
</style>