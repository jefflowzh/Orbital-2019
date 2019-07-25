import React, { Component } from "react";

class FAQ extends Component {
  state = {};
  render() {
    return (
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col s12">
            <br />
            <h3 className="center-align">
              <b>Frequently Asked Questions!</b>
            </h3>
            <br />
            <h5>
              <b>1. What is Bacon Ipsum?</b>
            </h5>
            <p className="flow-text grey-text text-darken-1">
              <small>
                Simply put, it’s a take on the lorem ipsum filler text used when
                doing design mockups. I was mocking up a web design one day and
                needed a few words to fill out a link. “Lorem ipsum bacon”
                popped into my head, so I plugged that into my HTML. Later that
                day, it hit me. Make a lorem ipsum generator but use types and
                cuts of meat.
              </small>
            </p>
            <h5>
              <b>2. Is there a vegan/vegetarian version?</b>
            </h5>
            <p className="flow-text grey-text text-darken-1">
              <small>
                Yes! I recommend and have frequently used the meat-free lorem
                ipsum generator at lipsum.com. If you need some veggies, check
                out veggieipsum.com, or veganipsum.com.
              </small>
            </p>
            <h5>
              <b>3. You’re missing a meat. Can you add more?</b>
            </h5>
            <p className="flow-text grey-text text-darken-1">
              <small>
                Sure, shoot me an e-mail or find me on Twitter at @CodeGeekATX
                and I’ll get it added to the database.
              </small>
            </p>
            <h5>
              <b>4. Can you add fish?</b>
            </h5>
            <p className="flow-text grey-text text-darken-1">
              <small>
                No. I’m not a fan of fish. If you want to make your own
                tunaipsum.com, knock yourself out. @chrisjean knocked himself
                out! tunaipsum.com
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
