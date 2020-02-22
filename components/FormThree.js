import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Recommendation } from "../components/Recommendation";
import { AppModal } from "../components/AppModal";
import { AppButton } from "../components/AppButton";
import { HeadingText } from "./HeadingText";

export function FormThree({ setFormThreeOpen, system }) {
  const [recommendationOpen, setRecommendationOpen] = useState(false);
  return (
    <AppModal onBack={() => setFormThreeOpen(false)}>
      <HeadingText>Form 3</HeadingText>
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
