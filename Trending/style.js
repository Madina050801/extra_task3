import styled from "styled-components";
import trending1 from "../../assets/img/trending1.png";
import trending2 from "../../assets/img/trending2.png";

export const Image = styled.img.attrs({
  src: `${trending1}`,
})``;

Image.Img2 = styled.img.attrs({
  src: `${trending2}`,
})``;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 110px;
`;

Wrap.Wrapper = styled.div``;

Wrap.Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

Wrap.Card = styled.div`
  width: 270px;
  height: 350px;
  margin: 15px;
`;

export const Titles = styled.div``;

Titles.Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  color: #555555;
  padding: 0 auto;
  display: flex;
  justify-content: center;
`;

Titles.Menu = styled.div`
  display: flex;
  justify-content: center;
`;

Titles.Item = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  padding: 35px;

  color: #c2c2c2;
`;

Titles.Name = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.008em;
  text-transform: uppercase;
  color: rgba(117, 117, 117, 0.71);
  margin: 15px 0 9px 0;
`;

Titles.Desc = styled.div`
  font-weight: normal;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.005em;
  color: #555555;
`;

Titles.Price = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.005em;
  color: #7ac751;
  margin-top: 13px;
`;
