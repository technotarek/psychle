/*
* Psychle.js
* @version      1.0
* @copyright    Tarek Anandan (http://www.technotarek.com)
*/
;(function($, undefined) {

    $.fn.slideshow  = function(options){
        return this.each(function(){

            var element = '#'+$(this).attr('id');

            var settings = jQuery.extend({
                selector: element,
                timeout: 6000,       // time before next slide appears (in ms)
                slideSpeed: 1000,   // time it takes to slide in each slide (in ms)
                tabSpeed: 300,      // time it takes to slide in each slide (in ms) when clicking through tabs
                fx: 'scrollLeft',   // the slide effect to use
            }, options);

            $(function() {
                // add a 'js' class to the body
                $('body').addClass('js');
                $.extend($slideshow,settings);
                $slideshow.init(settings);
            });

            $slideshow = {

                init: function(settings) {

                    // set tabs to current hard coded navigation items
                    this.tabs = $(settings.selector+' ul.slides-nav li');

                    // remove hard coded navigation items from DOM
                    // because they aren't hooked up to jQuery cycle
                    this.tabs.remove();

                    // prepare slideshow and jQuery cycle tabs
                    this.prepareSlideshow(settings);

                },

                prepareSlideshow: function(settings,tabs) {

                    // initialise the jquery cycle plugin -
                    // for information on the options set below go to:
                    // http://malsup.com/jquery/cycle/options.html
                    $(settings.selector+' div.slides > ul').cycle({
                        fx: $slideshow.fx,
                        timeout: $slideshow.timeout,
                        speed: $slideshow.slideSpeed,
                        fastOnEvent: $slideshow.tabSpeed,
                        pager: $(settings.selector+' ul.slides-nav'),
                        pagerAnchorBuilder: $slideshow.prepareTabs,
                        before: $slideshow.activateTab,
                        pauseOnPagerHover: true,
                        pause: true
                    });
                },

                prepareTabs: function(i, slide) {
                    // return markup from hardcoded tabs for use as jQuery cycle tabs
                    // (attaches necessary jQuery cycle events to tabs)
                    return $slideshow.tabs.eq(i);
                },

                activateTab: function(currentSlide, nextSlide) {
                    // get the active tab
                    var activeTab = $('a[href="#' + nextSlide.id + '"]');

                    // if there is an active tab
                    if(activeTab.length) {
                        // remove active styling from all other tabs
                        $slideshow.tabs.removeClass('on');

                        // add active styling to active button
                        activeTab.parent().addClass('on');
                    }
                }
            };

        });

    };

})(jQuery);