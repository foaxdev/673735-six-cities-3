import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

export class Map extends PureComponent {

  componentDidMount() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: this.props.city,
      zoom: zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(this.props.city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      })
      .addTo(map);

    leaflet
      .marker(this.props.offerCoordinates, {icon})
      .addTo(map);
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  city: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  offerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};
