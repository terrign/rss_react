import React from 'react';
import api from '../api/ApiClient.ts';
import { Starship } from '../models/apiTypes.ts';

class Search extends React.Component<unknown, { items: Starship[] }> {
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props = {}) {
    super(props);
    this.state = { items: [] };
    this.inputRef = React.createRef();
  }

  private async onSearch() {
    const res = await api.getStarships(this.inputRef.current?.value);
    this.setState(() => ({ items: res.results }));
  }

  private async onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    this.onSearch();
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref={this.inputRef} />
          <button type="button" onClick={this.onSearch.bind(this)}>
            Search
          </button>
        </form>
        <div>{JSON.stringify(this.state.items)}</div>
      </>
    );
  }
}

export default Search;
