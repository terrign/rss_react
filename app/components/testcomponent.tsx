import { useAppSelector } from "../store/hooks";

const Test = () => {
  const data = useAppSelector((state) => state.pagination.itemsPerPage);
  return <div>{data}</div>;
};
export default Test;
