const portafoglio = [
    ['img-01.jpg', 'Grupo Menosesmas', 'Logotipo', 'Nel corso del tempo abbiamo migliorato i nostri gusti e finalmente è arrivato all&#39;immagine che riassume l&#39;essenza della nostra azienda.'],
    ['img-02.jpg', 'Natalia Marcano', 'identidad', 'Un design minimalista di biglietti personali, il cui dado fa l&#39;impatto dei clienti di questo grande architetto.'],
    ['img-03.jpg', 'PDVSA FPO', 'diagramacion', 'Progettazione di una doppia pagina del libro per il FPO, ha una serie di infographics disposti in modo elegante più il sondaggio 3d in base alla densità di popolazione della zona.'],
    ['img-04.jpg', 'Grupo Menosesmas', 'website', 'Creazione del sito web della nostra azienda, elaborata in HTML5, CSS3 e JQuery tra gli altri, creata con uno stile moderno e adattabile alle diverse dimensioni dei monitor.'],
    ['img-05.jpg', 'Ryan Serrano', 'Logotipo', 'Nella ricerca di una nuova immagine che rappresenterà la mia carriera, sono riuscito a creare questo logo moderno che mi distingue come un programmatore web che capisce l&#39;importanza di utilizzare le parentesi.'],
    ['img-06.jpg', 'Priority Black', 'website', 'Questa applicazione è sviluppata con PHP e linguaggio Ajax, il livello di stile è definito dai codici HTML e CSS3. È un lavoro in corso che finisco e che avrà uno stile minimalista e moderno all&#39;interno delle tecnologie web..'],
    ['img-07.jpg', 'Suministros ErgoGlobal', 'website', 'Sviluppo di siti Web (pagina di destinazione www.ergoglobal.com) per il cliente “Suministros ErgoGlobal, C.A.”, il frontend è stato sviluppato utilizzando HTML5 e CSS3 lingua, allo stesso modo, ha generato tutto il codice CSS attraverso preprocessore SASS.'],
    ['img-08.jpg', 'Morett Services AC', 'website', 'Sviluppo di siti Web (pagina di destinazione www.morettservicesac.com) per il cliente “Morett Services AC”, il frontend è stato sviluppato utilizzando HTML5 e CSS3 lingua, allo stesso modo, ha generato tutto il codice CSS attraverso preprocessore SASS. Animazione banner di scorrimento e principale sono stati sviluppati con JQuery. Contattare la mappa è stata generata con l’applicazione di Google Maps API V3.'],
    ['logo_ryan_2017.jpg', 'Ryan Serrano', 'logotipo', 'Versione attuale del logo personale, mantenendo il concetto della versione precedente ho ridotto gli elementi per una presentazione più minimalista.'],
    ['tei-post.jpg', 'Tu Enlace Inmobiliario', 'Post reti sociali', 'Immagine presa per promuovere l&#39;immagine aziendale dell&#39;azienda in Instagram e in altre reti sociali.']
];

/* --------------------- */
// SHOW OVERLAY FUNCTION //
/* --------------------- */

function showOverlay() {
    const el = getElementById('overlay');

    el.style.opacity = "1";
    el.style.filter = 'alpha(opacity=100)';
    el.style.visibility = 'visible';
    p = document.createElement('p');
    p.textContent = 'Poiché CSS GRID non animerà gli elementi, nascondiamo solo la bruttezza.';
    el.appendChild(p);
    setTimeout(function () {
        el.style.opacity = "0";
        el.style.filter = 'alpha(opacity=0)';

        setTimeout(function () {
            el.removeChild(p);
            el.style.visibility = 'hidden';
            el.removeAttribute('style');
        }, 100);

    }, 2400);

}

