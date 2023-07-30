import logo from "../../assets/logo.png"
import style from "./style.module.scss";

export const Footer = () =>{
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.flexBox}>
                <img src={logo} alt="Logo" />
                <p className="paragraph white">Todos os direitos reservados -<strong>Josenilson Farias</strong></p>
                </div>
            </div>
        </footer>
    )
}