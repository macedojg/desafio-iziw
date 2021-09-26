import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import api from "../helpers/api";
import {
  selectedService,
  removeSelectedService,
} from "../redux/actions/serviceActions";
import authHeader from "../services/auth-header";

const API_URL = "https://api.iziw.com.br/api/servicos/";

const ServiceDetail = () => {
  let { serviceId } = useParams();
  const dispatch = useDispatch();
  const fetchServiceDetail = async () => {
    const response = await api
      .get(API_URL + `${serviceId}`, { headers: authHeader() })
      .catch((err) => console.log("API fetch error", err));

    dispatch(selectedService(response.data));
  };
  const questions = JSON.stringify(
    useSelector((state) => state.service.questions)
  );
  useEffect(() => {
    if (serviceId && serviceId !== "") fetchServiceDetail();
    return () => {
      dispatch(removeSelectedService());
    };
  }, [serviceId]);
  return (
    <div className="ui grid container">
      <p>{questions}</p>
    </div>
  );
};

export default ServiceDetail;
