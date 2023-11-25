import type { NextPage } from "next";
import SearchForm from "../app/components/search/SearchForm/SearchForm";
import { wrapper } from "../app/store";
import { getRunningQueriesThunk, list } from "../app/store/api";
import { adaptPageParams } from "../app/hooks/usePagination";
import { CharacterSearchparams } from "../app/models/apiTypes";
import Pagination from "../app/components/search/Pagination/Pagination";
// import Details from "../app/components/details/Details";

{
  /* {search.has("details") && <Details id={Number(search.get("details"))} />} */
}

const Home: NextPage = () => {
  return (
    <main style={{ margin: "0 auto", width: "80%" }}>
      <SearchForm />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, gap: 10 }}>
        <Pagination />
      </div>
    </main>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  console.log(context.query);
  if (!context.query.page) {
    context.query = { ...context.query, page: "1" };
  }
  console.log(store.getState().pagination.itemsPerPage);
  console.log(store.getState().search);
  store.dispatch(
    list.initiate(adaptPageParams(context.query as CharacterSearchparams, store.getState().pagination.itemsPerPage))
  );
  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});

export default Home;
