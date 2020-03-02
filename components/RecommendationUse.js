import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

// week string from API:
// "Sun Mar 01 2020 05:00:00 GMT+0000 - Fri Mar 06 2020 05:00:00 GMT+0000"

export default function RecommendationUse({ calendar, recommendation }) {
  const badgeLabels = {
    oneWays: "one-ways",
    weekly: "weekly",
    monthly: "monthly"
  }
  return (
    <View style={styles.useContainer}>
      <Text>Use:</Text>
      {
        Object.keys(calendar).map(week => {
          const [beginDate, endDate] = calendar[week].split(" - ");
          const [day1, month1, date1] = beginDate.split(" ");
          const [day2, month2, date2] = endDate.split(" ");
          const badgeLabel = badgeLabels[recommendation.use[week]];
          return (
            <>
            <View style={styles.hr}></View>
            <View style={styles.weekContainer}>
              <View style={styles.dayContainer}>
                <Text style={styles.dayText}>{day1.toUpperCase()}</Text>
                <Text style={styles.dateText}>{`${moment()
                  .month(month1)
                  .format("MM")}/${date1}`}</Text>
              </View>
              <View style={styles.circle}></View>
              <View style={styles.dayContainer}>
                <Text style={styles.dayText}>{day2.toUpperCase()}</Text>
                <Text style={styles.dateText}>{`${moment()
                  .month(month2)
                  .format("MM")}/${date2}`}</Text>
              </View>
              <View style={styles.badgeContainer}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{badgeLabel}</Text>
                </View>
              </View>
            </View>
            </>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  useContainer: {

  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  dayContainer: {
    textAlign: "left",
    paddingHorizontal: Layout.margin
  },
  dayText: {
    color: Colors.lightBlue,
    fontSize: 14,
    fontFamily: "roboto-medium"
  },
  dateText: {
    color: Colors.lightBlue,
    fontSize: 36,
    fontFamily: "roboto-medium"
  },
  badgeText: {
    color: "black",
    fontSize: 16,
    fontFamily: "roboto-medium"
  },
  hr: {
    height: 20,
    borderBottomColor: Colors.lightBlue,
    borderBottomWidth: 2,
    marginBottom: 10
  },
  circle: {
    marginTop: 15,
    width: 7,
    height: 7,
    borderRadius: 7 / 2,
    backgroundColor: Colors.lightBlue
  },
  badgeContainer: {
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  badge: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 110,
    borderRadius: 4,
    marginTop: 15,
    marginRight: 15,
    backgroundColor: "rgb(255, 255, 255)"
  }
});
