import React from 'react';
const AptManagementIndividual = ({ data }) => {
  return (
    <div className="apartmentManagement-first">
      <div className="apartmentManagement-text">
        <div className="apartmentManagement-text--firstPar">{data.title}</div>
        <div className="apartmentManagement-text--secondPar">{data.text}</div>
      </div>
      <div className="apartmentManagement-container">
        <div className="apt-service-1">
          {data.options.map((item, index) => {
            return (
              <div
                key={item}
                className={`apt-service-1-items ${data.class}-1-${index + 1}`}
              >
                {item}
              </div>
            );
          })}
        </div>

        <div className="apt-service-2" />
        <div className="apt-service-3">
          {data.numbers.map((item, index) => {
            return (
              <div
                key={item}
                className={`apt-service-3-items ${data.class}-3-${index + 1}`}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="apt-service-4">
          {data.filter.map((item, index) => {
            return (
              <div
                key={item}
                className={`apt-service-4-items ${data.class}-4-${index + 1}`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AptManagementIndividual;
