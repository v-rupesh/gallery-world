// App.js
import React, { useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const changeHandler = e => {
    setSearch(e.target.value);
  };

  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
  };

  const backgroundImage = 'url("https://images.hdqwalls.com/download/the-lion-king-movie-10k-yz-1920x1080.jpg")'; // Replace with your image URL
  const styles = {
    background: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

    const titleStyle = {
        color: 'blue',
        fontWeight: 'bold',
        fontsize: '35px',
        textAlign: 'center'
    };

    const inputStyle = {
    background: 'transparent',
    border: '1px solid white',
    color: 'white',
    fontSize: '16px',
    padding: '5px',
  };

  return (
    <div style={styles}>
    <div>
      <center>
      <div>
       <h2 style={titleStyle}>Gallery World</h2><br />
      </div>
        <form onSubmit={submitHandler}>
          <input size="50" type="text" onChange={changeHandler} value={search} placeholder="Search for your photos" style={inputStyle}/><br /><br />
          <input type="submit" name="Search" className='btn btn-success' />
        </form>
        <br />
        {data.length >= 1 ? <Gallery data={data} /> : <h4>No Image Loaded</h4>}
      </center>
    </div>
    </div>
  );
};

export default App;
