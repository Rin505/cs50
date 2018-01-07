$(document).ready(function() {
    $('#quote').submit(function () {
        var url = 'quote.php?symbol=' + $('#symbol').val();
        $.getJSON(url, function(data) {
            alert(data.price);
        });
        return false;
    });
});