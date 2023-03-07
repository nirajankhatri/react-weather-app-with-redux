import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../components/modal/Modal";
import Sidebar from "../../components/sidebar/Sidebar";
import { currentWeatherAction } from "../../redux/actions/weatherActions";
import { CURRENT_WEATHER_REQUEST } from "../../redux/constants/weatherConstants";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentWeatherAction());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Sidebar />
      <Modal />
    </div>
  );
};

export default Home;
