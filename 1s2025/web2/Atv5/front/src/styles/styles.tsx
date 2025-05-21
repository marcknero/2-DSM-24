import styled, { DefaultTheme } from "styled-components";

export const ButtonBall = styled.button`
background-color: #209869;
color: #fff;
padding: 5px 10px;
margin-right: 10px;
font-size: 20px;
font-weight: bold;
border: none;
border-radius: 20px;
cursor: pointer;
align-items: center;
gap: 8px;
&:hover {
  cursor: default;
  }
`
export const DisplayContainer = styled.div`
    justify-content: center;
    justify-self: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px inherit;
    margin-bottom: 8px;
    gap: px;
    &:hover {
    cursor: default;
    }
  `
  export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px;
    margin: 2px;
    border-radius: 15px;
    box-shadow: 1px 5px 5px inherit;
    background-color: ${(props) => props.theme.background};

`
export const MenuContainer = styled.div`
    display: flex;
    adding: 20px;
    padding:10px;
    color: inherit;
    textDecoration: none;

    & > a {
    text-decoration: none;
    font-size: 18px;
    padding: 8px;
    color: inherit;
    }
    `
export const LogoContainer = styled.div`
    align-self: start;
    padding: 10px;
    text-align: end;
    line-height: 0;

    &:hover {
    cursor: default;
    }
`
export const MegaSenaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
    padding: 20px;
    background-color: ${(props) => props.theme.background};
    border-radius: 8px;
    box-shadow: 0px 4px 10px inherit;
    margin-top: 20px;
`
export const StyledThemeBtn = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1000;
    background-color:  ${(props) => props.theme.background};
    font-size: 30px;
    border-radius: 15%;
    padding: 4px;
    }
`

export const Buttons = styled.button`
background-color: #209869;
color: #fff;
padding: 5px 10px;
margin-right: 10px;
font-size: 15px;
font-weight: bold;
border: none;
border-radius: 20px;
cursor: pointer;
align-items: center;
gap: 8px;
&:hover {
  cursor: default;
  }
`
 export const LightTheme:DefaultTheme = {
    background: "rgba(147, 255, 137, 0.4)",
    color: "rgb(7, 8, 22)",
  };
  
  export const DarkTheme:DefaultTheme = {
    background: "rgba(0, 0, 0, 0.4)",
    color: "rgb(242, 248, 176)",
  };
  
  
 