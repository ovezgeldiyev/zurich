var locations = [
  ['<div class="card"><button type="button" class="card__close"></button><div class="card__image"><img src="./images/dash/1.png" alt="" /></div><div class="card__content"><h6>IWC SCHAFFHAUSSEN</h6><div class="card__list"><a href="tel:+41 (0)22 123 45 89"><span><img src="./images/icons/phone.svg" alt="" /></span>+41 (0)22 123 45 89</a><a href="mailto:email@domain.com"><span><img src="./images/icons/mail.svg" alt="" /></span>email@domain.com</a><p><span><img src="./images/icons/location.svg" alt="" /></span>Street address <br />1800 City</p></div><a href="#" class="button secondary"> get direction </a></div></div>', 47.420356, 8.504593],
  ['<div class="card"><button type="button" class="card__close"></button><div class="card__image"><img src="./images/dash/2.png" alt="" /></div><div class="card__content"><h6>PIAGET</h6><div class="card__list"><a href="tel:+41 (0)22 123 45 89"><span><img src="./images/icons/phone.svg" alt="" /></span>+41 (0)22 123 45 89</a><a href="mailto:email@domain.com"><span><img src="./images/icons/mail.svg" alt="" /></span>email@domain.com</a><p><span><img src="./images/icons/location.svg" alt="" /></span>Street address <br />1800 City</p></div><a href="#" class="button secondary"> get direction </a></div></div>', 47.421575, 8.504298],
  ['<div class="card"><button type="button" class="card__close"></button><div class="card__image"><img src="./images/dash/3.png" alt="" /></div><div class="card__content"><h6>PANERAI</h6><div class="card__list"><a href="tel:+41 (0)22 123 45 89"><span><img src="./images/icons/phone.svg" alt="" /></span>+41 (0)22 123 45 89</a><a href="mailto:email@domain.com"><span><img src="./images/icons/mail.svg" alt="" /></span>email@domain.com</a><p><span><img src="./images/icons/location.svg" alt="" /></span>Street address <br />1800 City</p></div><a href="#" class="button secondary"> get direction </a></div></div>', 47.421051, 8.500214],
  ['<div class="card"><button type="button" class="card__close"></button><div class="card__image"><img src="./images/dash/1.png" alt="" /></div><div class="card__content"><h6>IWC SCHAFFHAUSSEN</h6><div class="card__list"><a href="tel:+41 (0)22 123 45 89"><span><img src="./images/icons/phone.svg" alt="" /></span>+41 (0)22 123 45 89</a><a href="mailto:email@domain.com"><span><img src="./images/icons/mail.svg" alt="" /></span>email@domain.com</a><p><span><img src="./images/icons/location.svg" alt="" /></span>Street address <br />1800 City</p></div><a href="#" class="button secondary"> get direction </a></div></div>', 47.419437, 8.505284],
];

var map = L.map("map").setView([47.420356, 8.504593], 17);
// mapLink = '<a href="https://tile.openstreetmap.org/{z}/{x}/{y}.png">OpenStreetMap</a>';
// L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution: "&copy; " + mapLink + " Contributors",
//   maxZoom: 20,
// }).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
for (var i = 0; i < locations.length; i++) {
  marker = new L.marker([locations[i][1], locations[i][2]])
    .bindPopup(locations[i][0])
    .addTo(map);
}


// var map = L.map("map").setView([51.505, -0.09], 13);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

// var marker = L.marker([51.5, -0.09]).addTo(map);

// var polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047],
// ]).addTo(map);

// marker
//   .bindPopup(
//     '<div class="card"><button type="button" class="card__close"></button><div class="card__image"><img src="./images/dash/1.png" alt="" /></div><div class="card__content"><h6>IWC SCHAFFHAUSSEN</h6><div class="card__list"><a href="tel:+41 (0)22 123 45 89"><span><img src="./images/icons/phone.svg" alt="" /></span>+41 (0)22 123 45 89</a><a href="mailto:email@domain.com"><span><img src="./images/icons/mail.svg" alt="" /></span>email@domain.com</a><p><span><img src="./images/icons/location.svg" alt="" /></span>Street address <br />1800 City</p></div><a href="#" class="button secondary"> get direction </a></div></div>'
//   )
//   .openPopup();
// polygon.bindPopup("I am a polygon.");

// function onMapClick(e) {
//   alert("You clicked the map at " + e.latlng);
// }

// map.on("click", onMapClick);

// var popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(map);
// }

// map.on("click", onMapClick);
