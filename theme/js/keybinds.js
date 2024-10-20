(function smoothScrollWithJK() {
    let scrollStep = 10;     // Each small step during the scroll
    let scrollDistance = 200; // Total scroll distance when pressing j or k
    let isScrolling = false; // To track whether we're currently scrolling

    function smoothScrollBy(distance) {
        let scrolled = 0; // Track how much we've scrolled

        // Function to perform a single scroll step
        function step() {
            if (scrolled < Math.abs(distance)) {
                // Scroll a small step (positive or negative depending on direction)
                window.scrollBy(0, scrollStep * Math.sign(distance));
                scrolled += scrollStep;

                // Request the next animation frame
                requestAnimationFrame(step);
            } else {
                isScrolling = false; // Scrolling finished
            }
        }

        // Start scrolling
        requestAnimationFrame(step);
    }

    document.addEventListener('keydown', function(event) {
        // Make sure no modifier keys are pressed
        if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
            if (event.key === 'j' && !isScrolling) {
                event.preventDefault();
                isScrolling = true;
                smoothScrollBy(scrollDistance); // Scroll down
            } else if (event.key === 'k' && !isScrolling) {
                event.preventDefault();
                isScrolling = true;
                smoothScrollBy(-scrollDistance); // Scroll up
            }
        }
    });
})();

(function chapterNavigation() {
    document.addEventListener('keydown', function (e) {
        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) { return; }
        if (window.search && window.search.hasFocus()) { return; }

        switch (e.key) {
            case 'l':
                e.preventDefault();
                var nextButton = document.querySelector('.nav-chapters.next');
                if (nextButton) {
                    window.location.href = nextButton.href;
                }
                break;
            case 'h':
                e.preventDefault();
                var previousButton = document.querySelector('.nav-chapters.previous');
                if (previousButton) {
                    window.location.href = previousButton.href;
                }
                break;
        }
    });
})();
