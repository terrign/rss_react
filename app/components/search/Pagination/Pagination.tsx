import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setitemsPerPage } from "../../../store/pagination.slice";
import api from "../../../store/api";
import Loader from "../../loader/Loader";
import SearchList from "../SearchList/SearchList";
import PagePicker from "./PagePicker";
import styles from "./Pagination.module.css";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { adaptPageParams, paginateData } from "../../../hooks/usePagination";
import { CharacterSearchparams } from "../../../models/apiTypes";
import { useCallback } from "react";

const Pagination = () => {
  const search = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = Number(search.get("page"));

  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage);
  const dispatch = useAppDispatch();
  const { isLoading, isUninitialized, data, isError } = api.useListQuery(
    adaptPageParams(Object.fromEntries(search) as CharacterSearchparams, itemsPerPage)
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(search);
      params.set(name, value);

      return params.toString();
    },
    [search]
  );

  const onItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setitemsPerPage(Number(event.target.value)));
    localStorage.setItem("itemsPerPage", event.target.value);
    router.push(`${pathname}?${createQueryString("page", "1")}`);
  };

  if (isLoading || isUninitialized) {
    return <Loader />;
  }

  if (isError) {
    return <p>Nothing found</p>;
  }

  return (
    <div>
      <SearchList items={paginateData(data.results, itemsPerPage, currentPage)} />
      <div className={styles.paginationContainer}>
        <PagePicker totalCount={data.info.count} />
        <label htmlFor="select" style={{ height: 30 }}>
          Items per Page:
          <select
            id="select"
            data-testid="select"
            value={itemsPerPage}
            style={{ marginLeft: 5, height: 30, width: 50 }}
            onChange={onItemsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Pagination;
