import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import PickerModal from "react-native-picker-modal-view";
import { FormThree } from "../components/FormThree";
import { AppButton } from "../components/AppButton";
import { AppModal } from "./AppModal";
import { Prompt } from "./Prompt";

export function FormTwo({ setFormTwoOpen, system }) {
  const [formThreeOpen, setFormThreeOpen] = useState(false);
  const [linesInSystem, setLines] = useState([]);
  const [selectedLine, setLine] = useState(null);
  const [stationsOnLine, setStations] = useState([]);
  const [selectedOrigin, setOrigin] = useState("");
  const [selectedDestination, setDestination] = useState("");
  const [selectedMonth, setMonth] = useState(""); // TODO: default to this month

  const months = [{ Name: "February" }, { Name: "March"}]

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
    <AppModal onBack={() => setFormTwoOpen(false)}>
      <Prompt includeHR>Which line?</Prompt>
      <PickerModal
        renderSelectView={(disabled, selected, showModal) => (
          <TouchableOpacity disabled={disabled} onPress={showModal}>
            <Prompt style={styles.selectText}>{selectedLine ? selectedLine : "select..."}</Prompt>
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
      <Prompt includeHR>Origin?</Prompt>
      <PickerModal
          renderSelectView={(disabled, selected, showNextModal) => (
            <TouchableOpacity disabled={disabled} onPress={showNextModal}>
              <Prompt style={styles.selectText}>{selectedOrigin ? selectedOrigin : "select..."}</Prompt>
            </TouchableOpacity>
          )}
          onSelected={(s) => setOrigin(s.Name)}
          // items={stationsOnLine}
          items = {stationsOnLine}
          selected={selectedOrigin}
          autoGenerateAlphabeticalIndex={true}
          searchPlaceholderText={"Search..."}
          requireSelection={true}
          autoSort={false}
        />
      <Prompt includeHR>Destination?</Prompt>
      <PickerModal
        renderSelectView={(disabled, selected, showNextModal) => (
          <TouchableOpacity disabled={disabled} onPress={showNextModal}>
            <Prompt style={styles.selectText}>{selectedDestination ? selectedDestination : "select..."}</Prompt>
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
      <Prompt includeHR>When?</Prompt>
      <PickerModal
        renderSelectView={(disabled, selected, showModal) => (
          <TouchableOpacity disabled={disabled} onPress={showModal}>
            <Prompt style={styles.selectText}>{selectedMonth ? selectedMonth : "select..."}</Prompt>
          </TouchableOpacity>
        )}
        onSelected={(s) => setMonth(s.Name)}
        items = {months}
        selected={selectedMonth}
        autoGenerateAlphabeticalIndex={false}
        searchPlaceholderText={"Search..."}
        requireSelection={true}
        autoSort={false}
      />
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
            line: selectedLine,
            origin: selectedOrigin,
            destination: selectedDestination,
            month: selectedMonth
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
