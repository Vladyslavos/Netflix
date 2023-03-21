import React from "react";
import Main from "../main/Main";
import Row from "../row/Row";
import requests from "../../requests/Requests";
import Info from "../info/Info";
import Footer from "../footer/Footer";

export default function Home() {
  return (
    <>
      <Main />
      <Row rowId={1} title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowId={2} title="Popular" fetchURL={requests.requestPopular} />
      <Row rowId={3} title="Trending" fetchURL={requests.requestTrending} />
      <Row rowId={4} title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowId={5} title="Horror" fetchURL={requests.requestHorror} />
      <Info />
    </>
  );
}
