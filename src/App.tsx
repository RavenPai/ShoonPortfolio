import { Suspense, lazy } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Loading from './components/ui/Loading'

const Home = lazy(() => import('./pages/Home'))

const App = () => {
  return (
    <ThemeProvider>
      <Suspense
        fallback={
          <div className="min-h-screen bg-background flex items-center justify-center">
            <Loading />
          </div>
        }
      >
        <Home />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
