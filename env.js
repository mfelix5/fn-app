import { Platform  } from "react-native"

import active from "./active.env"

const envs = {
  local: {
    API_URL: "http://localhost:3000",
    SOUNDS: Platform.OS === "android" || false,
  },
  production: {
    API_URL: "https://farewise.herokuapp.com",
    SOUNDS: Platform.OS === "android" || false,
  },
  development: {
    API_URL: "https://farewise-development.herokuapp.com",
    SOUNDS: Platform.OS === "android" || false,
  }
}

export default envs[active]