import { NavLink } from "react-router-dom";
import logo from "../../assets/icons8-steam.svg";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__body}>
                    <div className={styles.logo_text}>
                        <NavLink exact to="/"><img src={logo} alt="logo" /></NavLink>
                        <div className={styles.text}>Steam Store Simulator</div>
                    </div>
                    <NavLink activeClassName={styles.active} exact to="/">Main</NavLink>
                    <NavLink activeClassName={styles.active} to="/score" >Score</NavLink>
                    <NavLink activeClassName={styles.active} to="/about">About</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;