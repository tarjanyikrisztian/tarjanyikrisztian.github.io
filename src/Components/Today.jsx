function Today() {
    let day = new Date().getDay();
    if (day == 1) day = "monday";
    else if (day == 2) day = "tuesday";
    else if (day == 3) day = "wednesday";
    else if (day == 4) day = "thursday";
    else if (day == 5) day = "friday";
    else if (day == 6) day = "saturday";
    else day = "sunday";

    return (
        day
    )
}

export default Today