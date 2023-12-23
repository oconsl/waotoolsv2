import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { firebaseConfig } from 'src/configs/fireCnf'

// import { getFirestore } from "firebase/firestore"

let app
let analytics
let db
if (typeof window != undefined) {
  app = initializeApp(firebaseConfig)
  analytics = isSupported().then(yes => (yes ? getAnalytics(app) : null))

  // db = getFirestore(app)
}

export { app, analytics, db }
