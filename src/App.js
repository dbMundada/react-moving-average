import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import MainPage from './components/MainPage';



const tmp = {
   employeeId: “200321,
   designation: “Developer”,
   experience: “3 year”
};

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    );
  }
}

export default App;
