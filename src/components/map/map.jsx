import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

export class Map extends PureComponent {

  componentDidMount() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });

    const map = leaflet.map(`map`, {
      center: this.props.cityCoordinates,
      zoom: 14,
      zoomControl: false,
      marker: true
    });
    map.setView(this.props.cityCoordinates, 12);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    leaflet
      .marker(this.props.offerCoordinates, {icon})
      .addTo(map);

    for (let i = 0; i < this.props.availableOffers.length; i++) {
      leaflet
        .marker([this.props.availableOffers[i][0], this.props.availableOffers[i][1]])
        .addTo(map);
    }
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  cityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  availableOffers: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  ).isRequired,
  offerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};
