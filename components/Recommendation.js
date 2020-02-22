import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { AppModal } from "../components/AppModal";
import { HeadingText } from "./HeadingText";

export function Recommendation({ setRecommendationOpen, system }) {
  const [a, b] = useState(false);
  return (
    <AppModal onBack={() => setRecommendationOpen(false)}>
      <HeadingText>Recommendation</HeadingText>
    </AppModal>
  );
}

const styles = StyleSheet.create({
});
