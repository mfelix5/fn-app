import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default RecommendationBuy = ({ fares, recommendation }) => {
  const { purchase, savings, totalCost } = recommendation;
  const labels = {
    oneWay: "One-way ticket(s)",
    weekly: "Weekly ticket(s)",
    monthly: "Monthly ticket"
  };
  const cards = [];
  const normalize = num => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  Object.keys(purchase).forEach(type => {
    if (purchase[type] > 0) {
      cards.push({
        type: type === "oneWay" ? "one-way-peak" : type,
        purchase: purchase[type],
        label: labels[type]
      });
    }
  });

  return (
    <>
      <View style={styles.cardContainer}>
        {cards.map((card, i) => {
          const cost = card.purchase * fares[card.type];
          return (
            <View
              style={[styles.card, i % 2 !== 0 ? styles.card2 : null]}
              key={i}
            >
              <Text style={{ ...styles.text, ...styles.number }}>
                {card.purchase}
              </Text>
              <Text style={styles.text}>{card.label}</Text>
              <View style={styles.hr}></View>
              <Text style={styles.text}>${normalize(cost)}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.savingsContainer}>
        <Text style={{ ...styles.text, ...styles.whiteText }}>Total</Text>
        <Text style={{ ...styles.text, ...styles.totalCostText }}>
          ${normalize(totalCost)}
        </Text>
        {purchase.monthly === 0 && (
          <Text style={{ ...styles.text, ...styles.savingsText }}>
            Savings over a monthly ticket: ${normalize(savings)}
          </Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginHorizontal: Layout.margin,
    justifyContent: "space-around",
    marginVertical: 20
  },
  card: {
    backgroundColor: "rgb(255, 255, 255)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "45%",
    paddingBottom: 18
  },
  card2: {
    backgroundColor: "rgb(255, 238, 218)"
  },
  text: {
    fontSize: 16,
    color: Colors.darkBlue,
    fontFamily: "roboto-medium"
  },
  number: {
    fontSize: 66
  },
  hr: {
    borderBottomColor: Colors.darkBlue,
    borderBottomWidth: 1.5,
    width: "75%",
    height: 18,
    marginBottom: 18
  },
  savingsContainer: {
    marginHorizontal: Layout.margin
  },
  totalCostText: {
    fontSize: 36,
    color: "white",
    marginTop: 8,
    marginBottom: 8
  },
  savingsText: {
    color: Colors.lightBlue
  },
  whiteText: {
    color: "white"
  }
});
