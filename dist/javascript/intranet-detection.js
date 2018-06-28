function ping() {
    /*$.ajax({
        url: 'https://troom.capgemini.com/sites/vcc/devon/overview.aspx',
        success: function (result) {
            alert('reply');
        },
        error: function (result) {
            alert('timeout/error');
        }
    });*/

    $.ajax({
        url: 'https://troom.capgemini.com/sites/vcc/devon/overview.aspx',
        dataType: 'jsonp',
        method: 'GET',
        timeout: 2000,
        error: function (hrx, textStatus, error) {
            if (textStatus === 'parsererror') {
                //$('.cg_internal').show();
                //$('.extern').hide();
                /*$('[data-cap-href]').each(function () {
                    $(this).attr('href', $(this).data('cap-href'));
                });*/
                alert('reply');
            } else {
                //$('.extern').show();
                alert('timeout/error');
            }
        }
    });
}