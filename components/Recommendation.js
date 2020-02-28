import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import axios from "axios";
import AppModal from "../components/AppModal";
import PromptText from "../components/PromptText";

// {
// 	"userId": "2342532",
// 	"fareType": "regular",
// 	"originId": "5e492920099b7087d62ac98b",
// 	"destination": "New York",
// 	"month": "2020-03-01",
// 	"oneWaysNeeded": {
// 		"week1": 10,
// 		"week2": 8,
// 		"week3": 0,
// 		"week4": 6,
// 		"week5": 0
// 	}
// }

export default function Recommendation({ setRecommendationOpen, query }) {
  const [recommendation, setRecommendation] = useState({});

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const result = await axios.post(
          `http://localhost:3000/query`, {
            "userId": "development",
            "fareType": "regular",
            "originId": "5e492920099b7087d62ac98b",
            "destination": "New York",
            "month": "2020-03-01",
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
      <PromptText>Recommendation</PromptText>
      <Text style={{color: "white"}}>
        {JSON.stringify(recommendation.recommendation)}
      </Text>
    </AppModal>
  );
}

const styles = StyleSheet.create({
});
