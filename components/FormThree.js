import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Recommendation } from "../components/Recommendation";
import { AppModal } from "../components/AppModal";
import { AppButton } from "../components/AppButton";
import { Prompt } from "./Prompt";

export function FormThree({ setFormThreeOpen, system }) {
  const [recommendationOpen, setRecommendationOpen] = useState(false);
  return (
    <AppModal onBack={() => setFormThreeOpen(false)}>
      <Prompt includeHR>How many one way trips will you make between *origin* and *destination*?</Prompt>
      <AppButton
        buttonText="Ok, all set!"
        handlePress={() => setRecommendationOpen(true)}
      />
      {recommendationOpen && <Recommendation setRecommendationOpen={setRecommendationOpen} />}
    </AppModal>
  );
}

const styles = StyleSheet.create({
});
