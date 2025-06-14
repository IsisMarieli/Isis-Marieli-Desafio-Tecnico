import styles from '../components/Header.module.css';
import iconUser from '../assets/AdminSettingsMale.svg';

function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.iconUser} src={iconUser} alt="icon user"/>
      <h1 className={styles.title}>Gestão de Usuários</h1>
    </div>
  );
}

export default Header;
