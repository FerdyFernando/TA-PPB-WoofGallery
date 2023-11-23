import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import SplashScreen from './views/SplashScreen'; 
import About from './views/About';
import Random from './views/Random';
import Home from './views/Home';
import Show from './views/Show';
import Picture from './views/Picture';
import Error from './views/Error';

import BottomBar from './components/BottomBar';


import axios from 'axios';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [listBreeds, setListBreeds] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  const [bottomBarOpen, setBottomBarOpen] = useState(false);

  const getAllBreeds = async () => {
    const list = [];

    try {
      await axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then((response) => response.data.message)
        .then((response) => {
          Object.keys(response).forEach((result) => {
            !response[result].length
              ? list.push(result)
              : response[result].filter((element) =>
                  list.push(result + ' ' + element)
                );
          });
        });

      setBreeds(list);
      setListBreeds(list);
    } catch (err) {
      console.log(err.message);
    }
  }; 



  useEffect(() => {
    const fetchData = async () => {
      await getAllBreeds();
      setIsLoading(false);
      setBottomBarOpen(true);
    };

    const delay = 2000;

    setTimeout(() => {
      fetchData();
    }, delay);
  }, []);




  return (
    <div className="bg-[#1b2a2f] min-h-screen w-full">
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/breeds-list/"
              element={<Home listBreeds={listBreeds} setListBreeds={setListBreeds} />}
            />
            <Route path="/breeds-list/about" element={<About />} />
            <Route path="/breeds-list/random" element={<Random />} />
            <Route path="/breeds-list/:breed" element={<Show />}>
              <Route
                path="/breeds-list/:breed/:picture"
                element={<Picture />}
              />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
          {bottomBarOpen && <BottomBar isOpen={bottomBarOpen} />}
        </Router>
      )}
    </div>
  );
}

export default App;
