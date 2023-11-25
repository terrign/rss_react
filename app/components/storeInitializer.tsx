"use client";
import { PropsWithChildren, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { paginationSlice } from "../store/pagination.slice";
import { searchSlice } from "../store/search.slice";

const StoreInitializer = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const items = localStorage.getItem("itemsPerPage");
      const term = localStorage.getItem("searchTerm");

      console.log(items, term);

      if (items) {
        dispatch(paginationSlice.actions.setitemsPerPage(Number(items)));
      } else {
        localStorage.setItem("itemsPerPage", "20");
      }

      if (term) {
        dispatch(searchSlice.actions.searchTerm(term));
      }
    }
  }, [dispatch]);

  return children;
};

export default StoreInitializer;
