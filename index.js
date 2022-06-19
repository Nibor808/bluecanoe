const fadeNode = (node, animation, time = "2s") => {
    node.css("animation", `${animation} ${time} ease`);
};

const pauseAnimation = (node) => {
    node.css("animation-play-state", "paused");
};

const startAnimation = (node) => {
    node.css("animation-play-state", "running");
};

const setBackgroundToText = (bubble, container, text) => {
    fadeNode(bubble, "fade-text-in", "5000ms");
    container.css("margin-top", "160px");
    bubble.text(text);
    bubble.css("background", "");
    bubble.css("height", "");
};

const setBackgroundToImg = (bubble, container, url) => {
    pauseAnimation(bubble);
    bubble.text("");
    bubble.css("transition", "width ease");
    bubble.css("width", "700px");
    container.css("margin-top", "100px");

    bubble.css("background", `url(${url}) no-repeat center`);
    bubble.css("height", "300px");
    fadeNode(bubble, "fade-image-in");
    startAnimation(bubble);
};

const pauseAllAnimations = (usBlock, animationContainer) => {
    usBlock.css("animation-play-state", "paused");
    animationContainer.css("animation-play-state", "paused");
};

const startAllAnimations = (usBlock, animationContainer) => {
    usBlock.css("animation-play-state", "running");
    animationContainer.css("animation-play-state", "running");
};

(() => {
    $(document).ready(() => {
        const text1 =
            "Hello! We're Jess and Robin and this is our blue canoe. During the pandemic in 2020 we decided to make more time for the out doors.";
        const text2 = "On our first trip we brought a lot of things we didn't need!";
        const text3 = "Eventually we started to figure it out.";
        const text4 = "Follow us on our outdoor adventures in Sountern Ontario's Kawartha Lakes.";

        const usBlock = $("#us");
        const animationContainer = $("#animation-container");
        const textContainer = $("#text-container");
        const textBubble = $("#text");

        usBlock.addClass("rotate"); // prevent any rotation on load by adding the class here
        animationContainer.addClass("slide-right-half");
        usBlock[0].scrollIntoView();

        const timeUnit = 5500;

        setTimeout(() => {
            pauseAllAnimations(usBlock, animationContainer);
            setBackgroundToText(textBubble, textContainer, text1);
        }, 0);

        setTimeout(() => {
            fadeNode(textBubble, "fade-text-out", "5500ms"); // add 500ms to cover next fade in
        }, timeUnit);

        setTimeout(() => setBackgroundToText(textBubble, textContainer, text2), timeUnit * 2);

        setTimeout(() => {
            startAllAnimations(usBlock, animationContainer);
            setBackgroundToImg(textBubble, textContainer, "./canoe.jpeg");
        }, timeUnit * 3);

        setTimeout(() => fadeNode(textBubble, "fade-image-out"), timeUnit * 3.8);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            setBackgroundToText(textBubble, textContainer, text3);
        }, timeUnit * 4);

        setTimeout(() => {
            animationContainer.removeClass("slide-right-half");
            animationContainer.addClass("slide-right-full");
            usBlock.css("animation-play-state", "running");
            animationContainer.css("animation-play-state", "running");
            setBackgroundToImg(textBubble, textContainer, "./canoe.jpeg"); // add second canoe image - better pack
        }, timeUnit * 4.5);

        setTimeout(() => {
            pauseAllAnimations(usBlock, animationContainer);
            setBackgroundToText(textBubble, textContainer, text4);
        }, timeUnit * 5.4);
    });
})();
