import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeCtx";
import { StyledThemeBtn } from "../styles/styles";

export function ThemeBtn(){
    const{darkTheme, changeTheme} = useTheme();
    return (
            <StyledThemeBtn onClick={changeTheme}>
                {darkTheme?<FaSun size={20}/>:<FaMoon size={20}/> }
            </StyledThemeBtn>
    )
}

