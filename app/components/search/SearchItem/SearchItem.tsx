import styles from "./SearchItem.module.css";
import { Character } from "../../../models/apiTypes";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const SearchItem = ({ character }: { character: Character }) => {
  const search = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();

  // const createQueryString = useCallback(
  //   (name: string, value: string) => {
  //     const params = new URLSearchParams(search);
  //     params.set(name, value);

  //     return params.toString();
  //   },
  //   [search]
  // );

  const onClick = () => {
    console.log(router, pathname, search);
  };

  return (
    <div className={styles.listItem}>
      <Image
        src={character.image}
        alt={`${character.name}`}
        style={{
          width: 250,
          height: "auto",
          margin: "0 auto",
        }}
        width="250"
        height="250"
        priority
      />
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
