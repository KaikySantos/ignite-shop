import { AppProps } from "next/app"
import Image from "next/image";
import { globalStyles } from "../styles/global"

import { Container, Header } from "../styles/pages/app"

globalStyles();

import logoImg from "../assets/logo.svg"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}