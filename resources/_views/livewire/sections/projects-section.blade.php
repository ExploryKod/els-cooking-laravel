@if(!empty($projects))
    <section id="nos-projets" class="projects-section">
        <div class="projects-section-inner container">
            <div class="content">
                <div class="image-text__textWrapper">
                    <div class="pre-title">Nos projets</div>
                    <div class="title">Découvrez nos projets.</div>
                    <p>Nos projets incarnent la force et la diversité de nos convictions. Nous nous engageons avec les populations locales afin d'avancer ensemble.
                        Nous mettons un point d'honneur à la coopération et l'autonomisation.</p>
                </div>
            </div>
            <div class="swiper-container els-swiper-projects">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        @foreach($projects as $project)
                            <div
                                class="swiper-slide"
                                data-imageid="{{ $project->image_url ? Vite::asset($project->media_slug) : Vite::asset('resources/theme/img/img-1.jpg') }}"
                            >
                                <span>{{ $project->project_date }}</span>

                                <div class="swiper__inner-btn">
                                    <a class="button button--secondary button--radius-light" href="/project?project-page-id={{ $project->id }}">En savoir + </a>
                                </div>
                                <div class="slide-content">
                                    <h3 class="els-title">{{ $project->project_title }}</h3>
                                    <p class="els-text els-text--white">{{ $project->project_place }}</p>
                                </div>

                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
@endif
