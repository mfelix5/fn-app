import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import axios from "axios";
import AppModal from "../components/AppModal";
import RecommendationCards from "../components/RecommendationCards";
import Savings from "../components/Savings";
import Prompt from "../components/Prompt";

export default function Recommendation({ setRecommendationOpen, query }) {
  const [recommendation, setRecommendation] = useState({});

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const result = await axios.post(
          `https://farewise.herokuapp.com/query`, {
            "userId": "development",
            "fareType": "regular",
            "originId": query.origin._id,
            "destination": query.destination.Name,
            "month": query.month,
            "oneWaysNeeded": query.oneWaysNeeded
          }
        );
        setRecommendation(result.data);
      } catch(err) {
        console.log('err', err)
      }
    };
    fetchRecommendation();
  }, []);

  return (
    <AppModal onBack={() => setRecommendationOpen(false)}>
      {
        recommendation && recommendation.recommendation &&
          <>
          <Prompt>{recommendation.recommendation.message}</Prompt>
          <Prompt>Buy:</Prompt>
          <RecommendationCards
            recommendation={recommendation.recommendation}
          />
          <Savings savings={recommendation.recommendation}/>
          <Prompt>Use:</Prompt>
          </>
      }

    </AppModal>
  );
}

const styles = StyleSheet.create({
});
