import styles from '../components/Footer.module.css';
import Wesafer from '../assets/LOGO - WESAFER.svg'
import Avantia from '../assets/LOGO - AVANTIA.svg'

function Footer() {
    return (
        <div className={styles.container}>
        <div className={styles.logos}>
            <img className={styles.logoWesafer} src={Wesafer} alt="logo wesafer" title="logo wesafer" />
            <img className={styles.logoAvantia} src={Avantia} alt="logo avantia" title="logo avantia" />
            <p>Copyright | 2025 <a href="https://github.com/IsisMarieli" target="_blank">Isis Marieli</a></p>
        </div>
        </div>
    );
}

export default Footer;
