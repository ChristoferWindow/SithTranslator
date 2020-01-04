import React from 'react';
import './App.css';
import TranslationForm from './TranslationForm';
import TopNavBar from './TopNavBar';
import FooterBar from './FooterBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <TopNavBar/>
      <br/>

      <TranslationForm/>
      <FooterBar/>
    </>
  );
}

export default App;
