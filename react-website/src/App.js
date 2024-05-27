import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

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
library.add(fab, fas, far)