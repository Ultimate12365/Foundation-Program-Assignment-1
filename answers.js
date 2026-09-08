//Question No. 1

function describeValue(val) {
    if (val) {
        let s = `${typeof (val)} | truthy`;
        return s;
    }
    else {
        let m = `${typeof (val)} | falsy`;
        return m;
    }
}

//Question No. 2

function getDayType(day) {
    day = day.toLowerCase();
    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
            return "Working Day";
        case "monday":
            return "Working Day";
        case "tuesday":
            return "Working Day";
        case "wednesday":
            return "Working Day";
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}


//Question No. 3


function validateUsername(name) {
    name = name.toLowerCase();
    if (name.length < 4) {
        return "Too Short";
    }
    else if (name.includes(" ")) {
        return "No Space Allowed";
    }
    else if (name.includes("admin")) {
        return "Reserved Word";
    }
    else {
        return "Available";
    }
}


//Question No. 4

function getCngFare(distance, isNight=false, waitingMinutes=0){
    let fare=0;
if(distance<=2){
    fare=50;
}
else{
fare = 50+((distance-2)*15)+(waitingMinutes*2);
}

if(isNight){
    fare+=fare*0.2;
}
return fare;

}


//Question No. 5

const getChaseVerdict = (target, scored, ballsLeft) => { 
    let runsNeeded = target - scored;
    if(runsNeeded<=0) return "Won";
    else{
        if(ballsLeft<=0) return "lost";
        else{
            requiredRate = (runsNeeded / ballsLeft) * 6;
        }
    }

    let verdict="";
    if(requiredRate<=6){
        verdict = "Comfortable";
    }
    else if(requiredRate>6 && requiredRate<=12){
        verdict = "Tough";
    }
    else{
        verdict ="Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`
 };