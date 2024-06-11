"use client";

import qs from "query-string";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

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

  const toastStyle = {
    style: {
      border: "1px solid var(--primary-color)",
      padding: "16px",
      color: "var(--bg)",
      background: "var(--bg-gradient)",
    },
    iconTheme: {
      primary: "var(--bg)",
      secondary: "var(--cont)",
    },
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
          toastStyle,
          loginOut,
          removeQueries,
          setLoadingBar,
        }}
      >
        {children}
        <Toaster />
      </UidContext.Provider>
    );
}
