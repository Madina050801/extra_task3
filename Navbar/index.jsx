import React, { Component } from "react";
import { Wrap } from "./style";

export const Navbar = () => {
  return (
    <Wrap>
      <Wrap.Logo>
        <Wrap.LogoIcon /> Furniking
      </Wrap.Logo>
      <Wrap.Input placeholder="Search here" />
      <Wrap.Select name="cars">
        {/* <option value="select" selected disabled>
        Categories
      </option>
      <option value="price">Price</option>
      <option value="cate">Categories</option> */}
      </Wrap.Select>
      <Wrap.Button>
        <Wrap.Search />
      </Wrap.Button>
      <Wrap.IconContainer>
        <Wrap.Bang />
        <Wrap.Basket />
        <Wrap.User />
      </Wrap.IconContainer>
    </Wrap>
  );
};
