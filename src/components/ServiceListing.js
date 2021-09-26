import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceComponent from "./ServiceComponent";
import { setServices } from "../redux/actions/serviceActions";
import api from "../helpers/api";
import authHeader from "../services/auth-header";

const API_URL = "https://api.iziw.com.br/api";

const ServiceListing = () => {
  const services = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchServices = async () => {
    const response = await api
      .get(API_URL + "/servicos", { headers: authHeader() })
      .catch((err) => {
        console.log("Api fetch error", err);
      });
    dispatch(setServices(response.data));
  };

  useEffect(() => {
    fetchServices();
  }, []);
  console.log("services: ", services);
  return (
    <div className="ui grid container">
      <ServiceComponent />
    </div>
  );
};

export default ServiceListing;
