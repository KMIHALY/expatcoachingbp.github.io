'use strict'

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

function openImg(imgs) {
    $("#imgtext").text(imgs.alt);
    $("#expandedImg").attr("src", imgs.src);
    $(".expanding-image-container").css("display", "block");
}

function toggleBrand() {
    if ($(window).width() < 440) {
        $("#brand").hide();
    } else {
        $("#brand").show();
    }
};

$(document).ready(toggleBrand);
$(window).resize(toggleBrand);

// creating waypoints
// -css, osztályt rakni rá és venni le róla.
const waypointIds = ['#home', '#about', '#coaches', '#services', '#survivalKits', '#forOrganizations', '#events', '#contact'];

const listItemFinder = (waypointId) => {
    let waypointIdArray = waypointId.split("");
    waypointIdArray.splice(1, 0, "li-");
    let listItemIdString = waypointIdArray.join("");
    return listItemIdString;
};

let makeListItemHighlighted = (currentValue) => {
    waypointIds.map(
        (currentValue) => {
            $(listItemFinder(currentValue)).removeClass('orange-highlighting').addClass('grey-highlighting');
        }
    );
    $(listItemFinder(currentValue)).removeClass('grey-highlighting').addClass('orange-highlighting');
}

$(String(waypointIds[0])).waypoint(
    () => { 
        makeListItemHighlighted(listItemFinder(waypointIds[0])); 
    },
{ offset: -5 }  
);

waypointIds.map(
    (currentValue) => {
        $(currentValue).waypoint(
            () => { makeListItemHighlighted(currentValue); },
            { offset: -5 }
        )
    }
);

waypointIds.map(
    (currentValue) => {
        $(currentValue).waypoint(
            () => { makeListItemHighlighted(currentValue); },
            { offset: 60 }
        )
    }
);

waypointIds.map(
    (currentValue) => {
        $(currentValue).waypoint(
            () => { makeListItemHighlighted(currentValue); },
            { offset: 'bottom-in-view' }
        )
    }
);


