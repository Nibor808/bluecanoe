(() => {
    $(document).ready(() => {
        const usBlock = document.getElementById("us");

        const interval = setInterval(() => {
            const usBottom = $(usBlock).offset().top + 100;
            const windowHeight = $(window).innerHeight();

            if (usBottom > windowHeight) {
                usBlock.scrollIntoView();
            }
        }, 10);

        setTimeout(() => {
            $(usBlock).css("animation-play-state", "paused");
        }, 7800);

        setTimeout(() => {
            $(usBlock).css("animation-play-state", "running");
        }, 12000);

        setTimeout(() => {
            $(usBlock).css("animation-play-state", "paused");
            clearInterval(interval);
        }, 20000);

        setTimeout(() => {
            $(usBlock).css("animation-play-state", "running");
        }, 24000);
    });
})();