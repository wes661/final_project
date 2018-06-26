import React from 'react';

const inputParsers = {
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

export default class Form extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;

      if (parserName) {
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
        data.set(name, parsedValue);
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder=""
          name="visitReason"
          type1="text"
        />
        <br />
        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder=""
          name="whatPhysician"
          type2="text"
        />
        <br />
        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder=""
          name="whatTime"
          type3="text"
        />
        <br />
        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder=" "
          name="coPay"
          type4="text"
        />
        <br />
        <button className="btn btn-outline-dark">Save appointment</button>
      </form>
    );
  }
}