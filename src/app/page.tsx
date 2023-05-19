"use client";
import { Button } from "@mui/material";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Hero/>
      </Container>
    </>
  );
}
