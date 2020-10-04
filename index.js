(() => {
    $(document).ready(() => {
        const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        const usBlock = $("#us");

        const textBubble1 = $("#text-bubble-1");
        const textBubble1Text = $("#text-1");

        const textBubble2 = $("#text-bubble-2");
        const textBubble2Text = $("#text-2");

        const textBubble3 = $("#text-bubble-3");
        const textBubble3Text = $("#text-3");

        const textBubble4 = $("#text-bubble-4");
        const textBubble4Text = $("#text-4");

        usBlock.addClass("slide-right");
        usBlock[0].scrollIntoView();

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
            textBubble2Text.text(lorem);
            textBubble3Text.text(lorem);
            textBubble4Text.text(lorem);
        }, 0);

        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
            textBubble1Text.css("animation-play-state", "running");
        }, timeUnit);

        setTimeout(() => {
            textBubble2Text.css("animation-play-state", "running");
        }, timeUnit * 2);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            usBlock.addClass("slide-up");
            usBlock.removeClass("slide-right");
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
            $("header")[0].scrollIntoView({
                behavior: "smooth"
            });
        }, timeUnit * 5);

        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
        }, timeUnit * 6);

        setTimeout(() => {
            textBubble4Text.css("animation-play-state", "running");
        }, timeUnit * 7);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
        }, (timeUnit * 8) + 500);
    });
})();