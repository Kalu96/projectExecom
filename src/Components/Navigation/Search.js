import React from "react";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/SearchResults?name=${this.state.value}`);
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input className="input-field" type="text" value={value} onChange={this.handleChange} />
        </label>
        <input className="input-button" type="submit" value="Search" />
      </form>
    );
  }
}

export default withRouter(Search);
