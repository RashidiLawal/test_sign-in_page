import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function App() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <Text>9:41</Text>
        <Text style={styles.threeIcon}>
          <Text style={styles.threeIcon1}>
            <FontAwesome5 name={"signal"} />
          </Text>
          <Text style={styles.threeIcon2}>
            <FontAwesome5 name={"wifi"} />
          </Text>
          <Text style={styles.threeIcon3}>
            <FontAwesome5 name={"battery-full"} />
          </Text>
        </Text>
      </View>
      <Text style={styles.sign}>Sign up</Text>
      <Text style={styles.create}>Create an account to get started</Text>
      <View>
        <Text style={styles.name}>Name</Text>
        <TextInput
          style={styles.input}
          // value={number}
          placeholder="Enter your name"
          keyboardType="numeric"
        />
        <Text style={styles.email}>Email Address</Text>
        <TextInput
          style={styles.input}
          // value={number}
          placeholder="dev@native.com"
          keyboardType="numeric"
        />
        <Text style={styles.password}>Password</Text>
        <TextInput
          style={styles.input}
          // value={number}
          placeholder="Create password"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          // value={number}
          placeholder="Comfirm password"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.checkbox}>
        <Checkbox
          style={styles.checkboxer}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#0c54f0" : undefined}
        />
        <Text style={styles.policy}>
          I've read and agreed with the Terms and Conditions, and Privacy Policy
        </Text>
      </View>
      <View>
        <Text style={styles.already}>Already have an account? Log in</Text>
      </View>

      {/* <TouchableHighlight /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    marginTop: 45,
    marginRight: 18,
    marginLeft: 18,
  },
  threeIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  sign: { marginRight: 18, marginLeft: 18 },
  create: { marginRight: 18, marginLeft: 18 },
  policy: { marginRight: 18, marginLeft: 18 },
  already: { marginRight: 18, marginLeft: 18 },
  name: { marginRight: 18, marginLeft: 18 },
  email: { marginRight: 18, marginLeft: 18 },
  password: { marginRight: 18, marginLeft: 18 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginRight: 18,
    marginLeft: 18,
  },
  checkbox: {
    flexDirection: "row",
  },
  checkboxer: {
    alignSelf: "center",
    marginLeft: 18,
    borderLeftWidth: 3,
    borderColor: "#afb3b1",
    borderRadius: 6,
  },
});
