import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import {
  AppButton,
  AppModal,
  Prompt,
  Recommendation,
  WeekRow
} from "../components";

export default function FormThree({ setFormThreeOpen, formData }) {
  const [recommendationOpen, setRecommendationOpen] = useState(false);
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
      const result = await axios(
        `http://localhost:3000/calendar?date=${formData.month}`
      );
      setCalendar(result.data);
    };
    fetchCalendar();
  }, []);

  return (
    <AppModal onBack={() => setFormThreeOpen(false)} formNumber={3}>
      <Prompt>
        {`How many one-way trips will you make between ${formData.origin.Name} and ${formData.destination.Name}?`}
      </Prompt>
      <View>
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
          handlePress={() => setRecommendationOpen(true)}
        />
      </View>
      {recommendationOpen && (
        <Recommendation
          setRecommendationOpen={setRecommendationOpen}
          query={{
            ...formData,
            oneWaysNeeded: trips
          }}
        />
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
