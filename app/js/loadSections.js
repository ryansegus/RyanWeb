/* ----------------------------- */
// LOAD TEMPLATES INTO SECTIONS //
/* ---------------------------- */

/* ABOUT */
$.getJSON('json/about.json', function (data) {

    $('#aboutMe').html(Mustache.render("<h2>{{{aboutMeTitle}}}</h2><p>{{{description}}}</p>", data));

    typeTemplate = $('#aboutMeTypologyTmpl').html();
    typology = Mustache.to_html(typeTemplate, data);
    $('#typology').html(typology);

});

/* EDUCATION */
$.getJSON('json/education.json', function (data) {
    var template = $('#educationTmpl').html();
    var html = Mustache.to_html(template, data);
    $('#education').html(html);
});

/* EXPERIENCE */
$.getJSON('json/experience.json', function (data) {
    var template = $('#expTmpl').html();
    var html = Mustache.to_html(template, data);
    $(MY_OBJECT.CONTAINERS.page.querySelector('#experience')).html(html);
    // $('#experience').html(html);
});

/* INTERESTS */
$.getJSON('json/interests.json', function (data) {
    likes = $('#interestsLikesTmpl').html();
    likesText = Mustache.to_html(likes, data);
    $('#likes').html(likesText);

    dislikes = $('#interestsDisLikesTmpl').html();
    dislikesText = Mustache.to_html(dislikes, data);
    $('#dislikes').html(dislikesText);
});

/* FOOTER */
$.getJSON('json/footer.json', function (data) {

    /*$('#footer').html(Mustache.render("<h1>{{footerTitle}}</h1>", data));*/

    template = $('#footerTmpl').html();
    html = Mustache.to_html(template, data);
    $('#footer').html(html);
});