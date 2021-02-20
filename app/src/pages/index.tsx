import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { State, wrapper } from "../redux/store";
import Image from "next/image";
import { countActions } from "../redux/countReducer";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useAuthUser, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import { useEffect } from "react";

function Home(): JSX.Element {
  const {
    count: { count, update },
  } = useSelector((state: State) => state);

  const dispatch = useDispatch();

  const AuthUser = useAuthUser();

  useEffect(() =>{
    console.log("auther", AuthUser);
  },[AuthUser])

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

export default Home;

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
export const getServerSideProps = withAuthUserTokenSSR({})(async ({ AuthUser }) => {
  // Optionally, get other props.
  const token = await AuthUser.getIdToken()
  console.log(token);

  return {
    props: {
      thing: token
    }
  }
})

