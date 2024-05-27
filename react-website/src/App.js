import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header/>
      <div className='mainDiv'>
        <Outlet/>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default App;
