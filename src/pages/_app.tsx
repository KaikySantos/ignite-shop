import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import { Container, Header } from "../styles/pages/app"

globalStyles();

import logoImg from "../assets/logo.svg"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}