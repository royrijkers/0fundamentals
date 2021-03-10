import * as React from "react";
import logo from "../images/logo.svg";
import { Helmet } from "react-helmet";
import { ImTelegram } from "react-icons/im";

import { FiCheck, FiTrendingUp, FiCalendar } from "react-icons/fi";
import "./styles.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const BgImg = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bgg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Img
      objectFit="cover"
      fluid={data.file.childImageSharp.fluid}
      {...props}
      alt=""
    ></Img>
  );
};

const ColumnItem = ({ icon, title, data }) => {
  return (
    <div
      style={{
        flex: 1,
        width: "33%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={
          {
            // display: "flex",
            // flexDirection: "column",
            // alignContent: "center",
          }
        }
      >
        {icon}
      </div>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
    </div>
  );
};

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>0Fundamentals | Who cares about fundamentals in crypto?</title>
        <meta
          name="description"
          content="Who cares about fundamentals in crypto? Trade the 0Fundamentals (ZFUN) token"
        />
      </Helmet>
      <BgImg
        // src={bgg}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          height: "100vh",
          objectFit: "cover",
          width: "100%",
          zIndex: -2,
        }}
      ></BgImg>

      <main style={{ padding: "40px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img
            alt="0Fundamentals logo"
            className="logo"
            src={logo}
            style={{}}
          />
        </div>
        <div
          style={{ display: "flex", marginTop: "110px" }}
          className="columnOrRow"
        >
          <ColumnItem
            icon={<FiCheck size="5em" />}
            title="No working product"
          ></ColumnItem>
          <ColumnItem
            icon={<FiTrendingUp size="5em" />}
            title="No Whitepaper"
          ></ColumnItem>
          <ColumnItem
            icon={<FiCalendar size="5em" />}
            title="Not many future plans"
          ></ColumnItem>
        </div>
        <h2 style={{ textAlign: "center", marginTop: "90px" }}>
          What are you waiting for?
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            className="button"
            href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8C0B2ecc326678FAa406D717d89335A32aEf3540"
          >
            Trade ZFUN at PancakeSwap
          </a>
        </div>
        <h2 style={{ marginTop: "60px" }}>Roadmap</h2>
        <ul>
          <li>
            <p>2021 Q1</p>
            <p>Hmmm... not sure</p>
          </li>
          <li>
            <p>2021 Q2</p>
            <p>Not much</p>
          </li>
          <li>
            <p>2021 Q3</p>
            <p>Wait for Q4</p>
          </li>
        </ul>
      </main>
      <footer>
        <p style={{ textAlign: "center" }}>
          ©️2021 0Fundamentals. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default IndexPage;
