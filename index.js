
function initMap() {
    let center = {lat: 21.1458, lng: 79.0882};
    let locations = [
      ['Hotel Vedanta', 21.154795, 79.086535],
      ['Hotel Heritage', 21.15631403976745, 79.07774869570609],
      ['Hotel Sukhakarta',21.11784909174533, 79.07108853615539],
      ['Hotel Woodlands', 21.15360876656047, 79.09874897719226],
      ['Hotel Rahul Deluxe',21.141026751844255, 79.09476314124896],
      ['Hotel Hardeo',21.142202626123115, 79.08583958794112],
      ['Hotel Dwarkamai',21.14183972178074, 79.09571286325108],
      ['Hotel Grey Oak',21.139072546942014, 79.09469148994316],
      ['Nagpur Hotel',21.14174899555715, 79.1190099021185],
      ['NAGPUR KITCHEN',21.155557976243916, 79.09534043970366],
    ];

  let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: center
    });
  let infowindow =  new google.maps.InfoWindow({});
  let marker, count;
  for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][1], locations[count][2]),
        map: map,
        title: locations[count][0]
      });
  google.maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
          infowindow.setContent(locations[count][0]);
          infowindow.open(map, marker);
        }
      })(marker, count));
    }
  }