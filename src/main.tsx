import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import { setMode, setThemeColor } from "@chrissgon/perfectui";
import "./index.css"
import "@chrissgon/perfectui/dist/perfectui.css";

const theme = {
  50: [237, 253, 254],
  100: [210, 249, 251],
  200: [170, 240, 247],
  300: [111, 228, 241],
  400: [45, 206, 227],
  500: [17, 176, 200],
  600: [17, 141, 169],
  700: [21, 114, 137],
  800: [26, 92, 112],
  900: [26, 77, 95],
  950: [11, 51, 65],
};

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

setMode("dark");
setThemeColor(theme);