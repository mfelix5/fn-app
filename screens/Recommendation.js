import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import axios from "axios";
import FormScreenTemplate from "../components/FormScreenTemplate";
import RecommendationBuy from "../components/RecommendationBuy";
import Prompt from "../components/Prompt";
import RecommendationUse from "../components/RecommendationUse";

export default function Recommendation(props) {
  const formData = props.navigation.getParam("formData");
  const [queryResponse, setQueryResponse] = useState({});
  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const result = await axios.post(
          `https://farewise.herokuapp.com/query`, {
            "userId": "development",
            "fareType": "regular",
            "originId": formData.origin._id,
            "destination": formData.destination.Name,
            "month": formData.month,
            "oneWaysNeeded": formData.oneWaysNeeded
          }
        );
        setQueryResponse(result.data);
      } catch(err) {
        console.log('err', err)
      }
    };
    fetchRecommendation();
  }, []);

  return (
    <FormScreenTemplate onBack={() => {props.navigation.goBack()}}>
      {
        queryResponse && queryResponse.recommendation &&
          <>
          <Prompt>{queryResponse.recommendation.message}</Prompt>
          <RecommendationBuy
            fares={queryResponse.fares}
            recommendation={queryResponse.recommendation}
          />
          {/* <RecommendationUse
            calendar={formData.calendar}
            recommendation={queryResponse.recommendation}
          /> */}
          </>
      }
    </FormScreenTemplate>
  );
}

const styles = StyleSheet.create({
});
