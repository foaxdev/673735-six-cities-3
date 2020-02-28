import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";

export const Apartment = ({index, offer, mainApartmentClass, showPremiumBadge, onCardHover, onHeaderClick}) => {
  const {type, price, title, isPremium, rating, photoSrc} = offer;
  const ratingPercentage = `${Math.floor(rating * 100 / 5)}%`;
  const premiumClass = isPremium && showPremiumBadge ? `place-card__mark` : `place-card__mark visually-hidden`;
  const articleClass = `${mainApartmentClass}__place-card place-card`;
  const imageWrapClass = `${mainApartmentClass}__image-wrapper place-card__image-wrapper`;

  return (
    <article className={articleClass} onMouseOver={onCardHover} style={{marginLeft: `8px`}}>
      <div className={premiumClass}>
        <span>Premium</span>
      </div>
      <div className={imageWrapClass}>
        <a href="#">
          <img className="place-card__image" src={photoSrc} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingPercentage}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" className="place-card__link" onClick={() => onHeaderClick(index)}>{title}</a>
        </h2>
        <p className="place-card__type" style={{textTransform: `capitalize`}}>{type}</p>
      </div>
    </article>
  );
};

Apartment.propTypes = {
  index: PropTypes.number.isRequired,
  offer: PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    photoSrc: PropTypes.string.isRequired,
  }).isRequired,
  showPremiumBadge: PropTypes.bool.isRequired,
  mainApartmentClass: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  mainApartmentClass: state.mainApartmentClass,
  showPremiumBadge: state.showPremiumBadge
});

const mapDispatchToProps = (dispatch) => ({
  onCardHover() {

  },
  onHeaderClick(newPage) {
    dispatch(ActionCreator.changeCurrentPage(newPage));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Apartment);
