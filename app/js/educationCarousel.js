let mySiema=null;
let resizeTimer;
SIEMA = {
    holder: document.getElementById('education'),
    // navHolder: document.getElementById('siemaNav'),
    prev:document.getElementById('prevEducation'),
    next:document.getElementById('nextEducation'),
    mySiema: null,
    bindAll: function(){
        SIEMA.holder = document.getElementById('education');
        SIEMA.prev.addEventListener('click', () => SIEMA.mySiema.prev());
        SIEMA.next.addEventListener('click', () => SIEMA.mySiema.next());
        $(window).on('resize', SIEMA.rebuildSiema);

    },
    loadSiemaSlider: function (selector) {

        SIEMA.mySiema = new Siema({
            loop: true,
            onInit: SIEMA.addPaginationSiemaSlider,
            onChange: SIEMA.getSiemaSliderIndex,
            selector: selector
        });

        SIEMA.mySiema.goTo = function(index) {

            this.currentSlide = Math.min(Math.max(index, 0),  this.innerElements.length - 1);
            this.slideToCurrent();
            SIEMA.getSiemaSliderIndex(index);

        };

    },
    addPaginationSiemaSlider: function () {

        const ulNav = document.createElement('ul');
        ulNav.className='siema-navDots';

        for (let i = 0; i < this.innerElements.length; i++) {
            let btn = document.createElement('li');
            btn.innerHTML= '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" preserveAspectRatio="none"><circle cx="8" cy="8" r="6.215"/></svg>';
            btn.dataset.slide = i;

            (i === 0) ? btn.className = "isActive" : false;

            btn.addEventListener('click', () => this.goTo(i));
            ulNav.appendChild(btn);

        }

        this.selector.appendChild(ulNav);

        // console.log('PaginationAdded')

    },
    getSiemaSliderIndex: function (index) {

        let currentSlide = (index === undefined) ? this.currentSlide : index;
        // $(SIEMA.holder).find('button').removeClass('isActive');
        $(SIEMA.holder).find('.siema-navDots li').removeClass('isActive');
        $(SIEMA.holder).find("[data-slide='" + currentSlide + "']").addClass('isActive');

        // console.log('getSiemaSliderIndex')

    },
    rebuildSiema: function () {

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {

            // Run code here, resizing has "stopped"
            if (SIEMA.mySiema)
            {
                SIEMA.destroySiema();
                SIEMA.loadSiemaSlider(SIEMA.holder);

            }

        }, 250);

    },
    destroySiema: function () {

        SIEMA.mySiema.destroy(true);

    }

};

/* WHEN DOCUMENT RDY
   ----------------------------- */
window.addEventListener("load", function () {SIEMA.bindAll()});