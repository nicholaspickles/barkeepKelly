import React, { useState, useEffect } from "react";

import { Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { TopRightIcons, NavBarLink } from "../styles";

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    backgroundColor: "#203d35",
    position: "fixed",
    zIndex: 1,
    width: "100%",
    transition: "top 0.3s",
    paddingTop: "2vh",
  };

  return (
    <div
      style={{
        ...navbarStyles,
        top: visible ? "0" : "-60px",
      }}
    >
      <Row>
        <Col span={12} style={{ textAlign: "center" }}>
          <NavBarLink>Products</NavBarLink>
        </Col>
        <Col span={12} style={{ textAlign: "center" }}>
          <NavBarLink>Featured</NavBarLink>
        </Col>
      </Row>
      <TopRightIcons>
        <ShoppingCartOutlined />
      </TopRightIcons>
    </div>
  );
};

export default Navbar;
