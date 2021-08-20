$(document).ready(function () {
    let currentFloor = 2;
    let counterUp = $(".counter-up");
    let counterDown = $(".counter-down");
    let floorPath = $(".home-image path");
    let modal = $(".modal");
    let modalCloseButton = $(".modal-close-button");
    let viewFlatsButton = $(".view-flats");
    floorPath.on("mouseover", function () {
        // убрала удаление класса активного этажа при наведении
        //floorPath.removeClass(".current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });
    // добавила слушатель на событие клика по этажу и тогда удаляет предыдущий этаж и выделяет активный
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
