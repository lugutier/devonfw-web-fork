$(document).ready(function () {
    loadInsertions();
    hideAndShowNetworkElements();
});


function loadInsertions() {
    $("insertHtml").each(function (i) {
        let url = $(this).attr("url");
        $(this).load(url.concat("/component.html"), function() {
            loadMarkdownInsertions();
            loadAsciidocInsertions();
        });
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: url.concat("/component.css")
        }).appendTo("head");
    });
}

function loadMarkdownInsertions() {
    var md = window.mdit;
    $("insertMd").each(function (i) {
        fetch($(this).attr("src"))
        .then(response => response.text())
        .then(text => $(this).empty().append(md.render(text)))
    });
}

function loadAsciidocInsertions() {
    var ad = window.ad;
    $("insertAd").each(function (i) {
        fetch($(this).attr("src"))
        .then(response => response.text())
        .then(text => $(this).empty().append(ad.convert(text)))
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