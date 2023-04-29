import Header from './common/header/header';
import Main from './common/main/main';
import Footer from './common/footer/footer';

//import { Routes, Route } from 'react-router-dom';
//import Home from './pages/Home/Home';
//import Instruction from './pages/Instruction/Inctruction';

import './index.css';

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <Main />
            {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/instruction' element={<Instruction />} />
            </Routes> */}
            <Footer />
        </div>
    );
}

export default App;
