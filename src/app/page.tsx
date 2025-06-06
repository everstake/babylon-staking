"use client";

import { initBTCCurve } from "@babylonlabs-io/btc-staking-ts";
import { useEffect } from "react";

import { StakingForm } from "@/app/components/Staking/StakingForm";

import { Banner } from "./components/Banner/Banner";
import { Container } from "./components/Container/Container";
import { Activity } from "./components/Delegations/Activity";
import { EsFooter } from "./components/EsFooter/EsFooter";
import { FAQ } from "./components/FAQ/FAQ";
import { Header } from "./components/Header/Header";
import { PersonalBalance } from "./components/PersonalBalance/PersonalBalance";
import { Stats } from "./components/Stats/Stats";

const Home = () => {
  useEffect(() => {
    initBTCCurve();
  }, []);

  return (
    <>
      <Banner />
      <Header />

      <Container
        as="main"
        className="-mt-[10rem] md:-mt-[6.5rem] flex flex-col gap-12 md:gap-16 pb-16"
      >
        <Stats />
        <PersonalBalance />
        <StakingForm />
        <Activity />
        <FAQ />
      </Container>

      <EsFooter />
    </>
  );
};

export default Home;
