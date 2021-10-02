import React, { Component } from "react";
import API from "../utils/API";
import HeroSelect from "./HeroSelect";
import CardDetail from "./CardDetail";
import Container from "./Container";
import { QUERY_CARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const DeckBuild = () => {
  const data = useQuery(QUERY_CARDS);
  handle
  return (
    <Container>
      <HeroSelect
        value={this.state.search}
        handleFormSubmit={this.handleFormSubmit}
      />
      <CardDetail cardname={this.state.result.name} />
    </Container>
  );
};
export default DeckBuild;
