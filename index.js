(() => {
    $(document).ready(() => {
        const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        const usBlock = $("#us");
        const textBubble1Text = $("#text-1");
        textBubble1Text.css("animation", "fade-text-out 10s ease forwards");

        const textBubble2Text = $("#text-2");
        textBubble2Text.css("animation", "fade-text-in-out 18s ease forwards");

        const textBubble3Text = $("#text-3");
        textBubble3Text.css("animation", "fade-text-in-out 18s ease forwards");

        const textBubble4Text = $("#text-4");
        textBubble4Text.css("animation", "fade-text-in 10s ease forwards");

        usBlock.addClass("slide-right");
        usBlock[0].scrollIntoView();

        const setBackgroundToCanoe = bubble => {
            bubble.css("animation-play-state", "paused");
            bubble.text("");
            bubble.css("background", "url(./canoe.jpeg) no-repeat center");
            bubble.css("height", "100%");
            bubble.css("animation", "fade-in-canoe 2s ease forwards");
            bubble.css("animation-play-state", "running");
        };

        const fadeCanoe = bubble => {
            bubble.css("animation", "fade-out-canoe 2s ease forwards");
        };

        const setBackgroundToText = bubble => {
            bubble.css("animation", "fade-text-in-out 18s ease forwards");
            bubble.css("animation-play-state", "");
            bubble.text(lorem);
            bubble.css("background", "");
            bubble.css("height", "");
        };

        const interval = setInterval(() => {
            const usBottom = usBlock.offset().top + 300;
            const windowHeight = $(window).innerHeight();

            if (usBottom < windowHeight) {
                usBlock[0].scrollIntoView();
            }
        }, 10);

        const timeUnit = 5000;

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            textBubble1Text.css("animation-play-state", "paused");
            textBubble2Text.css("animation-play-state", "paused");
            textBubble3Text.css("animation-play-state", "paused");
            textBubble4Text.css("animation-play-state", "paused");

            textBubble1Text.text(lorem);
            setBackgroundToCanoe(textBubble2Text);
            textBubble3Text.text(lorem);
            textBubble4Text.text(lorem);
        }, 0);

        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
            textBubble1Text.css("animation-play-state", "running");
        }, timeUnit);

        setTimeout(() => {
            textBubble2Text.css("animation-play-state", "running");
            fadeCanoe(textBubble2Text);
        }, timeUnit * 2);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            usBlock.addClass("slide-up");
            usBlock.removeClass("slide-right");
            setBackgroundToText(textBubble2Text);
        }, timeUnit * 3);

        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
        }, timeUnit * 4);

        setTimeout(() => {
            textBubble3Text.css("animation-play-state", "running");
        }, (timeUnit * 4) + 2000);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            usBlock.addClass("slide-left");
            usBlock.removeClass("slide-up");

            clearInterval(interval);
            window.scrollTo(0, 0);
        }, timeUnit * 5);

        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
        }, timeUnit * 6);

        setTimeout(() => {
            textBubble4Text.css("animation-play-state", "running");
        }, timeUnit * 7);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            setBackgroundToCanoe(textBubble3Text);
        }, (timeUnit * 8) + 500);
    });
})();