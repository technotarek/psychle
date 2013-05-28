#psychle

A jquery-based carousel / slideshow that uses fx from the jquery cycle plugin.

## markup

    <div id="slideshow" class="carousel">
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

    $('#slideshow').slideshow({selector:'#slideshow',fx:'scrollLeft'});