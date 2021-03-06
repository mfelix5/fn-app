import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import env from "../env.js";
import {
  AppButton,
  FormScreenTemplate,
  Prompt,
  WeekRow
} from "../components";
import Layout from "../constants/Layout";

export default FormThree = ({ navigation }) => {
  const formData = navigation.getParam("formData");
  const [calendar, setCalendar] = useState({});

  const MIN_TRIPS = 0;
  const MAX_TRIPS = 20;
  const [trips, setTrips] = useState({
    week1: 0,
    week2: 0,
    week3: 0,
    week4: 0,
    week5: 0,
    week6: 0
  });

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const result = await axios(`${env.API_URL}/calendar?date=${formData.month}`);
        setCalendar(result.data);
      } catch (err) {
        alert("Unable to reach the server. Please try again later.")
      }
    };
    fetchCalendar();
  }, []);

  return (
    <FormScreenTemplate onBack={() => {navigation.goBack()}} formNumber={3}>
      <View style={styles.prompt}>
        <Prompt>
          {`How many one-way trips will you make between ${formData.origin.Name} and ${formData.destination.Name}?`}
        </Prompt>
      </View>

      <View style={styles.weekContainer}>
        {Object.keys(calendar).map((week, i) => {
          const weekKey = `week${i + 1}`;
          return (
            <WeekRow
              key={i}
              weekString={calendar[week]}
              nTrips={trips[weekKey]}
              handleMinus={() => {
                setTrips({
                  ...trips,
                  [weekKey]: trips[weekKey] > MIN_TRIPS ? trips[weekKey] - 1 : 0
                });
              }}
              handlePlus={() => {
                setTrips({
                  ...trips,
                  [weekKey]:
                    trips[weekKey] < MAX_TRIPS ? trips[weekKey] + 1 : MAX_TRIPS
                });
              }}
            />
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          buttonText="Ok, all set!"
          handlePress={() => {
            if (trips.week1 || trips.week2 || trips.week3 || trips.week4 || trips.week5 || trips.week6) {
              navigation.navigate({
                routeName: "Recommendation",
                params: {
                  formData: {
                    ...formData,
                    calendar,
                    oneWaysNeeded: trips
                  }
                }
              })
            }
          }}
        />
      </View>
    </FormScreenTemplate>
  );
}

const styles = StyleSheet.create({
  prompt: {
    marginTop: 20,
    marginBottom: 50
  },
  weekContainer: {
    marginBottom: 50
  },
  buttonContainer: {
    paddingHorizontal: Layout.margin,
    marginBottom: 50
  }
});
