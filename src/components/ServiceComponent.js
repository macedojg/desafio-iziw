import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ServiceComponent = () => {
  const services = useSelector((state) => state.allServices.services);
  const renderList = services.map((service) => {
    const { id, name, icon_path } = service;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/servicos/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={icon_path} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ServiceComponent;
