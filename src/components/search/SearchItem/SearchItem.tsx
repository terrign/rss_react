import { useSearchParams } from 'react-router-dom';
import styles from './SearchItem.module.css';
import { Character } from '../../../models/apiTypes';

const SearchItem = ({ character }: { character: Character }) => {
  const [, setSearch] = useSearchParams();

  const onClick = () => {
    setSearch((prev) => {
      prev.set('details', String(character.id));
      return prev;
    });
  };
  return (
    <div className={styles.listItem}>
      <img src={character.image} alt={`${character.name}`} />
      <h3>{character.name}</h3>
      <p>
        <b>Origin</b>:&nbsp;{character.origin.name}
      </p>
      <p>
        <b>Status:</b>&nbsp;{character.status}
      </p>
      <button type="button" onClick={onClick}>
        See details
      </button>
    </div>
  );
};

export default SearchItem;
