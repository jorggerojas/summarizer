import { useEffect } from 'react'

const firebaseConfig: Record<string, string> = {
  apiKey: import.meta.env.VITE_API_KEY ?? '',
  authDomain: import.meta.env.VITE_AUTH_DOMAIN ?? '',
  projectId: import.meta.env.VITE_PROJECT_ID ?? '',
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET ?? '',
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ?? '',
  appId: import.meta.env.VITE_APP_ID ?? '',
  measurementId: import.meta.env.VITE_MEASUREMENT_ID ?? ''
}

const Firebase = (): JSX.Element => {
  useEffect(() => {
    if (firebaseConfig.apiKey === '' || firebaseConfig.appId === '') return

    const firebaseApp = import('firebase/app')
    const analytics = import('firebase/analytics')
    const performance = import('firebase/performance')
    Promise.all([firebaseApp, analytics, performance]).then(
      ([firebase, info, performance]) => {
        const app = firebase.initializeApp(firebaseConfig)
        info.getAnalytics(app)
        performance.getPerformance(app)
      }
    ).catch((error) => {
      console.error('Firebase failed to load', error)
    })
  }, [firebaseConfig])
  return <></>
}

export default Firebase
