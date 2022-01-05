import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Basket } from "../../assets/icons/basket.svg";
import { ReactComponent as Bang } from "../../assets/icons/bang.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";

export const Wrap = styled.div`
  width: 100%;
  height: 92px;
  background-color: #fff;
  display: flex;
  align-items: center;
`;

Wrap.Logo = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #555555;
  display: flex;
  align-items: center;

  margin-left: 155px;
`;

Wrap.LogoIcon = styled(Logo)`
  width: 31px;
  height: 38px;
  padding: 5px;
`;

Wrap.Input = styled.input`
  width: 403px;
  height: 46px;
  border: 2px solid #7ac751;
  box-sizing: border-box;
  border-radius: 8px 0 0 8px;
  border-right: none;
  outline: none;
  padding-left: 25px;
  margin-left: 120px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* color: #b0b0b0; */
`;

Wrap.Select = styled.select`
  width: 123px;
  height: 46px;
  border: 2px solid #7ac751;
  box-sizing: border-box;
  border-right: none;
  border-left: 2px solid rgba(227, 227, 227, 0.78);
  outline: none;
  padding: 10px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #555555;
`;

Wrap.Button = styled.button`
  width: 55px;
  height: 46px;
  background: #7ac751;
  border-radius: 0px 7px 6px 0px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
`;

Wrap.IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 169px;
`;

const common = css`
  width: 24px;
  height: 24px;
  margin-left: 31px;
`;

Wrap.Search = styled(Search)`
  width: 16px;
  height: 16px;
  fill: black; 
`;
Wrap.Bang = styled(Bang)`
  ${common}
`;
Wrap.Basket = styled(Basket)`
  ${common}
`;
Wrap.User = styled(User)`
  ${common}
`;
