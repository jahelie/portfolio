(function($) {
    $(function() {
        // Sélectionne tous les en-têtes d'accordéon
        $('.accordion-header').on('click', function() {
            var $item = $(this).closest('.accordion-item');

            // Toggle la classe active sur l'élément cliqué
            $item.toggleClass('active');

            /* Optionnel : Si vous voulez que l'ouverture d'une section
               ferme automatiquement les autres, décommentez les lignes ci-dessous :
            */
            // $('.accordion-item').not($item).removeClass('active');
        });

        // Zoom plein écran sur les photos de galerie
        $(document).on('click', '.exp-photo', function() {
            var viewer = document.getElementById('img-zoom-viewer');
            var target = document.getElementById('img-zoom-target');
            if (viewer && target) {
                target.src = this.src;
                target.alt = this.alt;
                viewer.classList.add('active');
            }
        });

        document.getElementById('img-zoom-viewer').addEventListener('click', function() {
            this.classList.remove('active');
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.getElementById('img-zoom-viewer').classList.remove('active');
            }
        });
    });
})(jQuery);