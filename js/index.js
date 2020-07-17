mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaXNoZWtiYWRoYW45OSIsImEiOiJja2NraWp0YzMxdnNqMnhtMnowemkwdWExIn0.wU0XKDZLRal-pPzlYEMmqw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-118.38354, 34.054929], // starting position
    zoom: 12 // starting zoom
});

displays(1000)

// POPING OVER WITH THE ADDRESSES

function clicking_class(address_id) {
    displays(address_id)
}


function displays(address_id) {
    sto = ""
    str = ""
    for (i = 0; i < stores.length; i++) {
        sto1 = stores[i].coordinates.longitude
        sto2 = stores[i].coordinates.latitude


        // ADDIGN POPUPS
        var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div class='box'>
            <div class='box1'>
                <div class='box1a' >${stores[i].addressLines[0]}</div>
                <div class='box1b' >${stores[i].openStatusText}</div>
            </div>
            <div class = 'box2'>
                <div class='box2a'>
                    <div class='box2a1'><i class="fas fa-location-arrow"></i></div>
                    <div class='box2a2'>${stores[i].addressLines[1]}</div>
                </div>
                <div class='box2b'>
                    <div class='box2b1'><i class="fas fa-phone-alt"></i></div>
                    <div class='box2b2'>${stores[i].phoneNumber}</div>
                </div>
            </div>
        </div>`

        );




        if (i == address_id) {
            marker.remove()
            color = 'green'
        } else {
            color = 'orange'
        }
        marker = new mapboxgl.Marker({ color: color })
            .setLngLat([sto1, sto2])
            .setPopup(popup)
            .addTo(map);



        // ADDING ADDRESSES
        address = stores[i]['addressLines'][0]
        number = stores[i]['phoneNumber']
        str += `
        <div class="stores-address" id = ${i} onclick="clicking_class(id)" >
        ${address}
        <div class="stores-phone-number">
            <i class="fas fa-phone-alt"></i>${number}
            <span style=' padding:10px; border-radius:50%; background-color:green'>${i +1}</span>
        </div>
    </div>
    <hr>`
    }

    document.querySelector('.stores').innerHTML = str
}

map.addControl(new mapboxgl.NavigationControl());