/* ---------------------- */
// BUILD GALLERY FUNCTION //
/* ---------------------- */
function buildGallery(array) {

    galleryContainer = document.getElementById('gallery');

    for (var i = 0; i < array.length; i++) {
        slide = document.createElement("div");
        figure = slide.appendChild(document.createElement('figure'));
        figure.innerHTML = '<div class="closeModal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><style>.a{fill:#FFF;}</style><path d="M26 0C11.7 0 0 11.7 0 26s11.7 26 26 26 26-11.7 26-26S40.3 0 26 0zM26 50C12.8 50 2 39.2 2 26S12.8 2 26 2s24 10.8 24 24S39.2 50 26 50z" class="a"/><path d="M35.7 16.3c-0.4-0.4-1-0.4-1.4 0L26 24.6l-8.3-8.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4L24.6 26l-8.3 8.3c-0.4 0.4-0.4 1 0 1.4C16.5 35.9 16.7 36 17 36s0.5-0.1 0.7-0.3L26 27.4l8.3 8.3C34.5 35.9 34.7 36 35 36s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L27.4 26l8.3-8.3C36.1 17.3 36.1 16.7 35.7 16.3z" class="a"/></svg></div><img src="img/portfolio/mini/' + array[i][0] + '" alt = "Not Available" data-src= "img/portfolio/thumbs/' + array[i][0] + '" class="lazyload blur">';

        figcaption = figure.appendChild(document.createElement('figcaption'));
        figcaption.innerHTML = '<div class="openModal" data-id=' + i + '><div>' + array[i][2] + '</div><div></div><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70"><path d="M69.5 63.3l-9.5-9.5c3.8-5.4 6.1-12 6.1-19.1 0-18.2-14.8-33.1-33.1-33.1S0 16.5 0 34.8C0 53 14.8 67.8 33.1 67.8c9.7 0 18.4-4.2 24.5-10.8l9.2 9.2L69.5 63.3zM33.1 63.8C17 63.8 4 50.8 4 34.8 4 18.7 17 5.7 33.1 5.7s29.1 13 29.1 29.1C62.1 50.8 49.1 63.8 33.1 63.8zM35.1 32.8h13v4H35.1v13.1h-4V36.8H18v-4H31.1V19.7h4V32.8z" fill="#FFF"/></svg></div></div>';
        galleryContainer.appendChild(slide);
    }

}



/* -------------------- */
// PRELOAD IMAGES //
/* -------------------- */
$.preloadImages = function () {
    for (let i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
    }
};

/* PADDING TOP ON GALLERY */
let galleryTop = 0;

function checkWidth() {

    (window.matchMedia("(orientation: portrait)").matches) ? galleryTop = 60 : galleryTop = 0 ;
}

