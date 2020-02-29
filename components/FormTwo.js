import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import axios from "axios";
import moment from "moment";
import PickerModal from "react-native-picker-modal-view";
import { AppButton, AppModal, SelectedText, Prompt } from "../components";
import FormThree from "../components/FormThree";

export default function FormTwo({ setFormTwoOpen, system }) {
  const [formThreeOpen, setFormThreeOpen] = useState(false);
  const [linesInSystem, setLines] = useState([]);
  const [selectedLine, setLine] = useState(null);
  const [stationsOnLine, setStations] = useState([]);
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
      const result = await axios(
        `http://localhost:3000/lines?system=${system}`
      );
      const lineOptions = result.data.map(line => ({Name: line}));
      setLines(lineOptions);
    };
    fetchLines();
  }, []);

  useEffect(() => {
    const fetchStations = async () => {
      const result = await axios.post(`http://localhost:3000/stations`, {
        system,
        line: selectedLine,
      });
      const origins = result.data.map(o => ({ Name: o.name }));
      setStations(origins);
    };
    fetchStations();
  }, [selectedLine]);

  return (
    <AppModal onBack={() => setFormTwoOpen(false)} formNumber={2}>
      <View>
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
      <View>
        <Prompt includeHR>Origin?</Prompt>
        <PickerModal
          renderSelectView={(disabled, selected, showNextModal) => (
            <TouchableOpacity disabled={disabled} onPress={showNextModal}>
              <SelectedText>{selectedOrigin}</SelectedText>
            </TouchableOpacity>
          )}
          onSelected={(s) => setOrigin(s.Name)}
          items = {stationsOnLine}
          selected={selectedOrigin}
          autoGenerateAlphabeticalIndex={true}
          searchPlaceholderText={"Search..."}
          requireSelection={true}
          autoSort={false}
        />
      </View>
      <View>
        <Prompt includeHR>Destination?</Prompt>
        <PickerModal
          renderSelectView={(disabled, selected, showNextModal) => (
            <TouchableOpacity disabled={disabled} onPress={showNextModal}>
              <SelectedText>{selectedDestination}</SelectedText>
            </TouchableOpacity>
          )}
          onSelected={(s) => setDestination(s.Name)}
          items = {stationsOnLine}
          selected={selectedDestination}
          autoGenerateAlphabeticalIndex={true}
          searchPlaceholderText={"Search..."}
          requireSelection={true}
          autoSort={false}
        />
      </View>
      <View>
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
          handlePress={() => setFormThreeOpen(true)}
          buttonText="Ok, Next!"
        />
      </View>
      {formThreeOpen &&
        <FormThree
          setFormThreeOpen={setFormThreeOpen}
          formData={{
            system,
            line: selectedLine,
            origin: selectedOrigin,
            destination: selectedDestination,
            month: selectedMonth.Value
          }}
      />}
    </AppModal>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
});
