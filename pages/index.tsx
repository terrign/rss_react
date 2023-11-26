import type { NextPage } from "next";
import SearchForm from "../app/components/search/SearchForm/SearchForm";
import { wrapper } from "../app/store";
import { getRunningQueriesThunk, list } from "../app/store/api";
import { adaptPageParams } from "../app/helpers/pagination";
import { CharacterSearchparams } from "../app/models/apiTypes";
import Pagination from "../app/components/search/Pagination/Pagination";
import Details from "../app/components/details/Details";
import { useSearchParams } from "next/navigation";

const Home: NextPage = () => {
  const search = useSearchParams()!;
  return (
    <main style={{ margin: "0 auto", width: "80%" }}>
      <SearchForm />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, gap: 10 }}>
        <Pagination />
        {search.has("details") && <Details id={Number(search.get("details"))} />}
      </div>
    </main>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  if (!context.query.page) {
    context.query = { ...context.query, page: "1" };
  }
  store.dispatch(
    list.initiate(adaptPageParams(context.query as CharacterSearchparams, store.getState().pagination.itemsPerPage))
  );
  await Promise.all(store.dispatch(getRunningQueriesThunk()));
  return {
    props: {},
  };
});

export default Home;
