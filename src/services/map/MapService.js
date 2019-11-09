import {DRESDEN, TILE_LAYER_URL} from "../../constants/map.constants";
import L from "leaflet"
import DeffibrilatorsService from "../deffibrilators/DeffibrilatorsService";
import leafletKnn from "leaflet-knn"
import deff_img from "../../assets/img/mark.png"

export class MapBuilder {
    constructor() {
        let map = L.map('map').setView([DRESDEN.lat, DRESDEN.lon], 16);
        L.tileLayer(TILE_LAYER_URL, {
            maxZoom: 18,
            attribution: '&copy Dresden Healthapp',
            id: 'mapbox.light'
        }).addTo(map);
        this.__diffIcon = L.icon({
            iconUrl: deff_img,
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28]
        });
        this.__map = map
    }

    __onEachFeature(feature, layer) {
        let popupContent = "<p>I started out as a GeoJSON " +
            feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

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
        this.__userPos = userPos
    }

    withUserPosition() {
        navigator.geolocation.getCurrentPosition(this.__addUserPos.bind(this))
        return this
    }

    __checkWithDataDependencies() {
        this.__checkMapDependency()
        if (this.__userPos === undefined) {
            throw new Error("__checkWithDataDependencies :: user pos not loaded")
        }
    }

    __checkMapDependency() {
        if (this.__map === undefined) {
            throw new Error("__checkWithDataDependencies :: map not loaded")
        }
    }

    withData(rawJsData) {
        this.__checkMapDependency()
        const icon = this.__diffIcon
        L.geoJSON(rawJsData, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon});
            },
            onEachFeature: this.__onEachFeature
        }).addTo(this.__map);
        return this
    }

    withNearest(rawJsData) {
        this.__checkWithDataDependencies()
        const diffData = L.geoJson(rawJsData);
        const sortedDiffData = leafletKnn(diffData).nearest(L.latLng(this.__userPos), 16);
        let nearestDiff = new L.LatLng(sortedDiffData[0].lat, sortedDiffData[0].lon);
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
                L.latLng(this.__userPos),
                L.latLng(nearestDiff),
            ]
        }).addTo(this.__map);
        return this
    }

    build() {
        return this.__map
    }


}

class MapService {
    buildDefaultMap() {
        return (new MapBuilder())
            .build()
    }

    buildWithPosition(){
        return (new MapBuilder())
            .withUserPosition()
            .build()

    }
}

export default new MapService()


