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
    });
})(jQuery);