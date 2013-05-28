;(function($, undefined) {

    var settings;
    $.fn.slideshow  = function(options){
        return this.each(function(){
            settings = jQuery.extend({
                selector: '#slideshow',
                context: false,
                tabs: false,
                timeout: 6000,       // time before next slide appears (in ms)
                slideSpeed: 1000,   // time it takes to slide in each slide (in ms)
                tabSpeed: 300,      // time it takes to slide in each slide (in ms) when clicking through tabs
                fx: 'scrollLeft',   // the slide effect to use
            }, options);

            $slideshow = {

                instantiate: function(options){

                    // if statement used to stop Cycle plugin from terminating if selector doesn't exist on page
                    // useful for when you instantiate several slideshows that don't appear on every page

                        $.extend($slideshow,options);

                        this.init();
                },

                init: function() {

                        // set the context to help speed up selectors/improve performance
                        //this.context = $(selector);

                        // set tabs to current hard coded navigation items
                        this.tabs = $('ul.slides-nav li');

                        // remove hard coded navigation items from DOM
                        // because they aren't hooked up to jQuery cycle
                        this.tabs.remove();

                        // prepare slideshow and jQuery cycle tabs
                        this.prepareSlideshow();
                },

                prepareSlideshow: function(context,tabs) {
                    // initialise the jquery cycle plugin -
                    // for information on the options set below go to:
                    // http://malsup.com/jquery/cycle/options.html
                    $('div.slides > ul').cycle({
                        fx: $slideshow.fx,
                        timeout: $slideshow.timeout,
                        speed: $slideshow.slideSpeed,
                        fastOnEvent: $slideshow.tabSpeed,
                        pager: $('ul.slides-nav'),
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


            $(function() {
                // add a 'js' class to the body
                $('body').addClass('js');

                 $slideshow.instantiate(settings);

            });

        });

    }

})(jQuery);