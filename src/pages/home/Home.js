import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../components/dashboard/Dashboard";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Sidebar from "../../components/sidebar/Sidebar";
import Spinner from "../../components/spinner/Spinner";
import { currentWeatherAction } from "../../redux/actions/weatherActions";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => state.weather);

  const [tempInfo, setTempInfo] = useState({ temp: 0, unit: "C" });

  useEffect(() => {
    dispatch(currentWeatherAction("Kathmandu"));
  }, [dispatch]);

  const unitChangeHandler = (toUnit) => {
    let celciusBtn = document.getElementsByClassName("celcius")[0];
    let fahrenheitBtn = document.getElementsByClassName("fahrenheit")[0];

    if (toUnit === "f") {
      celciusBtn.classList.remove("active");
      fahrenheitBtn.classList.add("active");
      setTempInfo({
        temp: ((data.main.temp * 9) / 5 + 32).toFixed(2),
        unit: "F",
      });
    } else if (toUnit === "c") {
      fahrenheitBtn.classList.remove("active");
      celciusBtn.classList.add("active");
      setTempInfo({ temp: data.main.temp, unit: "C" });
    }
  };

  return (
    <div className="wrapper">
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage errorMessage={error.message} />
      ) : (
        <>
          <Sidebar
            temperature={tempInfo}
            time={data.dt}
            city={data.name}
            sky={{
              main: data.weather[0].main,
              icon: data.weather[0].icon,
            }}
          />
          <Dashboard
            unitChangeHandler={unitChangeHandler}
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
