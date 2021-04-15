/* eslint-disable */

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/App.css';
import { useState, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import MainBanner from "./layouts/MainBanner";
import ShoesContainer from "./layouts/ShoesContainer";
import Data from "./components/Data";
import Cart from "./layouts/Cart";

let Detail = lazy(()=>{ return import('./layouts/Detail') })

function App(props) {
  let [shoes, shoesChange] = useState(Data);
  let [stock, stockChange] = useState([12, 11, 7, 2, 50, 40])

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <MainBanner />
          <ShoesContainer shoes={shoes} />
        </Route>

        <Route path="/detail/:id">
          <Suspense fallback={<h4>Loading...</h4>}>
            <Detail shoes={shoes} stock={stock} stockChange={stockChange} />
          </Suspense>
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
