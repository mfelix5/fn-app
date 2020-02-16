import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Picker,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [linesInSystem, setLines] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);
  const [stationsOnLine, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  // const [stationData, setStationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3000/lines?system=NJT');
      setLines(result.data);
      setSelectedLine(result.data[0])
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:3000/stations?line=${selectedLine}&system=NJT`);
      setStations(result.data);
      setSelectedStation(result.data[0])
    };
    fetchData();
  }, [selectedLine]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(`http://localhost:3000/station?station=${selectedStation}&line=${selectedLine}&system=NJT`);
  //     console.log('stationdata', result.data)
  //     setStationData(result.data);
  //   };
  //   fetchData();
  // }, [selectedLine, selectedStation]);


  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

      <View style={styles.centeredContainer}>
        <Picker
          selectedValue={selectedLine}
          onValueChange={value => {
            setSelectedLine(value);
          }}
          style={{ width: 200 }}
          // itemStyle={{ backgroundColor: "grey", color: "blue", fontSize:17 }}
          mode="dropdown">
          {linesInSystem.map((line, i) => {
            return (
              <Picker.Item label={line} value={line} key={`line-${i}`} />
            )
          })}
        </Picker>
      </View>

      <View style={styles.centeredContainer}>
        <Picker
          selectedValue={selectedStation}
          onValueChange={value => {
            const station = stationsOnLine.find(s => s.name === value);
            setSelectedStation(station)
          }}
          style={{ width: 200 }}
          mode="dropdown">
          {stationsOnLine.map((line, i) => {
            return (
              <Picker.Item label={line} value={line} key={`station-${i}`} />
            )
          })}
        </Picker>
      </View>

      <View style={styles.centeredContainer}>
          <Text>Selected Line:</Text>
          <Text>{selectedLine}</Text>
          <View></View>
          <Text>Selected Station Details:</Text>
          <Text>
            {/* {stationData
              ? `
                  Station: ${stationData.station}
                  Destinations: ${Object.keys(stationData.fares).map(dest => ` ${dest}`)}
                `
              : "no data"
            } */}

          </Text>
      </View>

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  centeredContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
