import styles from '../components/Header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gestão de Usuários</h1>
    </div>
  );
}

export default Header;
