import styles from "./SearchForm.module.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { searchSlice } from "../../../store/search.slice";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const SearchForm = () => {
  const search = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const term = useAppSelector((state) => state.search.searchTerm);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newSearch = new URLSearchParams(search);
    newSearch.set("page", "1");
    if (!term) {
      newSearch.delete("name");
    } else {
      newSearch.set("name", term);
      localStorage.setItem("searchTerm", term);
    }

    router.push(`${pathname}?${newSearch}`);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    dispatch(searchSlice.actions.searchTerm(value));
  };

  return (
    <form onSubmit={onSubmit} className={styles.searchForm} data-testid="form">
      <input type="text" value={term ?? ""} onChange={onChange} placeholder="Character name" id="searchInput" />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
