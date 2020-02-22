import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { AppModal } from "../components/AppModal";
import { PromptText } from "./PromptText";

export function Recommendation({ setRecommendationOpen, system }) {
  const [a, b] = useState(false);
  return (
    <AppModal onBack={() => setRecommendationOpen(false)}>
      <PromptText>Recommendation</PromptText>
    </AppModal>
  );
}

const styles = StyleSheet.create({
});
