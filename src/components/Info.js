import React from "react";
import { Info, Text, Cc, Logo, Link } from "./Info.style.js";

function InfoComponent() {
  return (
    <Info>
      <Logo src="images/logo-guo.svg" alt="Logo Groeten Uit Oss" />

      <Text>
        <p>
          Sinds eind 2017 documenteer ik Oss in foto’s. Niet alleen als hobby
          maar ook om mijn gemeente beter te leren kennen. En wie weet ga ik ook
          jou leren kennen. Ik werk zelfstandig en onafhankelijk zonder
          winstoogmerk. De gepubliceerde foto’s zijn dan ook vrij te gebruiken
          voor niet-commerciele doeleinden. Heb je een tip voor een leuke foto?
          Laat het gerust weten via{" "}
          <Link href="mailto:wouter@bososs.nl">wouter@bososs.nl</Link> of via
          Facebook, Instagram of Twitter.
        </p>
        <p style={{ marginBottom: "4rem" }}>
          Tot ziens!
          <br />
          Wouter Bos
        </p>

        <p>
          <b>
            Bekijk nieuwe foto’s op{" "}
            <Link href="https://www.facebook.com/GroetenUitOss/">Facebook</Link>
            ,{" "}
            <Link href="https://www.instagram.com/groetenuitoss/">
              Instagram
            </Link>
            , <Link href="https://twitter.com/WouterBosOss">Twitter</Link>.
          </b>
        </p>
      </Text>

      <Cc>
        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          <img
            src="images/cc.svg"
            alt="Creative Commons licentie"
            title="Creative Commons Naamsvermelding 4.0 Internationaal-licentie"
          />
        </a>
      </Cc>
    </Info>
  );
}

export default InfoComponent;
