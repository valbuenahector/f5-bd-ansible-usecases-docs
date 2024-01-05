$(document).ready(function() {
    $('.toctree-wrapper .toctree').each(function() {
        var $toctree = $(this);
        var $toggleButton = $('<button type="button" class="btn btn-link" data-toggle="collapse" data-target="#' + $toctree.attr('id') + '-collapse">&#9660;</button>');

        $toctree.before($toggleButton);

        $toggleButton.on('click', function() {
            $toctree.toggleClass('collapsed');
        });
    });
});
