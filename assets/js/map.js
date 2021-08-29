// Creates a mock-up map for the home screen.
function initMap() {
    // The location of the club
    const clubAddress = { lat: -20.2841909, lng: -40.302713 };

    // Centers the map at the club
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: clubAddress,
    });

    // Makes a marker at the club's position
    const marker = new google.maps.Marker({
        position: clubAddress,
        map: map,
    });
}