/* WHEN DOCUMENT RDY */
$(function () {

    // CREATE GALLERY
    buildGallery(portafoglio);

    /* CHECK FOR RESPONSIVE IMAGES PORTRAIT/LANDSCAPE */
    /*var orientation = 'lanscape';

    function checkOrientation() {
        if (window.matchMedia("(orientation: portrait)").matches) {
            orientation = 'portrait';
        } else {
            orientation = 'lanscape';
        }
        return orientation;
    }*/


    checkWidth();

    if (window.attachEvent) {
        window.attachEvent('onresize', function () {
            checkWidth();
        });
    } else if (window.addEventListener) {
        window.addEventListener('resize', function () {
            checkWidth();
        }, true);
    } else {
        //The browser does not support Javascript event binding
    }

    // SHOW PROJECT DETAILS
    $('.openModal').click(function (e) {
        e.preventDefault();
        $('#gallery').children('div').removeClass('active');
        $('#gallery').children('.projectDesc').slideUp(300, function () {
            this.remove();
        });

        id = $(this).attr('data-id');
        item = $(this).parent().parent().parent();

        item.addClass('active');
        item.after("<div class='projectDesc'><h3>" + portafoglio[id][2] + "</h3><p>" + portafoglio[id][3] + "</p></div>");

        setTimeout(function () {

            $('html, body').animate({
                scrollTop: $(item).offset().top - ((window.matchMedia("(orientation: portrait)").matches) ? 60 : 0)
            }, 600);

        }, 1200);

        setTimeout(function () {
            $('.projectDesc').slideDown(300);
        }, 1800);

    });

    // HIDE PROJECT DETAILS
    $('.closeModal').click(function () {
        $('#gallery').children('div').removeClass('active');
        $('#gallery').children('.projectDesc').slideUp(300, function () {
            this.remove();
        })
    });

    $.preloadImages("img/portfolio/img-01.jpg", "img/portfolio/img-02.jpg", "img/portfolio/img-03.jpg", "img/portfolio/img-04.jpg", "img/portfolio/img-05.jpg", "img/portfolio/img-06.jpg", "img/portfolio/img-07.jpg", "img/portfolio/img-08.jpg", "img/portfolio/logo_ryan_2017.jpg", "img/portfolio/tei-post.jpg");

    if (!window.HTMLPictureElement || !('sizes' in document.createElement('img'))) {
        loadJS("ls.respimg.min.js");
    }

    //    var a = document.querySelector('.blur-image');
    var grid = document.querySelector(".grid");
    var infoBtn = getElementById("btnInfographics");
    var infoDiv = getElementById("infographics");
    var footer = $('footer');

    btn = document.querySelector("header #togglePage");
    addEvent(btn, "click", function () {

        $(MY_OBJECT.CONTAINERS.page, infoBtn, MY_OBJECT.CONTAINERS.infoGraphics, footer).removeAttr('style');
        showOverlay();
        setTimeout(function () {
            if (!hasClass(grid, "IsActive")) {
                removeClass(MY_OBJECT.CONTAINERS.infoGraphics, "IsActive");
                addClass(grid, "IsActive");
                btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60"><title>Off</title><path d="M42 12H18C8.1 12 0 20.1 0 30s8.1 18 18 18h24c9.9 0 18-8.1 18-18S51.9 12 42 12zM18 38c0 0.6-0.4 1-1 1s-1-0.4-1-1V22c0-0.6 0.4-1 1-1s1 0.4 1 1V38zM42 43c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13S49.2 43 42 43z" /></svg>';
                // LOAD SIEMA EDUCATION
                SIEMA.loadSiemaSlider(SIEMA.holder);
            } else {
                // console.log('destroying');
                SIEMA.destroySiema();
                SIEMA.mySiema=null;
                removeClass(MY_OBJECT.CONTAINERS.infoGraphics, "IsActive");
                removeClass(grid, "IsActive");
                btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60"><title>On</title><path d="M42 12H18C8.1 12 0 20.1 0 30s8.1 18 18 18h24c9.9 0 18-8.1 18-18S51.9 12 42 12zM18 43c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13S25.2 43 18 43zM49.7 26.7l-8 8C41.5 34.9 41.3 35 41 35s-0.5-0.1-0.7-0.3l-4-4c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.4 0L41 32.6l7.3-7.3c0.4-0.4 1-0.4 1.4 0S50.1 26.3 49.7 26.7z" /></svg>';
            }

        }, 1800);


    });

    /* SHOW INFOGRAPHICS ON WIDE SCREENS */

    addEvent(infoBtn, "click", function () {

        this.style.pointerEvents = 'none';

        if (!hasClass(MY_OBJECT.CONTAINERS.infoGraphics, "IsActive")) {

            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            setTimeout(function () {
                addClass(MY_OBJECT.CONTAINERS.infoGraphics, "IsActive");
            }, 300);

            setTimeout(function () {
                $(MY_OBJECT.CONTAINERS.page, footer).slideUp(200);
                $(infoBtn).removeAttr('style');
            }, 600);

        } else {

            this.style.pointerEvents = 'none';
            $(MY_OBJECT.CONTAINERS.page, footer).slideDown(200);

            setTimeout(function () {
                removeClass(MY_OBJECT.CONTAINERS.infoGraphics, "IsActive");
                $(infoBtn).removeAttr('style');
                //                window.scroll({
                //                    top: 0,
                //                    behavior: 'smooth'
                //                });
            }, 300);
        }

    });

    if (window.attachEvent) {
        window.attachEvent('onresize', function () {

            if (window.matchMedia("(max-width: 1024px)").matches && hasClass(MY_OBJECT.CONTAINERS.infoGraphics, "IsActive")) {

                // console.log(' + 1024px onresize');
                $(MY_OBJECT.CONTAINERS.page, footer).css('display', 'block');
                removeClass(MY_OBJECT.CONTAINERS.infoGraphics, "IsActive");
            } else {
                // console.log(' - 1024px onresize');

            }
        });
    } else if (window.addEventListener) {
        window.addEventListener('resize', function () {
            if (window.matchMedia("(max-width: 1024px)").matches && hasClass(MY_OBJECT.CONTAINERS.infoGraphics, "IsActive")) {

                // console.log(' + 1024px resize');
                $(MY_OBJECT.CONTAINERS.page, footer).css('display', 'block');
                removeClass(MY_OBJECT.CONTAINERS.infoGraphics, "IsActive");
            } else {
                // console.log(' - 1024px resize');

            }
        }, true);
    } else {
        //The browser does not support Javascript event binding
    }
});

/* ------------------ */
// WHEN DOCUMENT RDY //
/* ------------------ */
window.addEventListener("load", function () {

    /* --------------------------- */
    // LOAD TYPEWRITTER AT HEADER //
    /* -------------------------- */

    window.ityped.init(MY_OBJECT.CONTAINERS.sono, {
        strings: ['Ryan Serrano', 'creativo', 'progettista', 'sviluppatore', 'sognatore'],
        loop: true
    });

});