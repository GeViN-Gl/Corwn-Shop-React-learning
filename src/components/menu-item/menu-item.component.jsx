import React from "react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  let resolvedPath = useResolvedPath(linkUrl);
  console.log(resolvedPath);
  console.log(title, imageUrl, size, linkUrl);
  return (
    <figure
      onClick={() => {
        // console.log(
        //   `Hi, i'm resolvedPath, and i return "to" obj for navigate: `,
        //   resolvedPath
        // );
        navigate(resolvedPath);
      }}
      className={`${size ? size + " " : ""}menu-item`}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <figcaption className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </figcaption>
    </figure>
  );
};

export default MenuItem;
