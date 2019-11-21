import React from "react";
import "./App.css";
import $ from "jquery";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      id: 4,
      fullName: "",
      age: ""
    };

    this.updateDataBase = this.updateDataBase.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: "https://localhost:44341/api/People",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ items: data, isLoaded: true });
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({ isLoaded: true, error: err });
      }.bind(this)
    });
  }

  handleChangeInput = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    var newPerson = {
      id: this.state.id,
      fullName: this.state.fullName,
      age: this.state.age
    };
    this.updateDataBase(newPerson);
  };

  updateDataBase = newPerson => {
    debugger;
    console.log("newPerson:", newPerson);

    $.ajax({
      url: "https://localhost:44341/api/People",
      method: "POST",
      data: {
        FullName: newPerson.fullName,
        Age: newPerson.age
      },
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({
          items: [...this.state.items, newPerson],
          id: this.state.id + 1,
          fullName: "",
          age: ""
        });
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({ isLoaded: true, error: err });
      }.bind(this)
    });
  };

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loadding...</div>;
    } else {
      const { items } = this.state;
      var styleOfTable = {
        textAlign: "center",
        border: "1px solid black",
        padding: "10px"
      };

      return (
        <div>
          <h1>My Family</h1>
          <table>
            <thead>
              <tr>
                <th style={styleOfTable}>ID</th>
                <th style={styleOfTable}>Full Name</th>
                <th style={styleOfTable}>Age</th>
              </tr>
            </thead>
            <tbody>
              {items.map((person, i) => (
                <tr key={i}>
                  <td style={styleOfTable}>{person.id}</td>
                  <td style={styleOfTable}>{person.fullName}</td>
                  <td style={styleOfTable}>{person.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <form onSubmit={this.handleSubmitForm}>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Your id.."
              value={this.state.id}
              disabled
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="fName"
              name="fullName"
              placeholder="Your full name.."
              value={this.state.fullName}
              onChange={this.handleChangeInput}
            />

            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="Your age.."
              value={this.state.age}
              onChange={this.handleChangeInput}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
}

export default App;
