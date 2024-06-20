import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Index from '../pages/index';
import Gallery from '../pages/gallery';
import Timeline from '../pages/timeline';
import Dates from '../pages/dates';
import Mkq from '../pages/mkq';


function App() {
    return (
        <div>
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/dates" element={<Dates />} />
                <Route path="/mkq" element={<Mkq />} />

            </Routes>
        </Router>
        </div>
    );
}

export default App;
