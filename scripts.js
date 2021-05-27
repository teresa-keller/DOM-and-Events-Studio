window.addEventListener("load", function() {
    console.log('window loaded');


let takeoff = document.getElementById("takeoff");
let flightStatus = document.getElementById("flightStatus")
let shuttleBackground = document.getElementById("shuttleBackground");
let shuttleHeight = document.getElementById("spaceShuttleHeight");
let land = document.getElementById("landing");
let abortMission = document.getElementById("missionAbort");

    takeoff.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if(response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
        } else {
            window.alert("Ok then.");
        }
    });

    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });

    abortMission.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");

        if(response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        } else {
            window.alert("Ok then.");
        }
    });
});