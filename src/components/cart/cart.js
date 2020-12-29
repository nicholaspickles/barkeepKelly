import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Drawer, Badge, Button, Tooltip } from "antd";
import {
  ShoppingCartOutlined,
  RedoOutlined,
  RightOutlined,
} from "@ant-design/icons";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { setCartVisibility } from "../../redux/ducks/cart";

const Cart = () => {
  const [update, forceUpdate] = useState(0);
  const history = useHistory();
  const cart = useSelector((state) => state.cart.itemsInCart);
  const numInCart = cart.reduce(function (acc, cur) {
    return acc + cur.quantity;
  }, 0);
  const cartTotal = cart.reduce(function (acc, cur) {
    return acc + cur.price;
  }, 0);
  const visibility = useSelector((state) => state.cart.showDrawer);
  const dispatch = useDispatch();
  const showDrawer = () => {
    dispatch(setCartVisibility(true));
  };
  const onClose = () => {
    dispatch(setCartVisibility(false));
  };
  const onCheckout = () => {
    history.push("/checkout");
    // dispatch(setCartVisibility(false));
  };

  const handleRefresh = () => {
    forceUpdate(() => update + 1);
  };

  return (
    <>
      <Badge
        count={0}
        style={{
          backgroundColor: "#3E3F5A",
          color: "white",
          boxShadow: "0 0 1px #d9d9d9 inset",
        }}
      >
        <Button type="text" size="small" onClick={showDrawer}>
          <ShoppingCartOutlined
            style={{ fontSize: "140%", color: "#f6dfec" }}
          />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visibility}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Badge>
    </>
  );
};

export default Cart;
