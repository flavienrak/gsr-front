"use client";

import qs from "query-string";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, createContext, useState } from "react";

export const UidContext = createContext();

export default function UidContextProvider({ children }) {
  const path = usePathname();
  const params = useSearchParams();

  const [widthProgressBar, setWidthProgressBar] = useState(0);
  const [userId, setUserId] = useState(null);
  const [isLoadingJWT, setIsLoadingJWT] = useState(null);
  const [currentQuery, setCurrentQuery] = useState({});
  const [showLogout, setShowLogout] = useState(false);

  // update current query
  useEffect(() => {
    const newParams = qs.parse(params?.toString());
    setCurrentQuery(newParams);
  }, [params]);

  const removeQueries = (values) => {
    return Object.keys(currentQuery).reduce((nouvelObjet, cle) => {
      if (!values.includes(cle)) {
        nouvelObjet[cle] = currentQuery[cle];
      }
      return nouvelObjet;
    }, {});
  };

  const setLoadingBar = (value) => {
    if (!isNaN(value)) {
      const numericValue = Number(value);
      if (Number.isInteger(numericValue)) {
        setWidthProgressBar(numericValue);
      }
    }
  };

  const loginOut = (value) => {
    setShowLogout(value);
  };

  if (typeof window !== "undefined")
    return (
      <UidContext.Provider
        value={{
          path,
          userId,
          showLogout,
          isLoadingJWT,
          currentQuery,
          widthProgressBar,
          loginOut,
          removeQueries,
          setLoadingBar,
        }}
      >
        {children}
      </UidContext.Provider>
    );
}
