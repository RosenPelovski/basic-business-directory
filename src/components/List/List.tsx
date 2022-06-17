import React, { FC, useEffect, useState } from "react";
import ListItem from "../ListItem";
import "./List.css";
type Props = {
  data: CompanyList;
};
const List: FC<Props> = ({ data }) => {
  return ( 
      <ul className="List" >
        {data.map((item, i) => (
          <ListItem item={item} idx={i} />
        ))}
      </ul>
  );
};
export default List;
