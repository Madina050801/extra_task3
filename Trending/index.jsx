import React, { Component } from "react";
import { Titles, Wrap, Image } from "./style";

export const Trending = () => {
  return (
    <Wrap>
      <Wrap.Wrapper>
        <Titles>
          <Titles.Title>Trending</Titles.Title>
          <Titles.Menu>
            <Titles.Item>Top Products</Titles.Item>
            <Titles.Item>New Arrivals</Titles.Item>
            <Titles.Item>Best Sellers</Titles.Item>
          </Titles.Menu>
        </Titles>
        <Wrap.Line>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image.Img2 />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
        </Wrap.Line>

        <Wrap.Line>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
        </Wrap.Line>
      </Wrap.Wrapper>
    </Wrap>
  );
};
