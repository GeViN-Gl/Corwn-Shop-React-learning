import React from "react";
import MenuItem from "../menu-item/menu-item.component";

//redux
import { useSelector } from "react-redux";
// reselect
import { selectDirectorySection } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = () => {
  const sections = useSelector(selectDirectorySection);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...restSectionProps }) => {
        return <MenuItem key={id} {...restSectionProps} />;
      })}
    </div>
  );
};

export default Directory;
