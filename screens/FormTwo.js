import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import axios from "axios";
import env from "../env.js";
import moment from "moment";
import PickerModal from "react-native-picker-modal-view";
import { AppButton, FormScreenTemplate, SelectedText, Prompt } from "../components";
import Layout from "../constants/Layout";

export default FormTwo = ({ navigation }) => {
  const system = navigation.getParam("system");

  const [linesInSystem, setLines] = useState([]);
  const [selectedLine, setLine] = useState(null);
  const [stations, setStations] = useState([]);
  const [selectedOrigin, setOrigin] = useState("");
  const [selectedDestination, setDestination] = useState("");
  const [selectedMonth, setMonth] = useState({});

  const today = moment();
  const thisMonth = today.clone().format("MMMM");
  const thisMonthValue = today.clone().format("YYYY-MM-DD");
  const nextMonth = today.clone().add(1, "month").format("MMMM");
  const nextMonthValue = today.clone().add(1, "month").format("YYYY-MM-DD");
  const monthOptions = [
    { Name: thisMonth, Value: thisMonthValue },
    { Name: nextMonth, Value: nextMonthValue }
  ];

  useEffect(() => {
    const fetchLines = async () => {
      try {
        if (["NJT"].includes(system)) {
          const result = await axios(`${env.API_URL}/lines?system=${system}`);
          const lineOptions = result.data.map(line => ({Name: line}));
          setLines(lineOptions);
        }
      } catch (err) {
        alert("Unable to reach the server. Please try again later.");
      }
    };
    fetchLines();
  }, []);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        let result;
        if (system === "NJT") {
          result = await axios.post(`${env.API_URL}/stations`, { system, line: selectedLine });
        } else if (system === "LIRR") {
          result = await axios.get(`${env.API_URL}/stations?system=${system}`);
        }
        const stations = result.data.map(s => ({ ...s, Name: s.name }));
        setStations(stations);
      } catch (err) {
        alert("Unable to reach the server. Please try again later.");
      }
    };
    fetchStations();
  }, [selectedLine]);

  const getDestinations = system => {
    if (selectedOrigin && system === "LIRR") return stations;
    if (selectedOrigin && system === "NJT") {
      return Object.keys(selectedOrigin.destinations).map(d => ({ Name: d }));
    }
  }

  return (
    <FormScreenTemplate onBack={() => {navigation.goBack()}} formNumber={2}>
      {system === "NJT" &&
        <View style={styles.formSection}>
        <Prompt includeHR>Which line?</Prompt>
        <PickerModal
          renderSelectView={(disabled, selected, showModal) => (
            <TouchableOpacity disabled={disabled} onPress={showModal}>
              <SelectedText>{selectedLine}</SelectedText>
            </TouchableOpacity>
          )}
            onSelected={(s) => setLine(s.Name)}
            items={linesInSystem}
            selected={selectedLine}
            autoGenerateAlphabeticalIndex={true}
            searchPlaceholderText={"Search..."}
            requireSelection={true}
            autoSort={false}
          />
        </View>
      }

      <View style={styles.formSection}>
        <Prompt includeHR>Origin?</Prompt>
        <PickerModal
          renderSelectView={(disabled, selected, showNextModal) => (
            <TouchableOpacity disabled={disabled} onPress={showNextModal}>
              <SelectedText>{selectedOrigin.Name}</SelectedText>
            </TouchableOpacity>
          )}
          onSelected={(s) => setOrigin(s)}
          items = {stations}
          selected={selectedOrigin}
          autoGenerateAlphabeticalIndex={true}
          searchPlaceholderText={"Search..."}
          requireSelection={true}
          autoSort={false}
        />
      </View>
      <View style={styles.formSection}>
        <Prompt includeHR>Destination?</Prompt>
        <PickerModal
          renderSelectView={(disabled, selected, showNextModal) => (
            <TouchableOpacity disabled={disabled} onPress={showNextModal}>
              <SelectedText>{selectedDestination.Name}</SelectedText>
            </TouchableOpacity>
          )}
          onSelected={(s) => setDestination(s)}
          items = {getDestinations(system)}
          selected={selectedDestination}
          autoGenerateAlphabeticalIndex={true}
          searchPlaceholderText={"Search..."}
          requireSelection={true}
          autoSort={false}
        />
      </View>
      <View style={styles.formSection}>
        <Prompt includeHR>When?</Prompt>
        <PickerModal
          renderSelectView={(disabled, selected, showModal) => (
            <TouchableOpacity disabled={disabled} onPress={showModal}>
              <SelectedText>{selectedMonth.Name}</SelectedText>
            </TouchableOpacity>
          )}
          onSelected={(s) => setMonth(s)}
          items = {monthOptions}
          selected={selectedMonth}
          autoGenerateAlphabeticalIndex={false}
          searchPlaceholderText={"Search..."}
          requireSelection={true}
          autoSort={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          handlePress={() => {
            if (selectedOrigin && selectedDestination && Object.keys(selectedMonth).length) {
              navigation.navigate({
                routeName: "FormThree",
                params: {
                  formData: {
                    system,
                    line: selectedLine,
                    origin: selectedOrigin,
                    destination: selectedDestination,
                    month: selectedMonth.Value
                  }
                }
              });
            }
          }}
          buttonText="Ok, Next!"
        />
      </View>
    </FormScreenTemplate>
  );
}

const styles = StyleSheet.create({
  formSection: {
    marginTop: 20,
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 50,
    paddingHorizontal: Layout.margin,
    marginBottom: 50
  },
});
