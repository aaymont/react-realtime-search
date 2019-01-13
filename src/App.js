import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  state = {
      topMovies: [
        "The Shawshank Redemption (1994)",
        "The Godfather (1972)",
        "The Godfather: Part II (1974)",
        "The Dark Knight (2008)",
        "12 Angry Men (1957)",
        "Schindler's List (1993)",
        "Pulp Fiction (1994)",
        "The Lord of the Rings: The Return of the King (2003)",
        "The Good, the Bad and the Ugly (1966)",
        "Fight Club (1999)",
        "The Lord of the Rings: The Fellowship of the Ring (2001)",
        "Forrest Gump (1994)",
        "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "Inception (2010)",
        "The Lord of the Rings: The Two Towers (2002)",
        "One Flew Over the Cuckoo's Nest (1975)",
        "Goodfellas (1990)",
        "The Matrix (1999)",
        "Seven Samurai (1954)",
        "Star Wars: Episode IV - A New Hope (1977)"
      ],
      items: []
    }

    componentWillMount() {
      this.setState({ items: this.state.topMovies });
    }

    filterList = (event) => {
      let updatedList = this.state.topMovies;
      updatedList = updatedList.filter(function(item) {
        return item.toLocaleLowerCase().search(
          event.target.value.toLocaleLowerCase()) !== -1;
        });
      this.setState({ items: updatedList });
    }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="Title">
            React Search!
          </div>
          <div className="Description">
            <p>Here you can search the top movies of all time in real time.</p>
            <p>
              The data is stored inline in the JSX files and accessed at component level state.
            </p>
          </div>
        </div>
        <div className="SearchBox">
          <input 
            type="text" 
            placeholder="Search the list using ReactJS" 
            onChange={this.filterList} 
            />
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
