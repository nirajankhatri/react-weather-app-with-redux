import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/dashboard/Dashboard";
import Sidebar from "../../components/sidebar/Sidebar";
import Spinner from "../../components/spinner/Spinner";
import { currentWeatherAction } from "../../redux/actions/weatherActions";

const Home = () => {
  const dispatch = useDispatch();

  // const [city, setCity] = useState("Kathmandu");

  // const cityInputHandler = (input) => {
  //   setCity(input);
  // };

  const { loading, data, error } = useSelector((state) => state.weather);

  console.log(data);

  useEffect(() => {
    dispatch(currentWeatherAction("Kathmandu"));
  }, [dispatch]);

  return (
    <div className="wrapper">
      {loading ? (
        <Spinner />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <Sidebar
            // inputHandler={cityInputHandler}
            temperature={data.main.temp}
            time={data.dt}
            city={data.name}
            sky={{
              main: data.weather[0].main,
              icon: data.weather[0].icon,
            }}
          />
          <Modal
            humidity={data.main.humidity}
            sun={{
              rise: data.sys.sunrise,
              set: data.sys.sunset,
            }}
            visibility={data.visibility}
            wind={{
              deg: data.wind.deg,
              speed: data.wind.speed,
            }}
            pressure={data.main.pressure}
          />
        </>
      )}
    </div>
  );
};

export default Home;
