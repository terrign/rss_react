import type { NextPage } from 'next';
import SearchForm from '../app/components/search/SearchForm/SearchForm';
import { wrapper } from '../app/store';
import { getRunningQueriesThunk, list } from '../app/store/api';
import { adaptPageParams } from '../app/helpers/pagination';
import { CharacterSearchparams } from '../app/models/apiTypes';
import Pagination from '../app/components/search/Pagination/Pagination';
import Details from '../app/components/details/Details';
import { useSearchParams } from 'next/navigation';
interface Props {
  itemsPerPage: number;
}

const Home: NextPage<Props> = ({ itemsPerPage }: Props) => {
  const search = useSearchParams()!;
  return (
    <main style={{ margin: '0 auto', width: '80%' }}>
      <SearchForm />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, gap: 10 }}>
        <Pagination itemsPerPage={itemsPerPage} />
        {search.has('details') && <Details id={Number(search.get('details'))} />}
      </div>
    </main>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  if (!context.query.page) {
    return {
      redirect: {
        destination: '/?page=1',
        permanent: false,
      },
    };
  }
  const items = context.req.cookies.itemsPerPage ?? 10;
  store.dispatch(list.initiate(adaptPageParams(context.query as CharacterSearchparams, Number(items))));
  await Promise.all(store.dispatch(getRunningQueriesThunk()));
  return {
    props: { itemsPerPage: Number(items) },
  };
});

export default Home;
