import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import List from "../../components/List";
import ListHeader from "../../components/ListHeader";
import { getData } from "../../dataAPI";
import "./ListView.css";
const ListView: FC = () => {
  const dispatch = useAppDispatch();
  const [companyList, setList] = useState<CompanyList>([]);
  useEffect(() => {
    getData().then((data: any) => {
      if (data) {
        setList(data);
        dispatch({ type: "SET_COMPANIES", payload: data });
      }
    });
  }, []);

  return (
    <div className="container">
      <ListHeader columns={["NAME", "DESCRIPTION"]} />
      <div className="scrollContainer">
      <List data={companyList} />
      </div>
    </div>
  );
};
export default ListView;
