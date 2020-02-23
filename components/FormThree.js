import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Recommendation } from "../components/Recommendation";
import { AppModal } from "../components/AppModal";
import { AppButton } from "../components/AppButton";
import { Prompt } from "./Prompt";

export function FormThree({ setFormThreeOpen, formData }) {
  const [recommendationOpen, setRecommendationOpen] = useState(false);
  return (
    <AppModal onBack={() => setFormThreeOpen(false)}>
      <Prompt
        includeHR
      >{`How many one way trips will you make between ${formData.origin} and ${formData.destination}?`}</Prompt>
      <View style={styles.buttonContainer}>
        <AppButton
          buttonText="Ok, all set!"
          handlePress={() => setRecommendationOpen(true)}
        />
      </View>
      {recommendationOpen && (
        <Recommendation setRecommendationOpen={setRecommendationOpen} />
      )}
    </AppModal>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-around"
  }
});
