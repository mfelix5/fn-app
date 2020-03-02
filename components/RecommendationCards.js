import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export default function RecommendationCards(props) {
  const { purchase } = props.recommendation;
  const labels = {
    oneWay: "One-way ticket(s)",
    weekly: "Weekly ticket(s)",
    monthly: "Monthly ticket"
  };
  const cards = [];

  Object.keys(purchase).forEach(type => {
    if (purchase[type] > 0) {
      cards.push({
        purchase: purchase[type],
        label: labels[type]
      })
    }
  });

  return (
    <View style={styles.cardContainer}>
      {
        cards.map((card, i) => {
          return (
            <View style={[styles.card, i%2 !== 0 ? styles.card2: null]} key={i}>
              <Text style={{...styles.text, ...styles.number}}>{card.purchase}</Text>
              <Text style={styles.text}>{card.label}</Text>
              <View style={styles.hr}></View>
              {/* <Text style={styles.text}>{cost}</Text> */}
            </View>
          );
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "space-around",
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
    fontFamily: 'roboto-medium'
  },
  number: {
    fontSize: 66,
  },
  hr: {
    borderBottomColor: Colors.darkBlue,
    borderBottomWidth: 1.5,
    width: "75%",
    height: 18,
    marginBottom: 18
  }
});