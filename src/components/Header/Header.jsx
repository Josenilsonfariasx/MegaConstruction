import logo from "../../assets/logo.png"
import style from "./style.module.scss"

export const Header = () =>{
    return (
        <header>
            <div className="container">
                <div className={style.flexBox}>
                    <img src={logo} alt="Logo Construction" />
                </div>
            </div>
        </header>
    )
}