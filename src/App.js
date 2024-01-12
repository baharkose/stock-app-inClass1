import { createTheme, ThemeProvider } from "@mui/material/styles"
import AppRouter from "./router/AppRouter"
import { grey, blueGrey } from "@mui/material/colors"
import { Provider } from "react-redux"
import store, { persistor } from "./app/store"
import { ToastContainer } from "react-toastify"
import { PersistGate } from "redux-persist/integration/react"
import storage from 'redux-persist/lib/storage/session'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  })
  return (
    <>
    {/* aslında özel verilerin bu şekilde saklanması sakıncalı. http only cookie js erişemiyor sadece sadece protokol erişebilir. */}
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  )
}

export default App
