import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { AppButton, AppModal, Prompt, Recommendation, WeekLabel } from "../components";

export default function FormThree({ setFormThreeOpen, formData }) {
  // localhost:3000/calendar?month=March&year=2020

  const [recommendationOpen, setRecommendationOpen] = useState(false);
  const [calendar, setCalendar] = useState({});

  useEffect(() => {
    const fetchCalendar = async () => {
      const result = await axios(
        `http://localhost:3000/calendar?month=March&year=2020`
      );
      setCalendar(result.data);
    };
    fetchCalendar();
  }, []);

  return (
    <AppModal onBack={() => setFormThreeOpen(false)} formNumber={3}>
      <Prompt>
        {`How many one-way trips will you make between ${formData.origin} and ${formData.destination}?`}
      </Prompt>
      <View>
        {Object.keys(calendar).map(week => {
          return (<WeekLabel key={week} weekString={calendar[week]} />)
        })}
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          buttonText="Ok, all set!"
          handlePress={() => setRecommendationOpen(true)}
        />
      </View>
      {recommendationOpen && (
        <Recommendation setRecommendationOpen={setRecommendationOpen} />
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
