import React, { useEffect, useRef } from "react";
import styles from "./Details.module.css";
import api from "../../store/api";
import Loader from "../loader/Loader";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Details = ({ id }: { id: number }) => {
  const search = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const { isLoading, isUninitialized, data, isError } = api.useDetailsQuery({ id });

  const close = () => {
    const newSearch = new URLSearchParams(search);
    newSearch.delete("details");
    router.push(`${pathname}?${newSearch}`);
  };

  const closeOnBackGroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  const closeOnEscPress = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
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
      {isLoading || (isUninitialized && <Loader />)}
      <div className={styles.details}>
        <button
          type="button"
          onClick={close}
          style={{ marginLeft: "auto", width: 30, height: 30, display: "block" }}
          data-testid="closebutton"
        >
          X
        </button>
        <div className={styles.info}>
          <Image
            src={data.image}
            alt="character"
            style={{
              height: "auto",
              width: "auto",
              margin: "0 auto",
            }}
            width="250"
            height="250"
            priority
          />
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
