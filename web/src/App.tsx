import { RootRouter } from "./routes"
import { Provider } from "react-redux"
import { store } from "./store/app/store"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
      <Toaster />
    </Provider>
  )
}

export default App
