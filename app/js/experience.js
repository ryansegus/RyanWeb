window.addEventListener("load", function () {

    /* ------------------------- */
    // BIND CLICK TO EXPERIENCE //
    /* ------------------------ */

    // VARS
    const experienceHolder = MY_OBJECT.CONTAINERS.page.querySelector('#experience');
    const toggleExperienceButtons = experienceHolder.getElementsByClassName('js-experienceButton');

    Array.from(toggleExperienceButtons).forEach(link => {
        link.addEventListener('click', function (event) {

            event.preventDefault();

            // VARS
            const currentTitle = this.parentNode;
            const currentDefinition = this.parentNode.nextElementSibling;

            // SHOW/HIDE EXPERIENCE LISTS
            toggleClassWithName(this, 'isOpen');
            toggleClassWithName(currentTitle, 'isOpen');
            toggleClassWithName(currentDefinition, 'isOpen');

            addClass(this, "state")

        });
    });
});