import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import env from "../env.js";
import FormScreenTemplate from "../components/FormScreenTemplate";
import RecommendationBuy from "../components/RecommendationBuy";
import Prompt from "../components/Prompt";
import RecommendationUse from "../components/RecommendationUse";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export default Recommendation = ({ navigation }) => {
  const formData = navigation.getParam("formData");
  const [queryResponse, setQueryResponse] = useState({});
  const [selected, setSelected] = useState("buy");

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const result = await axios.post(`${env.API_URL}/query`,
          {
            userId: "development",
            fareType: "regular",
            originId: formData.origin._id,
            destination: formData.destination.Name,
            month: formData.month,
            oneWaysNeeded: formData.oneWaysNeeded
          }
        );
        setQueryResponse(result.data);
      } catch (err) {
        alert("Unable to reach the server. Please try again later.")
      }
    };
    fetchRecommendation();
  }, []);

  return (
    <FormScreenTemplate
      onBack={() => {
        navigation.goBack();
      }}
    >
      {queryResponse && queryResponse.recommendation && (
        <>
          <View style={styles.prompt}>
            <Prompt>Your least expensive ticketing option:</Prompt>
          </View>
          {/* <View style={styles.buyUseBar}>
            <TouchableOpacity onPress={() => setSelected("buy")}>
              <Text
                style={[
                  styles.buyUseButton,
                  selected === "buy" ? styles.selected : ""
                ]}
              >
                What to buy
              </Text>
            </TouchableOpacity>
            {queryResponse.recommendation.purchase.monthly === 0 && (
              <TouchableOpacity onPress={() => setSelected("use")}>
              <Text
                style={[
                  styles.buyUseButton,
                  selected === "use" ? styles.selected : ""
                ]}
              >
                When to use them
              </Text>
            </TouchableOpacity>
            )}
          </View> */}
          {selected === "buy" && (
            <View style={styles.buySection}>
              <RecommendationBuy
                fares={queryResponse.fares}
                recommendation={queryResponse.recommendation}
              />
            </View>
          )}
          {selected === "use" && queryResponse.recommendation.purchase.monthly === 0 && (
            <RecommendationUse
              calendar={formData.calendar}
              recommendation={queryResponse.recommendation}
            />
          )}
        </>
      )}
    </FormScreenTemplate>
  );
}

const styles = StyleSheet.create({
  prompt: {
    marginTop: 20,
    marginBottom: 50
  },
  buyUseBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Layout.margin,
  },
  buyUseButton: {
    color: "white",
    fontSize: 16,
    fontFamily: "roboto-medium"
  },
  selected: {
    color: Colors.lightBlue
  },
  buySection: {
    marginBottom: 50
  }
});
