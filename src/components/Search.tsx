import React from 'react';
import api from '../api/ApiClient.ts';
import { Starship } from '../models/apiTypes.ts';
import SearchList from './SearchList.tsx';
import LocalStorage from '../util/LocalStorage.ts';
import styles from './Search.module.css';

class Search extends React.Component<unknown, { items: Starship[]; loading: boolean }> {
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props = {}) {
    super(props);
    this.state = { items: [], loading: false };
    this.inputRef = React.createRef();
  }

  componentDidMount(): void {
    if (LocalStorage.has('searchTerm')) {
      this.inputRef.current!.value = LocalStorage.get('searchTerm') as string;
    }
    this.onSearch();
  }

  private async onSearch() {
    this.setState((prev) => ({ ...prev, loading: true }));
    const res = await api.getStarships(this.inputRef.current?.value);
    this.setState({ items: res.results, loading: false });
    LocalStorage.set('searchTerm', this.inputRef.current?.value as string);
  }

  private async onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    this.onSearch();
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit.bind(this)} className={styles.searchForm}>
          <input type="text" ref={this.inputRef} />
          <button type="button" onClick={this.onSearch.bind(this)}>
            Search
          </button>
        </form>
        <SearchList items={this.state.items} loading={this.state.loading} />
      </>
    );
  }
}

export default Search;
