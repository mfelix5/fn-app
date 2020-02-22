import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import PickerModal from "react-native-picker-modal-view";
import { FormThree } from "../components/FormThree";
import { AppButton } from "../components/AppButton";
import { AppModal } from "./AppModal";
import { HeadingText } from "./HeadingText";

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
          Name: line,
          // Value: line
        };
      });
      setLines(lineOptions);
      // setSelectedLine(result.data[0]);
    };
    fetchLines();
  }, []);

  return (
    <AppModal onBack={() => setFormTwoOpen(false)}>
      <HeadingText>What line are you traveling on?</HeadingText>
        <PickerModal
          renderSelectView={(disabled, selected, showModal) => (
            <TouchableOpacity disabled={disabled} onPress={showModal}>
              <HeadingText>{selectedLine ? selectedLine : "Select..."}</HeadingText>
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
      <HeadingText>Where are you traveling from?</HeadingText>
      <HeadingText>Where are you going?</HeadingText>
      <HeadingText>When?</HeadingText>
      <AppButton
        handlePress={() => setFormThreeOpen(true)}
        buttonText="Ok, Next!"
      />
      {formThreeOpen && <FormThree setFormThreeOpen={setFormThreeOpen} />}
    </AppModal>
  );
}

const styles = StyleSheet.create({});
