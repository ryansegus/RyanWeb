function getElById(id) {
    return document.getElementById(id);
}

function addEvent(el, type, handler) {

    if (el.attachEvent) el.attachEvent("on" + type, handler);
    else el.addEventListener(type, handler);

}

function removeEvent(el, type, handler) {

    if (el.detachEvent) el.detachEvent("on" + type, handler);
    else el.removeEventListener(type, handler);

}

function hasClass(el, className) {

    return el.classList ?
        el.classList.contains(className) :
        new RegExp("\\b" + className + "\\b").test(el.className);

}

function addClass(el, className) {

    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;

}

function removeClass(el, className) {

    if (el.classList) el.classList.remove(className);
    else
        el.className = el.className.replace(
            new RegExp("\\b" + className + "\\b", "g"),
            ""
        );

}

function loadJS(u) {

    var r = document.getElementsByTagName("script")[0],
        s = document.createElement("script");
    s.src = u;
    r.parentNode.insertBefore(s, r);

}

function toggle(el) {
    hasClass(el, 'is_hidden') ? removeClass(el, 'is_hidden') : addClass(el, 'is_hidden');
}

function toggleClassWithName(el, className) {

    hasClass(el, className) ? removeClass(el, className) : addClass(el, className);

}

function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}