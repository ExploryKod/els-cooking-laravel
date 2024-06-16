<footer class="els-footer">
    <div class="container">
        <div class="row mainRow">
            <div class="col-12 col-lg-6">
                <div class="text--light text-xs">
                    <span>&copy;</span> {{ date('Y') }} Els-Togo
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <ul class="footer-list">
                    <li class="text--light text-xs modal-open-btn"><a href="{{ route('public.legal') }}">Mentions légales</a></li>
                    <li class="text--light text-xs modal-open-btn"><a href="{{ route('public.confidentiality') }}">Politique de confidentialité</a></li>
                    <li class="text--light text-xs modal-open-btn"><a href="{{ route('public.credits') }}">Crédits</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
