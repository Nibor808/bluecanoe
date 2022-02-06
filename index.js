(() => {
    $(document).ready(() => {
        const textBubble1Text =
            "Hello! We're Jess and Robin and this is our blue canoe. During the pandemic in 2020 we decided to make more time for the out doors.";

        const usBlock = $("#us");
        const us2 = document.querySelector("#us");
        const animationContainer = $("#animation-container");
        const textContainer = $("#text-container");

        console.log("====> TEST");

        const textBubble = $("#text");
        textBubble.css("animation", "fade-text-out 10s ease forwards");

        usBlock.addClass("rotateUs");
        animationContainer.addClass("slide-right-1");
        usBlock[0].scrollIntoView();

        const setBackgroundToImg = (bubble, url) => {
            bubble.css("animation-play-state", "paused");
            bubble.text("");
            bubble.css("transition", "width ease");
            bubble.css("width", "700px");
            textContainer.css("margin-top", "100px");

            bubble.css("background", `url(${url}) no-repeat center`);
            bubble.css("height", "300px");
            bubble.css("animation", "fade-in-canoe 2s ease forwards");
            bubble.css("animation-play-state", "running");
        };

        const fadeImg = (bubble, animation) => {
            bubble.css("animation", `${animation} 2s ease forwards`);
        };

        const setBackgroundToText = (bubble) => {
            bubble.css("animation", "fade-text-in 5s ease forwards");
            bubble.css("animation-play-state", "");
            textContainer.css("margin-top", "160px");
            bubble.text(textBubble1Text);
            bubble.css("background", "");
            bubble.css("height", "");
        };

        const interval = setInterval(() => {
            const us = us2.getBoundingClientRect();
            const windowWidth = $(window).innerWidth();

            if (us.right > windowWidth) {
                usBlock[0].scrollIntoView();
            }
        }, 10);

        const timeUnit = 5000;

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            animationContainer.css("animation-play-state", "paused");
            setBackgroundToText(textBubble);

            // textBubble1Text.text(lorem);
            // setBackgroundToImg(textBubble2Text, "./canoe.jpeg");
            // textBubble3Text.text(lorem);
            // textBubble4Text.text(lorem);
        }, 0);

        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
            animationContainer.css("animation-play-state", "running");
            setBackgroundToImg(textBubble, "./canoe.jpeg");
            //textBubble1Text.css("animation-play-state", "running");
        }, timeUnit);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            // usBlock.addClass("slide-left");
            // usBlock.removeClass("slide-up");
            //
            // clearInterval(interval);
            // window.scrollTo(0, 0);
        }, timeUnit * 2);

        setTimeout(() => {
            // animationContainer.removeClass("slide-right-1");
            // animationContainer.addClass("slide-right-2");
            usBlock.css("animation-play-state", "running");
            animationContainer.css("animation-play-state", "running");
            //textBubble1Text.css("animation-play-state", "running");
        }, timeUnit);
    });
})();
