<!-- resources/views/livewire/sections/members-section.blade.php -->

<section id="qui-sommes-nous" class="text-cards-horizon team-section">
    <div class="container">
        <div class="row mainRow">
            <div class="col-12 text-cards-horizon__textWrapper">
                <div class="pre-title pre-title--centered">Notre équipe</div>
                <div class="title title--centered">Une équipe engagée pour rendre le monde meilleur</div>
                <p class="els-text-lg els-text-centered">Depuis 2010, nous nous sommes engagées ensemble et avons bâti pierre par pierre cette association. Découvrez le parcours des membres fondateurs.</p>
            </div>
            <div class="col-12 text-cards-horizon__cardsWrapper">
                @if(!empty($members))
                    @foreach($members as $member)
                        <div data-typebtn="team-btn" class="box" data-title="{{ $member->prenom }} {{ $member->nom }}">
                            <div class="top-bar"></div>
                            <div class="content">
                                <img src="{{ Vite::asset('resources/theme/img/icons/5236.jpg') }}" alt="{{ $member->prenom }} {{ $member->nom }}">
                                <strong>{{ $member->prenom }}</strong>
                                <p>{{ $member->nom }}</p>
                                <span>{{ $member->email }}</span>
                            </div>
                            <div class="box-footer">
                                <p>{{ $member->presentation }}</p>
                            </div>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
    </div>
</section>
