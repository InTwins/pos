import { RootRouter } from "./routes"
import { Provider } from "react-redux"
import { store } from "./store/app/store"

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  )
}

export default App
