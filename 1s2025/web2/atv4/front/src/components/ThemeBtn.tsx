import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeCtx";
import styled from "styled-components";


export function ThemeBtn(){
    const{darkTheme, changeTheme} = useTheme();
    return (
            <StyledThemeBtn onClick={changeTheme}>
                {darkTheme?<FaSun size={20}/>:<FaMoon size={20}/> }
            </StyledThemeBtn>
    )
}

const StyledThemeBtn = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 30px;
    border-radius: 15%;
    padding: 4px;
    }
`