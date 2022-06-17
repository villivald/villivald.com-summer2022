import { createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import { translations } from "../intl/translations";

const AppContext = createContext();

export function AppWrapper(props) {
  const [data, setData] = useState([]);

  return (
    <AppContext.Provider value={[data, setData]}>
      <IntlProvider
        locale={data.lang || "en"}
        messages={translations[data.lang || "en"]}
      >
        {props.children}
      </IntlProvider>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
