console.log('Hi!!!!!!');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function success(position) {
    const { latitude, longitude } = position.coords; // Destructure latitude and longitude
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

function error(err) {
    console.error(`Error Code: ${err.code} - ${err.message}`);
    switch (err.code) {
        case err.PERMISSION_DENIED:
            alert("User  denied the request for Geolocation.");
            break;
        case err.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case err.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case err.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

// Call the function to get the location
getLocation();