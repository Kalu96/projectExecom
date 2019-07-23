import React from "react";
import { NavLink } from "react-router-dom";

class Search extends React.Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <NavLink className="nav-link" to={`/SearchResults?name=${value}`} >
          <input type="submit" value="Submit" />
        </NavLink>

        {console.log(value)}
      </form>
    );
  }
}

export default Search;
