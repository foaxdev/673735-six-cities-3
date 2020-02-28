import React from "react";
import PropTypes from "prop-types";
import {ReviewsList} from "../reviews-list/reviews-list";
import {Map} from "../map/map";
import {ApartmentsList} from "../apartments-list/apartments-list";

export const ApartmentDetailed = (props) => {
  const {type, price, title, isPremium, rating, photos, description, bedrooms, guests, amenities, host, reviews, coordinates} = props.offer;
  const ratingPercentage = `${Math.ceil(rating) * 100 / 5}%`;
  const premiumClass = isPremium ? `property__mark` : `property__mark visually-hidden`;
  const superHostClass = host.isSuper ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`;
  const bedroomText = bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`;
  const guestText = guests > 1 ? `Max ${guests} adults` : `Max ${guests} adult`;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {photos.map((photo, i) => (
            <div key={`${photo.src}-${i}`} className="property__image-wrapper">
              <img className="property__image" src={photo.src} alt={photo.alt}/>
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          <div className={premiumClass}>
            <span>Premium</span>
          </div>
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: ratingPercentage}}/>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire" style={{textTransform: `capitalize`}}>
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedroomText}
            </li>
            <li className="property__feature property__feature--adults">
              {guestText}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {amenities.map((amenity, i) => (
                <li key={`amenity-${i}`} className="property__inside-item">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={superHostClass}>
                <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
            </div>
            <div className="property__description">
              {description.map((text, i) => (
                <p key={`text-${i}`} className="property__text">
                  {text}
                </p>
              ))}
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
            <ReviewsList reviews={reviews}/>
            <form className="reviews__form form" action="#" method="post">
              <label className="reviews__label form__label" htmlFor="review">Your review</label>
              <div className="reviews__rating-form form__rating">
                <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>
              </div>
              <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
              <div className="reviews__button-wrapper">
                <p className="reviews__help">
                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe
                  your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <section className="property__map map"><Map cityCoordinates={coordinates} availableOffers={props.offersNearby.map((a) => a.coordinates)} markerCoordinates={coordinates}/></section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <ApartmentsList offers={props.offersNearby} mainClass={`near-places`} showPremium={false} onCardHover={props.onOfferCardHover} onHeaderClick={props.onOfferCardHeaderClick}/>
          </div>
        </section>
      </div>
    </section>
  );
};

ApartmentDetailed.propTypes = {
  offer: PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })).isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired
    }).isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          date: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
  }).isRequired,
  offersNearby: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    photoSrc: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired
    }).isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          date: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
  })).isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
  onOfferCardHeaderClick: PropTypes.func.isRequired
};
