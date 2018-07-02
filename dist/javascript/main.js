$(document).ready(function() {
  $('insertHtml').each(function(i) {
    $(this).load($(this).attr('url'));
  });
});

function validate_network() {
  $.ajax({
    url: 'https://troom.capgemini.com/sites/vcc/devon/overview.aspx',
    dataType: 'jsonp',
    method: 'GET',
    timeout: 2000,
    error: function(hrx, textStatus, error) {
      if (textStatus === 'parsererror') {
        $('.c_internal').show();
        $('.c_external').hide();
        $('[data-cap-href]').each(function() {
          $(this).attr('href', $(this).data('cap-href'));
        });
      } else {
        $('.c_external').show();
      }
    },
  });
}
