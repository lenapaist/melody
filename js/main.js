$(document).ready(function () {
    let currentFloor = 2;
    let counterUp = $(".counter-up");
    let counterDown = $(".counter-down");
    let floorPath = $(".home-image path");
    let modal = $(".modal");
    let modalCloseButton = $(".modal-close-button");
    let viewFlatsButton = $(".view-flats");
    let flatPath = $(".flats path");
    let flatLink = $(".flat-list li a");
    floorPath.on("mouseover", function () {
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });
    flatLink.on("mouseover", function () {
        flatPath.removeClass("current-flat");
        flatLink.removeClass("current-link");
        currentFlat = $(this).attr("data-link");
        $(`[data-flat=${currentFlat}]`).addClass("current-flat");
    });
    flatPath.on("mouseover", function () {
        flatLink.removeClass("current-link");
        flatPath.removeClass("current-flat");
        currentFlat = $(this).attr("data-flat");
        $(`[data-link=${currentFlat}]`).addClass("current-link");
    });
    flatLink.on("mouseout", function () {
        flatPath.removeClass("current-flat");
        flatLink.removeClass("current-link");
    });
    flatPath.on("mouseout", function () {
        flatPath.removeClass("current-flat");
        flatLink.removeClass("current-link");
    });
    //
    floorPath.on("click", toggleModal);

    floorPath.on("click", function () {
        floorPath.removeClass("current-floor");
        $(this).addClass("current-floor");
        currentFloor = $(this).attr("data-floor");
    });
    modalCloseButton.on("click", toggleModal);

    viewFlatsButton.on("click", toggleModal);

    counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
            });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
            });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
    function toggleModal() {
        modal.toggleClass("is-open");
    }
});
