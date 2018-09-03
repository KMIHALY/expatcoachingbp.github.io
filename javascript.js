'use strict'

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

function openImg(imgs) {
    $("#imgtext").text(imgs.alt);
    $("#expandedImg").attr("src", imgs.src);
    $(".expanding-image-container").css("display", "block");
}

$(document).ready(toggleBrand);
$(window).resize(toggleBrand);

function toggleBrand() {
    if ($(window).width() < 460) {
        $("#brand").hide();
    } else {
        $("#brand").show();
    }
};

// creating waypoints



const waypointIds = ['#home', '#about', '#coaches', '#services', '#survivalKits', '#events', '#contact'];

const listItemFinder = (waypointId) => {
    let waypointIdArray = waypointId.split("");
    waypointIdArray.splice(1, 0, "li-");
    let listItemIdString = waypointIdArray.join("");
    return listItemIdString;
};

let makeListItemHighlighted = (currentValue) => {
    waypointIds.map(
        (currentValue) => {
            // $(listItemFinder(currentValue)).css('color', '#f7e4bc');
            $(listItemFinder(currentValue)).css('color', '#d7c8a8');
        });
    $(listItemFinder(currentValue)).css('color', 'white');
}

$(String(waypointIds[0])).waypoint(
    () => { 
        makeListItemHighlighted(listItemFinder(waypointIds[0])); 
        document.getElementById("li-home").style.color = "white";
    },
{ offset: -1 }  
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


