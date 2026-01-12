<template>
	<section id="skills" class="py-5 px-3 bg-light skills">
		<div class="container py-5">
			<div class="text-center mb-5">
				<h2 class="fw-bold display-5">{{ $t('skills.title') }}</h2>
				<hr class="divider mx-auto" />
			</div>

			<div class="row g-4 mb-5">
				<h3 class="fw-bold mb-0 border-start border-4 border-secondary ps-3">
					{{ $t('skills.main.title') }}
				</h3>
				
				<div class="col-lg-6">
					<div class="skill-card p-4 border rounded h-100">
						<div class="d-flex align-items-center mb-3">
							<i class="devicon-csharp-plain colored fs-2 me-2"></i>
							<h4 class="fw-bold mb-0">{{ $t('skills.main.csharp.name') }}</h4>
						</div>
						<ul class="list-unstyled mb-0">
							<li v-for="(desc, index) in $tm('skills.main.csharp.desc')" :key="index" class="mb-2">
								<i class="bi bi-check2-circle text-dark me-2"></i> {{ desc }}
							</li>
						</ul>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="skill-card p-4 border rounded h-100">
						<div class="d-flex align-items-center mb-3">
							<i class="devicon-unity-plain colored fs-2 me-2"></i>
							<h4 class="fw-bold mb-0">{{ $t('skills.main.unity.name') }}</h4>
						</div>
						<ul class="list-unstyled mb-0">
							<li v-for="(desc, index) in $tm('skills.main.unity.desc')" :key="index" class="mb-2">
								<i class="bi bi-check2-circle text-dark me-2"></i> {{ desc }}
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="row g-4 mb-5">
				<h3 class="fw-bold mb-2 border-start border-4 border-secondary ps-3">
					{{ $t('skills.sub.title') }}
				</h3>
				<div class="col-md-4" v-for="(item, index) in $tm('skills.sub.items')" :key="index">
					<div class="sub-skill-card p-3 border rounded text-center d-flex flex-column align-items-center h-100">
						<h5 class="fw-bold">{{ item.name }}</h5>
						<p class="small text-muted mb-0">{{ item.desc }}</p>
					</div>
				</div>
			</div>

			<div class="row g-4">
				<h3 class="fw-bold mb-2 border-start border-4 border-secondary ps-3">
					{{ $t('skills.certifications.title') }}
				</h3>
				<div class="col-md-4" v-for="(item, index) in $tm('skills.certifications.items')" :key="index">
					<div class="certification-card p-3 border rounded h-100">
						<div class="content">
							<h5 class="name fw-bold mb-1">{{ item.name }}</h5>
							<div class="description text-secondary small mb-0">{{ item.date }} | {{ item.organization }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>