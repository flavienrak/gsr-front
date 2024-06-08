import "./globals.css";

import ReduxProvider from "@/redux/ReduxProvider";
import UidContextProvider from "@/context/UidContext";

export const metadata = {
  title: "Next App",
  description: "Created by GSR Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ReduxProvider>
          <UidContextProvider>{children}</UidContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
