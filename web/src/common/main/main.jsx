import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Instruction from '../../pages/Instruction/Inctruction';
import Registration from '../../pages/Registration/Registration';

import './index.css';


export default function Main (){
    return(
        <main>
            <div className="container">
                {/* <h2>Main</h2> */}
                <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/instruction' element={<Instruction />} />
                <Route path='/registration' element={<Registration />} />
            </Routes>
            </div>
        </main>
    )
}