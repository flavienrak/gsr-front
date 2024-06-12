import "./globals.css";

import ReduxProvider from "@/redux/ReduxProvider";
import UidContextProvider from "@/context/UidContext";
import getCurrentUser from "@/lib/next-auth";

export const metadata = {
  title: "Next App",
  description: "Created by GSR Group",
};

export default async function RootLayout({ children }) {
  const socialInfos = await getCurrentUser();
  return (
    <html lang="fr">
      <body>
        <ReduxProvider>
          <UidContextProvider socialInfos={socialInfos}>
            {children}
          </UidContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
