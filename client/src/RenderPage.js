import React from "react";
import { useParams } from "react-router-dom";
import Notfound from "./components/Notfound";

const RenderPageName = (Pn) => {
  const comp = () => require(`./pages/${Pn}`).default;

  try {
    return React.createElement(comp());
  } catch (error) {
    return <Notfound />;
  }
};

const RenderPage = () => {
  const { page, id } = useParams();
  let pageName = "";
  if (id) {
    pageName = `${page}/[id]`;
  } else {
    pageName = `${page}`;
  }
  //   console.log(useParams());
  //   console.log(pageName);
  return RenderPageName(pageName);
};

export default RenderPage;
