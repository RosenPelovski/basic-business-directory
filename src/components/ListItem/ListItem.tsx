import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import "./ListItem.css";
type Props = {
  item: Company;
  idx: number;
};
const ListItem: FC<Props> = ({ item, idx }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isHovered, setHovered] = useState(false);

  const handleHover = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.type === "mouseenter") {
      // add background
      setHovered(true);
    } else {
      // remove background
      setHovered(false);
    }
  };

  const onSelect = (index: number) => {
    dispatch({ type: "SET_SELECTED", payload: index });
    navigate("/details");
  };

  return (
    <li
      className="listItem"
      style={isHovered ? { backgroundColor: "#f4f4f5" } : {}}
      onMouseEnter={(e) => handleHover(e)}
      onMouseLeave={(e) => handleHover(e)}
      onClick={(e) => onSelect(idx)}
    >
      <div className="column_1">{item.name}</div>
      <div className="column_2">{item.description}</div>
    </li>
  );
};
export default ListItem;
