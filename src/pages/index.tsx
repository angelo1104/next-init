import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { State, wrapper } from "../redux/store";
import Image from "next/image";
import { countActions } from "../redux/countReducer";

export default function Home(): JSX.Element {
  const {
    count: { count, update },
  } = useSelector((state: State) => state);

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={"/nextjs-logo.png"} width={300} height={200} />

        <div className={styles.button_container}>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(countActions.decrement(null));
            }}
          >
            -
          </button>
          <p className={styles.count}>{count}</p>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(countActions.increment(null));
            }}
          >
            +
          </button>
        </div>

        <input
          type="number"
          className={styles.input}
          value={update}
          onChange={(event) => {
            dispatch(countActions.setUpdate(parseFloat(event.target.value)));
          }}
        />
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store, req, res, ...etc }) => {
    store.dispatch(countActions.setUpdate(2));
  },
);
