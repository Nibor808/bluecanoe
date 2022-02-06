(() => {
    $(document).ready(() => {
        const firstText =
            "Hello! We're Jess and Robin and this is our blue canoe. During the pandemic in 2020 we decided to make more time for the out doors.";

        const usBlock = $("#us");
        const us2 = document.querySelector("#us");
        const animationContainer = $("#animation-container");
        const textContainer = $("#text-container");

        const textBubble = $("#text");
        textBubble.css("animation", "fade-text-out 10s ease forwards");

        usBlock.addClass("rotate");
        animationContainer.addClass("slide-right");
        usBlock[0].scrollIntoView();

        const setBackgroundToImg = (bubble, url) => {
            bubble.css("animation-play-state", "paused");
            bubble.text("");
            bubble.css("transition", "width ease");
            bubble.css("width", "700px");
            textContainer.css("margin-top", "100px");

            bubble.css("background", `url(${url}) no-repeat center`);
            bubble.css("height", "300px");
            bubble.css("animation", "fade-in-image 2s ease forwards");
            bubble.css("animation-play-state", "running");
        };

        // const fadeImg = (bubble, animation) => {
        //     bubble.css("animation", `${animation} 2s ease forwards`);
        // };

        const setBackgroundToText = (bubble, text) => {
            bubble.css("animation", "fade-text-in 5s ease forwards");
            bubble.css("animation-play-state", "");
            textContainer.css("margin-top", "160px");
            bubble.text(text);
            bubble.css("background", "");
            bubble.css("height", "");
        };

        // const interval = setInterval(() => {
        //     const us = us2.getBoundingClientRect();
        //     const windowWidth = $(window).innerWidth();

        //     if (us.right > windowWidth) {
        //         usBlock[0].scrollIntoView();
        //     }
        // }, 10);

        const timeUnit = 5000;

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            animationContainer.css("animation-play-state", "paused");
            setBackgroundToText(textBubble, firstText);
        }, 0);

        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
            animationContainer.css("animation-play-state", "running");
            setBackgroundToImg(textBubble, "./canoe.jpeg");
        }, timeUnit);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
        }, timeUnit * 2);

        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
            animationContainer.css("animation-play-state", "running");
        }, timeUnit);
    });
})();
