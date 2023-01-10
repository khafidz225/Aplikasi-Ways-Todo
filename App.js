import * as React from "react";
// import { StatusBar } from "expo-status-bar";
import { Box, Text, NativeBaseProvider } from "native-base";
import Container from "./Container";

export default function App() {
  return (
    <NativeBaseProvider>
      <Container />
    </NativeBaseProvider>
  );
}
