(function ($) {

    Drupal.behaviors.hubspot_admin_helper = {

        attach: function (context, settings) {

            $('form[method="post"]').submit(function(e) {
                e.preventDefault();
                var data=$(this).serialize();
                // Send the data via AJAX
                $.ajax({
                    type: 'POST',
                    url: '/hubspot-admin-helper/json',
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