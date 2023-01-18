import React from 'react';
import Header from './components/header'
import SearchBar from './features/search_bar/SearchBar'
import './App.css';
import ProductsCards from './features/products_cards/ProductsCards'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        
        <SearchBar/>
        
      </div>
    </div>
  );
}

export default App;
