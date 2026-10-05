const map = L.map("map", {
    minZoom: -3
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);
map.setView([64.5, 26.0], 5);