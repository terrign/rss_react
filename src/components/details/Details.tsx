import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Details.module.css';
import api from '../../store/api';
import Loader from '../loader/Loader';

const Details = ({ id }: { id: number }) => {
  const [, setSearch] = useSearchParams();
  const ref = useRef<HTMLDivElement>(null);
  const { isLoading, isUninitialized, data, isError } = api.useDetailsQuery({ id });

  const close = () => {
    setSearch((prev) => {
      prev.delete('details');
      return prev;
    });
  };

  const closeOnBackGroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  const closeOnEscPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    ref.current?.focus();
  }, []);

  if (isLoading || isUninitialized) {
    return <Loader />;
  }

  if (isError) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={styles.blackout}
      onClick={closeOnBackGroundClick}
      role="button"
      data-testid="blackout"
      onKeyDown={closeOnEscPress}
      tabIndex={0}
    >
      <div className={styles.details}>
        <button
          type="button"
          onClick={close}
          style={{ marginLeft: 'auto', width: 30, height: 30, display: 'block' }}
          data-testid="closebutton"
        >
          X
        </button>
        <div className={styles.info}>
          <img src={data.image} alt="character" />
          <div>
            <h2>{data.name}</h2>
            <p>
              <b>Origin</b>:&nbsp;{data.origin.name}
            </p>
            <p>
              <b>Location</b>:&nbsp;{data.location.name}
            </p>
            <p>
              <b>Species</b>:&nbsp;{data.species}
            </p>
            <p>
              <b>Status</b>:&nbsp;{data.status}
            </p>
            <p>
              <b>Gender</b>:&nbsp;{data.gender}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
