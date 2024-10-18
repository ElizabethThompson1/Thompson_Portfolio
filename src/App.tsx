import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { GlobalStyle } from './styles/global';
import Chatbot from './components/Chatbot/Chatbot'; // Import your Chatbot component
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Chatbot /> {/* Include Chatbot here */}
      <Footer />
    </>
  );
}

export default App;
