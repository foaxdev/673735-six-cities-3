import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";

export class Map extends React.PureComponent {

  constructor(props) {
    super(props);

    this._map = null;
    this._markers = [];
    this._zoom = 12;
    this._activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 40]
    });

    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });
  }

  _updateMarkers() {
    for (let i = 0; i < this._markers.length; i++) {
      this._markers[i].marker.setIcon(this._markers[i].id === this.props.activeMarkerIndex ? this._activeIcon : this._icon);
    }
  }

  _setupMap() {
    this._markers = [];

    this._map = leaflet.map(`map`, {
      center: this.props.currentCityCoordinates,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(this.props.currentCityCoordinates, this._zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    leaflet
      .marker(this.props.currentCityMarkerCoordinates)
      .addTo(this._map);

    for (let i = 0; i < this.props.coordinatesOfOffersByCity.length; i++) {
      let markerInstance = leaflet
        .marker([this.props.coordinatesOfOffersByCity[i].coordinates[0], this.props.coordinatesOfOffersByCity[i].coordinates[1]], {icon: this._icon})
        .addTo(this._map);

      this._markers.push({
        id: this.props.coordinatesOfOffersByCity[i].id,
        marker: markerInstance
      });
    }
  }

  componentDidMount() {
    this._setupMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPage === this.props.currentPage && prevProps.currentCity === this.props.currentCity) {
      this._updateMarkers();
    } else {
      this._map.off();
      this._map.remove();

      this._setupMap();
    }
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  currentCityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  coordinatesOfOffersByCity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  }).isRequired,
  currentCityMarkerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  activeMarkerIndex: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  currentCity: state.currentCity,
  currentCityCoordinates: state.currentCityCoordinates,
  currentCityMarkerCoordinates: state.currentCityMarkerCoordinates,
  coordinatesOfOffersByCity: state.coordinatesOfOffersByCity,
  activeMarkerIndex: state.activeMarkerIndex
});

export default connect(mapStateToProps)(Map);
