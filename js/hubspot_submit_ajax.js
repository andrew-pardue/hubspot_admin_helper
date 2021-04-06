(function ($) {

    Drupal.behaviors.hubspot_admin_helper = {

        attach: function (context, settings) {

            $('form[method="post"]').submit(function(e) {
                var btn = $(this).find("input[type=submit]:focus" );
                e.preventDefault();
                var data=$(this).serialize();
                // Send the data via AJAX
                $.ajax({
                    type: 'POST',
                    url: '/hubspot-admin-helper/json/json',
                    dataType: 'json',
                    success: function(data) {
                        // Just reload the page to refresh everything
                        window.location.reload();
                    },
                    data: {data},
                });
            });

        }

    };

}(jQuery));
