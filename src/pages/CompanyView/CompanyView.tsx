import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import "./CompanyView.css";
const CompanyView: FC = () => {
  const appState = useSelector((state: RootState) => state.main);
  let { selectedCompany, companyList, selectedCompanyIndex } = appState;

  const getNearby = (place: string) => {
    let places: CompanyList = [];
    if (companyList) {
      places = companyList.filter(({ address }: Company, i: number) => {
        return address.city === place && i !== selectedCompanyIndex;
      });
    }
    return places;
  };

  if (selectedCompany) {
    let { image, phone, email, address } = selectedCompany;
    let { number, street, zip, city } = address;
    return (
      <div className="container">
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
        <div className="description">
          <div className="section">
            <div className="title">{"Address"}</div>
            <div className="text">{`${number} ${street}`}</div>
            <div className="text">{`${city}, ${zip}`}</div>
          </div>
          <div className="section">
            <div className="title">{"Contact"}</div>
            <div className="text">{`${phone}`}</div>
            <div className="text">{`${email}`}</div>
          </div>
          <div className="places">
            <div className="title">{"Nearby Places"}</div>
            {getNearby(city).map(({ name, address }) => {
              let { number, street, zip } = address;
              return (
                <div className="entity">
                  <div style={{ textAlign: "left", flex: 1 }}>{`${name}`}</div>
                  <div
                    style={{ textAlign: "left", flex: 3 }}
                  >{`${number} ${street}, ${city} ${zip}`}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container">{"Something went wrong"}</div>;
  }
};
export default CompanyView;
