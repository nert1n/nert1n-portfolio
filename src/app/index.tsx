import "./styles/index.scss";

import axios from "axios";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url.ts";

import { AppRouter } from "./routes";

axios.defaults.baseURL = BACKEND_URL;

const App = () => <AppRouter />;

export default App;
