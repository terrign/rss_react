import { useEffect, useState, useCallback } from "react";
import { useAppSelector } from "../../../store/hooks";
import styles from "./Pagination.module.css";
import paginate from "../../../helpers/paginate";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const PagePicker = ({ totalCount }: { totalCount: number }) => {
  const search = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();
  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage);
  const [totalPages, setTotalPages] = useState(0);
  const currentPage = Number(search.get("page"));

  const isActive = (pageNum: number) => {
    return currentPage === pageNum ? "#43b362" : "#6b6b6b";
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(search);
      params.set(name, value);

      return params.toString();
    },
    [search]
  );

  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / itemsPerPage));
  }, [totalCount, itemsPerPage]);

  const onPageChange = (pageNum: number) => {
    if (pageNum === 0 || pageNum > totalPages) {
      return;
    }
    router.push(`${pathname}?${createQueryString("page", `${pageNum}`)}`);
    // window.scrollTo(0, 0);
  };

  const isDisabled = (value: number) => {
    if (value === 0 || value > totalPages || currentPage === value || totalPages === 1) {
      return true;
    }
    return false;
  };

  return (
    <div className={styles.pages}>
      <button type="button" onClick={() => onPageChange(currentPage - 1)} disabled={isDisabled(currentPage - 1)}>
        {"<"}
      </button>
      {paginate(currentPage, totalPages).map((a) => {
        if (!a) {
          return (
            <div style={{ width: 30, height: 30, textAlign: "center", lineHeight: "45px" }} key={Math.random()}>
              . . .
            </div>
          );
        }
        return (
          <button
            style={{ backgroundColor: isActive(a), border: "none" }}
            type="button"
            key={a + Math.random()}
            onClick={() => onPageChange(a)}
            disabled={isDisabled(a)}
          >
            {a}
          </button>
        );
      })}
      <button type="button" onClick={() => onPageChange(currentPage + 1)} disabled={isDisabled(currentPage + 1)}>
        {">"}
      </button>
    </div>
  );
};

export default PagePicker;
