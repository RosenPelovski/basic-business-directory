import React, { FC, useEffect, useState } from "react";
import "./ListHeader.css";
type Props = {
  columns: any;
};
const ListHeader: FC<Props> = ({ columns }) => {
  return (
    <li className="listHeader">
      {columns.map((label: string, i: number) => (
        <div className="column" style={{ flex: i+1 }}>
          {label}
        </div>
      ))}
    </li>
  );
};
export default ListHeader;
