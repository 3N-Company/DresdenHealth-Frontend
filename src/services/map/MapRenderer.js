import L from "leaflet";
import "leaflet-routing-machine"
import {DRESDEN, TILE_LAYER_URL} from "../../constants/map.constants";
import leafletKnn from "leaflet-knn";

export class MapRenderer {
    constructor(mapId, data, markerImg) {
        let map = L.map(mapId).setView([DRESDEN.lat, DRESDEN.lon], 16);
        L.tileLayer(TILE_LAYER_URL, {
            maxZoom: 18,
            attribution: '&copy Dresden Healthapp',
            id: 'mapbox.light'
        }).addTo(map);
        this.__diffIcon = L.icon({
            iconUrl: markerImg,
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
        });
        this.__map = map
        this.__data = data
    }

    __onEachFeature(feature, layer) {
        let popupContent = "<p><b>Place</b>:" + feature.properties.einrichtung + "<br/>" +
           "<b>Beschreibung</b>:" + feature.properties.standortbeschreibung + "</p>";

        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
        }

        layer.bindPopup(popupContent);
    }

    __addUserPos(location) {
        let userPos = new L.LatLng(location.coords.latitude, location.coords.longitude);
        // userPos = new L.LatLng(51.029322, 13.735111);
        this.__map.setView(userPos, 18);
        L.circleMarker(userPos, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(this.__map);
        return userPos
    }

    bindCallbacksToThis(...callbacks){
        return callbacks.map(c => c.bind(this))
    }

    withUserPosition(callbacks) {
        navigator.geolocation.getCurrentPosition((location) => {
                const userPos = this.__addUserPos(location)
                callbacks.forEach(c => c(userPos))
            }
        )
    }

    renderData() {
        L.geoJSON(this.__data, {
            pointToLayer: (feature, latlng) => L.marker(latlng, {icon: this.__diffIcon}),
            onEachFeature: this.__onEachFeature
        }).addTo(this.__map);
        return this
    }

    renderNearest(userPosition) {
        const dataLObject = L.geoJson(this.__data);
        const sortedDataL = leafletKnn(dataLObject).nearest(L.latLng(userPosition), 16);
        let nearestDiff = new L.LatLng(sortedDataL[0].lat, sortedDataL[0].lon);
        L.circleMarker(nearestDiff, {
            radius: 8,
            fillColor: "red",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(this.__map);
        L.Routing.control({
            waypoints: [
                L.latLng(userPosition),
                L.latLng(nearestDiff),
            ],
            lineOptions: {
                styles: [{color: 'black', opacity: 1, weight: 5}]
            }
        }).addTo(this.__map);
    }

}
