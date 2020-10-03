(() => {
    $(document).ready(() => {
        const usBlock = $("#us");
        const textPara1 = $(".text1");
        const textPara2 = $(".text2");
        const textPara3 = $(".text3");
        const textPara4 = $(".text4");

        usBlock.addClass("sliding-rotating");
        usBlock[0].scrollIntoView();

        const interval = setInterval(() => {
            const usBottom = usBlock.offset().top + 300;
            const windowHeight = $(window).innerHeight();

            if (usBottom < windowHeight) {
                usBlock[0].scrollIntoView();
            }
        }, 10);

        const horizontalTime = 11000;

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            textPara1.text("Testing....");
        }, 0);

        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
        }, 3000);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            usBlock.addClass("sliding");
            usBlock.removeClass("sliding-rotating");
        }, horizontalTime);

        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
        }, horizontalTime + 1000);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
            clearInterval(interval);
            $("header")[0].scrollIntoView({
                behavior: "smooth"
            });
            textPara1.text("");
        }, horizontalTime + 5000);


        setTimeout(() => {
            usBlock.css("animation-play-state", "running");
            usBlock.addClass("sliding-rotating");
            usBlock.removeClass("sliding");
        }, horizontalTime + 6000);

        setTimeout(() => {
            usBlock.css("animation-play-state", "paused");
        }, horizontalTime + 14000);
    });
})();