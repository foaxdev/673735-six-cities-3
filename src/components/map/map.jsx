import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

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
      center: this.props.cityCoordinates,
      zoom: 14,
      zoomControl: false,
      marker: true
    });
    this._map.setView(this.props.cityCoordinates, 12);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    leaflet
      .marker(this.props.markerCoordinates, {icon})
      .addTo(this._map);

    for (let i = 0; i < this.props.availableOffers.length; i++) {
      leaflet
        .marker([this.props.availableOffers[i][0], this.props.availableOffers[i][1]])
        .addTo(this._map);
    }
  }
}

Map.propTypes = {
  cityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  availableOffers: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  ).isRequired,
  markerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};
