#Psychle

A jquery-based carousel / slideshow that uses effects from the [jQuery Cycle plugin](http://jquery.malsup.com/cycle/). The plugin is based on code developed by [Jenna Smith](http://net.tutsplus.com/author/jennasmith/) published on [Nettuts](http://net.tutsplus.com/tutorials/javascript-ajax/building-an-auto-scrolling-slideshow-that-works-with-and-without-javascript/).

######Why another carousel plugin?
If you look at the J. Smith/Nettuts source that inspired me, you'll see that the code dates back to 2009. While it seems like a new carousel plugin is released every day, I've found the markup behind this one to be among the simplest and most flexible.

And now that it's available in a plugin format, it's even easier to use. Whereas the original Nettuts code required altering the source to change options, several options can now be specified in a conventional plugin manner. In particular, you can easily specify any of the available transtion effects offered by the jQuery Cycle plugin. Plus, the plugin allows multiple unique instances of a carsousel on a single page, which was not possible with the original version.

##Demo

[Simple Working Demo](http://www.technotarek.com/psychle/demo.html).

It's up to you to customize it! I've used it on a ton of projects including [Bold Approach](http://www.boldapproach.org), [Charles Lewis](http://www.charles-lewis.com), [ReadyNation](http://readynation.org) and many others.

##Usage

Call jQuery, the jQuery Cycle plugin, and then psychle.js. Also reference the included CSS or similar. See below for the proper markup structure and instantiation.

##Markup

Wrap your markup in an element with a unique ID. Present the individual slides as part of an unordered list with each item/slide as an LI element. Wrap the slides inside of a div with a class of 'slides'. If needed, wrap the navigation in another unordred list with a class of 'slides-nav'.

If you run into problems that you suspect are markup related, I recommend checking out the original Nettuts post referenced above.


    <div id="my-slideshow" class="carousel">
        <div class="slides">
            <ul>
                <li>
                    <h2>Slide one</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec pretium arcu non velit. Phasellus adipiscing auctor
                        lorem. Curabitur in urna ut purus consequat sollicitudin.
                        Phasellus ut diam. Cras magna libero, tempor id, venenatis
                        sit amet, venenatis et, dui.
                    </p>
                </li>
                <li>
                    <h2>Slide two</h2>
                    <p>
                        Nam ac nibh sit amet augue ultricies sagittis. Donec sit
                        amet nunc. Vivamus lacinia, nisi ac tincidunt commodo, purus
                        nisi condimentum urna, sit amet molestie odio dolor non lectus.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </p>
                </li>
                <li>
                    <h2>Slide three</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse adipiscing dui a nibh. Integer tristique lorem
                        vitae massa. Etiam dapibus, eros sit amet euismod semper,
                        felis erat congue lacus, sed aliquam metus libero sed elit.
                    </p>
                </li>
            </ul>
        </div>
        <ul class="slides-nav">
            <li><a href="#">Slide one</a></li>
            <li><a href="#">Slide two</a></li>
            <li><a href="#">Slide three</a></li>
        </ul>
    </div>

##Instantiate

Instantiate as many times as needed on elements with unique IDs.

    $('#my-slideshow').psychle();
    $('#my-other-slideshow').psychle();

## Options

Set options on a instance by instance basis, or or specify no options and use the defaults.

#### Effects (fx) Options

Use any of the effects from the jQuery Cycle plugin. See [http://jquery.malsup.com/cycle/browser.html](http://jquery.malsup.com/cycle/browser.html).

    $('#my-slideshow').psychle(
        {
            fx: 'toss'
        }
    );

#### Other Options

Specify any of these additional options. The values below represent the plugins defaults.

    $('#my-slideshow').psychle(
        {
            timeout: 6000,       // time before next slide appears (in ms), set to 0 to disable auto sliding
            slideSpeed: 1000,   // time it takes to slide in each slide (in ms)
            tabSpeed: 300,      // time it takes to slide in each slide (in ms) when clicking through tabs
            fx: 'scrollLeft'    // transition effect from jquery cycle plugin
        }
    );
