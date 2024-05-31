<header class="mainHeader">
    <div class="container">
        <div class="row align-items-center mainRow g-lg-0">
            <div class="col-auto logo">
                <a href="{{ url('/#homepage') }}" data-hash="#homepage">
                    <img src="{{ Vite::asset('resources/theme/img/logo-els.jpg') }}" alt="Logo ELS-TOGO">
                </a>
            </div>
            <nav class="col nav">
                <div class="row nav-and-cta g-lg-0">
                    <div class="col-auto me-lg-3">
                        <ul class="header-menu">
                            <li class="menu__nav-item"><a data-hash="#mission" href="{{ url('/#mission') }}">Notre mission</a></li>
                            <li class="menu__nav-item"><a data-hash="#qui-sommes-nous" href="{{ url('/#qui-sommes-nous') }}">Qui sommes-nous ?</a></li>
                            <li class="menu__nav-item"><a data-hash="#nos-projets" href="{{ url('/#nos-projets') }}">Nos projets</a></li>
                        </ul>
                    </div>
                    <div class="col-auto ms-lg-5">
                        <a data-hash="#contact" href="{{ url('/#contact') }}" class="button button--secondary">Nous contacter</a>
                    </div>
                </div>
            </nav>
            <div class="col-auto burger-menu">
                <button class="burger-menu__button" aria-label="Menu">
                    <svg viewBox="0 0 100 100">
                        <path class="line line1"
                              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path class="line line2" d="M 20,50 H 80" />
                        <path class="line line3"
                              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</header>
