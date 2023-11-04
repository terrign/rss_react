import React from 'react';
import './App.css';
import Search from './components/Search.tsx';

class App extends React.Component {
  render() {
    return (
      <div style={{ width: '70%', margin: '0 auto' }}>
        <Search />
      </div>
    );
  }
}
export default App;
