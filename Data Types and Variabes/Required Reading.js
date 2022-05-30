function reqReading(pages, pagesPerHour,days){
    let hours = pages/pagesPerHour;
    let hoursPerDay = hours/days;
    console.log(hoursPerDay);
}

reqReading(212,20,2)