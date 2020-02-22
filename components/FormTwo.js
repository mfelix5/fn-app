import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import PickerModal from "react-native-picker-modal-view";
import { FormThree } from "../components/FormThree";
import { AppButton } from "../components/AppButton";
import { AppModal } from "./AppModal";
import { Prompt } from "./Prompt";
import { PromptText } from "./PromptText";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function FormTwo({ setFormTwoOpen, system }) {
  const [formThreeOpen, setFormThreeOpen] = useState(false);
  const [linesInSystem, setLines] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    const fetchLines = async () => {
      const result = await axios(
        `http://localhost:3000/lines?system=${system}`
      );
      const lineOptions = result.data.map(line => {
        return {
          Name: line, // "Name" needed for PickerModal component
        };
      });
      setLines(lineOptions);
    };
    fetchLines();
  }, []);

  return (
    <AppModal onBack={() => setFormTwoOpen(false)}>
      <View style={styles.formWrapper}>
      <Prompt includeHR>What line are you traveling on?</Prompt>
        <PickerModal
          renderSelectView={(disabled, selected, showModal) => (
            <TouchableOpacity disabled={disabled} onPress={showModal}>
              <Prompt style={styles.selectText}>{selectedLine ? selectedLine : "select..."}</Prompt>
            </TouchableOpacity>
          )}
          onSelected={(s) => setSelectedLine(s.Name)}
          items={linesInSystem}
          selected={selectedLine}
          autoGenerateAlphabeticalIndex={true}
          searchPlaceholderText={"Search..."}
          requireSelection={true}
          autoSort={false}
        />
      <Prompt includeHR>Where are you traveling from?</Prompt>
      <Prompt includeHR>Where are you going?</Prompt>
      <Prompt includeHR>When?</Prompt>
      </View>
      <AppButton
        handlePress={() => setFormThreeOpen(true)}
        buttonText="Ok, Next!"
      />
      {formThreeOpen && <FormThree setFormThreeOpen={setFormThreeOpen} />}
    </AppModal>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
  },
});
