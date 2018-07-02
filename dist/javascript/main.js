$(document).ready(function () {
    loadInsertions();
    hideAndShowNetworkElements();
});


function loadInsertions() {
    $("insertHtml").each(function (i) {
        $(this).load($(this).attr("url"));
    });
}

function hideAndShowNetworkElements() {
    $.ajax({
        url: 'https://troom.capgemini.com/sites/vcc/devon/overview.aspx',
        dataType: 'jsonp',
        method: 'GET',
        timeout: 2000,
        error: function (hrx, textStatus, error) {
            if (textStatus === 'parsererror') {
                $('.only-internal').show();
                $('.only-external').hide();
            } else {
                $('.only-internal').hide();
                $('.only-external').show();
            }
        }
    });
}