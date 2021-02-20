// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { init } from 'next-firebase-auth'

const initAuth:any = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/auth/login', // required
    logoutAPIEndpoint: '/api/auth/logout', // required
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'slack-f1af1',
        clientEmail: 'firebase-adminsdk-zb7oj@slack-f1af1.iam.gserviceaccount.com',
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        privateKeyId: "d7141bb6ff6d36c0cab28d499e3327fd256f2d55",
        clientId: "104597950845250539314",
        authUri: "https://accounts.google.com/o/oauth2/auth",
        tokenUri: "https://oauth2.googleapis.com/token",
      },
      databaseURL: 'https://my-example-app.firebaseio.com',
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyClpkDbvYjX-gMx06yxK0mUgIF9S0liE1I', // required
      authDomain: 'slack-f1af1.firebaseapp.com',
      databaseURL: 'https://slack-f1af1-default-rtdb.firebaseio.com',
      projectId: 'slack-f1af1',
      storageBucket: "slack-f1af1.appspot.com",
      messagingSenderId: "205308401513",
      appId: "1:205308401513:web:db0d47ae7ba0013d2bcff8",
      measurementId: "G-9R6729X7GC"
    },
    cookies: {
      name: 'ExampleApp', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NEXT_PUBLIC_NODE_PRODUCTION === "true", // set this to false in local (non-HTTPS) development
      signed: true,
    },
  })
}

export default initAuth