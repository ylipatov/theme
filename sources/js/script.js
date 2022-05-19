import Swiper from 'swiper/swiper-bundle';


/**
 * Gutenberg
 * is jQuery
 * @param obj
 * @returns {*}
 */
function isjQuery(obj) {
    return (obj instanceof jQuery) ? obj[0] : obj
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

(function ($) {


    /**
     * jQuery
     * Gutenberg block
     * Hero Module
     * @param $block
     */
    let initializeBlockHeroModule = ($block) => {

    }

    if (window.acf) {
        window.acf.addAction('render_block_preview/type=hero-module', initializeBlockHeroModule)
    } else {
        $('.hero-module').each(function () {
            initializeBlockHeroModule($(this))
        })
    }

})(jQuery)


/**
 * JavaScript ES6
 * Gutenberg block
 * Hero Module
 * @param block
 */
let initializeBlockHeroModule = (block) => {
    block = isjQuery(block)

}

if (window.acf) {
    window.acf.addAction('render_block_preview/type=hero-module', initializeBlockHeroModule)
} else {
    [...document.querySelectorAll('.hero-module')].forEach(initializeBlockHeroModule)
}


// ------------ Deleting placeholder focus ------------ //
[...document.querySelectorAll('input, textarea')].forEach(el => {
    if (el.getAttribute('placeholder') !== null) {
        el.addEventListener('focus', (elem) => {
            elem.target.setAttribute('data-placeholder', elem.target.getAttribute('placeholder'))
            elem.target.setAttribute('placeholder', '')
        })

        el.addEventListener('blur', (elem) => {
            elem.target.setAttribute('placeholder', elem.target.getAttribute('data-placeholder'))
        })
    }
})
// ---------- End Deleting placeholder focus ---------- //

