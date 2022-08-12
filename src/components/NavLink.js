import styles from './Navlink.module.css';

function NavLink({to, text}) {
    return <a className={styles.navLink} href={to}>{text}</a>
}

export default NavLink;
