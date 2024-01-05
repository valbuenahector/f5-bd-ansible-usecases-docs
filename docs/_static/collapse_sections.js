$(document).ready(function() {
    $('.toctree-wrapper .toctree').each(function() {
        var $toctree = $(this);
        var $toggleButton = $('<span class="toggle-button">&#9660;</span>');

        $toctree.prepend($toggleButton);

        $toggleButton.on('click', function() {
            $toctree.toggleClass('collapsed');
        });
    });
});