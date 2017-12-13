$('Document').ready(function () {
    (function update() {
        var cpu, mem;
        $.ajax({
            url: '/getStats.php',
            type: 'GET',
            success: function (response) {
                $('#stats').html(response);
            }
        }).then(function() {
            setTimeout(update, 5000);
        });
    })();
});