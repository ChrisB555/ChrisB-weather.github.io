//import Routers from "./Routers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import WeatherApi from "./pages/weatherApi/WeatherApi";

import SearchFiveDays from "./pages/main/fiveDaysWeather/SearchFiveDays";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchTodayWeather from "./pages/main/today/SearchTodayWeather";
import CurrentLocation from "./pages/main/currentLocation/CurrentLocation";
import SearchCity from "./pages/main/airQuality/SearchCity";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/weatherApi">
            <WeatherApi />
          </Route>

          <Route exact path="/searchTodayWeather">
            <SearchTodayWeather />
          </Route>
          <Route exact path="/searchFiveDays">
            <SearchFiveDays />
          </Route>
          <Route exact path="/searchCity">
            <SearchCity />
          </Route>
          <Route exact path="/currentLocation">
            <CurrentLocation />
          </Route>
          <Route exact path="/">
            <CurrentLocation />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
