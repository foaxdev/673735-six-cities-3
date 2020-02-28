import React, {PureComponent} from "react";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export class SortVariants extends PureComponent {

  render() {
    const sortListClass = this.props.isSortOpened ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.props.onSortClick}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className={sortListClass}>
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
    );
  }
}

SortVariants.propTypes = {
  isSortOpened: PropTypes.bool.isRequired,
  onSortClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isSortOpened: state.isSortOpened
});

const mapDispatchToProps = (dispatch) => ({
  onSortClick() {
    dispatch(ActionCreator.toggleSortList());
  },
  onSortVariantClick() {

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortVariants);
