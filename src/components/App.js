import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID b66ef09045518169840bd7bd79039538148fcc0e9310ff6f4d0561e6821ca98e'
            }
        });
    }

    render(){
        return (
          <div className="ui container" style={{ marginTop: '10px' }}>
              <SearchBar onSubmit={this.onSearchSubmit} />
          </div>
        );
    }
};

export default App;

