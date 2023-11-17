import { useNavigation } from 'react-router-dom';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  const nav = useNavigation();

  if (nav.state === 'loading') return <div className={styles.ring} />;
  return null;
};

export default Loader;
