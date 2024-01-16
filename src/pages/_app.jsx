import ResetStyle from "@/styles";
import { FileContextProvider } from "../contexts/FileContext";
import { UserProvider } from "@/contexts/UserContext";
import "@/styles/font.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <FileContextProvider>
          <ResetStyle />
          <Component {...pageProps} />
        </FileContextProvider>
      </UserProvider>
    </>
  );
}
