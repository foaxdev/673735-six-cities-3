import React, {PureComponent} from "react";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const SORT_TYPES = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

export class SortVariants extends PureComponent {

  render() {
    const sortListClass = this.props.isSortOpened ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.props.onSortListClick}>
          {this.props.currentSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className={sortListClass}>
          {SORT_TYPES.map((sortType, i) => {
            const sortTypeClass = this.props.currentSortType === sortType ? `places__option places__option--active` : `places__option`;
            return (
              <li key={`sortType-${i}`} className={sortTypeClass} tabIndex="0" onClick={() => this.props.onSortTypeClick(sortType)}>{sortType}</li>
            );
          })}
        </ul>
      </form>
    );
  }
}

SortVariants.propTypes = {
  isSortOpened: PropTypes.bool.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onSortListClick: PropTypes.func.isRequired,
  onSortTypeClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isSortOpened: state.isSortOpened,
  currentSortType: state.currentSortType
});

const mapDispatchToProps = (dispatch) => ({
  onSortListClick() {
    dispatch(ActionCreator.toggleSortList());
  },
  onSortTypeClick(newSortType) {
    dispatch(ActionCreator.changeSortType(newSortType));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortVariants);
