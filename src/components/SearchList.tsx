import React from 'react';
import { Starship } from '../models/apiTypes.ts';
import styles from './SearchList.module.css';
import Loader from './Loader.tsx';

interface SearchListProps {
  items: Starship[];
  loading: boolean;
}

class SearchList extends React.Component<SearchListProps> {
  constructor(props: SearchListProps) {
    super(props);
  }

  renderItems() {
    if (this.props.loading) {
      return <Loader />;
    }
    if (!this.props.loading && this.props.items.length === 0) {
      return <p>Nothing found</p>;
    }
    return this.props.items.map((a) => (
      <div key={a.name} className={styles.listItem}>
        <h3>Name: {a.name}</h3>
        <h4>Model: {a.model}</h4>
        <p>Class: {a.starship_class}</p>
        <p>Cargo capacity: {a.cargo_capacity}</p>
      </div>
    ));
  }

  render() {
    return <div className={styles.list}>{this.renderItems()}</div>;
  }
}

export default SearchList;
