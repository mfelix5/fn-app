import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import { Entypo } from "@expo/vector-icons";
import Colors from "../constants/Colors";

// week string from API:
// "Sun Mar 01 2020 05:00:00 GMT+0000 - Fri Mar 06 2020 05:00:00 GMT+0000"

export default function WeekLabel({ weekString }) {
  const [beginDate, endDate] = weekString.split(" - ");
  const [day1, month1, date1] = beginDate.split(" ");
  const [day2, month2, date2] = endDate.split(" ");
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
        <Entypo
          style={styles.icon}
          name={"minus"}
          size={34}
          color="white"
        />
        <View style={styles.square}>
          <Text style={styles.quantityText}>5</Text>
        </View>
        <Entypo
          style={styles.icon}
          name={"plus"}
          size={34}
          color="white"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  dayContainer: {
    textAlign: "left",
    paddingHorizontal: 15
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
  quantityText: {
    color: "black",
    fontSize: 40,
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
  square: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 4,
    backgroundColor: Colors.lightBlue
  }
});
