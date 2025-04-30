import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeCtx";


export function ThemeBtn(){
    const{darkTheme, changeTheme} = useTheme();
    return (<>
        <div>
            <button type="button" onClick={changeTheme}>
                {darkTheme?<FaSun size={20}/>:<FaMoon size={20}/> }
            </button>
        </div>
    </>)
}