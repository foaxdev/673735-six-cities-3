import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";

export class Map extends PureComponent {

  constructor(props) {
    super(props);

    this._map = null;
  }

  componentDidMount() {
    this._setupMap();
  }

  componentDidUpdate() {
    this._map.off();
    this._map.remove();

    this._setupMap();
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }

  _setupMap() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });

    this._map = leaflet.map(`map`, {
      center: this.props.currentCityCoordinates,
      zoom: 14,
      zoomControl: false,
      marker: true
    });
    this._map.setView(this.props.currentCityCoordinates, 12);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    leaflet
      .marker(this.props.currentCityMarkerCoordinates, {icon})
      .addTo(this._map);

    for (let i = 0; i < this.props.coordinatesOfOffersByCity.length; i++) {
      leaflet
        .marker([this.props.coordinatesOfOffersByCity[i][0], this.props.coordinatesOfOffersByCity[i][1]])
        .addTo(this._map);
    }
  }
}

Map.propTypes = {
  currentCityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  coordinatesOfOffersByCity: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  ).isRequired,
  currentCityMarkerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

const mapStateToProps = (state) => ({
  currentCityCoordinates: state.currentCityCoordinates,
  currentCityMarkerCoordinates: state.currentCityMarkerCoordinates,
  coordinatesOfOffersByCity: state.coordinatesOfOffersByCity
});

export default connect(mapStateToProps)(Map);
