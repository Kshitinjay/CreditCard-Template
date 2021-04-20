import React, { useState } from "react";
import "./card.css";
const Card = ({ handleChange , handleSubmit}) => {
  return (
    <div>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h1 className="card__title">Enter Payment Information</h1>
          <div className="card__row">
            <div className="card__col container">
              <label htmlFor="cardNumber" className="card__label">
                Card Number
              </label>
              <input
                type="text"
                className="card__input card__input--large"
                id="id-1"
                placeholder="xxxx"
                maxLength={4}
                name="id-1"
                onChange={handleChange}
                autoComplete="off"
              />
              <span id="seperater">-</span>
              <input
                type="text"
                className="card__input card__input--large"
                id="id-2"
                placeholder="xxxx"
                maxLength={4}
                name="id-2"
                onChange={handleChange}
                autoComplete="off"
              />
              <span id="seperater">-</span>
              <input
                type="text"
                className="card__input card__input--large"
                id="id-3"
                placeholder="xxxx"
                maxLength={4}
                name="id-3"
                onChange={handleChange}
                autoComplete="off"
              />
              <span id="seperater">-</span>
              <input
                type="text"
                className="card__input card__input--large"
                id="id-4"
                placeholder="xxxx"
                maxLength={4}
                name="id-4"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="card__col card__chip">
              <img
                src="https://raw.githubusercontent.com/codeSTACKr/glassmorphism-credit-card/3b0562ab457f2ca260d49ac5ff271dc4fc33870b/img/chip.svg"
                alt="chipNotFound"
              />
            </div>
          </div>
          <div className="card__row">
            <div className="card__col">
              <label htmlFor="cardExpiry" className="card__label">
                Expiry
              </label>
              <input
                type="text"
                className="card__input"
                id="cardExpiry"
                placeholder="xx/xx"
                maxLength={5}
                name="exp-1"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="card__col">
              <label htmlFor="cardCcv" className="card__label">
                Ccv
              </label>
              <input
                type="text"
                className="card__input"
                id="cardCcv"
                placeholder="xxx"
                maxLength={3}
                name="cvv-1"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="card__col card__brand">
              {/* <i id="cardBrand"></i> */}
            </div>
          </div>
          <div className="card__row">
            <div className="card__col">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Card;
