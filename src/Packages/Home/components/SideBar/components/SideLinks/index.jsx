import React from "react";
import "./styles.scss";
import LinkItem from "./linkItem";
import { languageManager } from "./../../../../../../services";
const NavLinks = props => {
  function translate(key) {
    return languageManager.translate(key);
  }
  const links = [
    {
      name: translate("Products"),
      icon: "item-type",
      path: "/panel/contentType",
      desc: translate("HOME_SIDE_NAV_CONTENT_TYPE_DEC")
    },
    {
      name: translate("Requests"),
      icon: "category",
      path: "/panel/categories",
      desc: translate("HOME_SIDE_NAV_CATEGORIES_DEC")
    },
    {
      name: translate("Quotes"),
      icon: "product",
      path: "/panel/contents",
      desc: translate("HOME_SIDE_NAV_PRODUCTS_DESC")
    },

    {
      name: translate("Users"),
      icon: "request",
      path: "/home/requests",
      desc: translate("HOME_SIDE_NAV_REQUESTS_DESC")
    },
    {
      name: translate("Marketing"),
      icon: "quote",
      path: "/home/quotes",
      desc: translate("HOME_SIDE_NAV_QUOTES_DESC")
    },
  
  ];

  return (
    <>
      <div className="sideLinksTitle">
        {languageManager.translate("HOME_NAVS_TITLE")}
      </div>
      <div className="sideLinks">
        {links.map(link => (
          <LinkItem link={link} key={link.path} />
        ))}
      </div>
    </>
  );
};

export default NavLinks;
