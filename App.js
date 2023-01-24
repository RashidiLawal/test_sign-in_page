import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import {} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function App() {
  const [isChecked, setChecked] = useState(false);
  const [Submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    setSubmitted(!Submitted);
  };
  return (
    <View style={styles.holder}>
      <View style={styles.container}>
        <Text style={styles.num}>9:41</Text>
        <View style={styles.threeIcon}>
          <Text style={styles.threeIcon1}>
            <FontAwesome5 name={"signal"} />
          </Text>
          <Text style={styles.threeIcon2}>
            <FontAwesome5 name={"wifi"} />
          </Text>
          <Text style={styles.threeIcon3}>
            <FontAwesome5 name={"battery-full"} />
          </Text>
        </View>
      </View>
      <Text style={styles.sign}>Sign up</Text>
      <Text style={styles.create}>Create an account to get started</Text>
      <View style={styles.inputView}>
        <Text style={styles.name}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          keyboardType="numeric"
          placeholderTextColor={"#999696"}
          selectionColor={"#0c54f0"}
        />
        <Text style={styles.email}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="dev@native.com"
          keyboardType="numeric"
          autoFocus={true}
          placeholderTextColor={"#999696"}
        />
        <Text style={styles.password}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create password"
          keyboardType="numeric"
          placeholderTextColor={"#999696"}
        />
        <TextInput
          style={styles.input}
          placeholder="Comfirm password"
          keyboardType="numeric"
          placeholderTextColor={"#999696"}
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
          I've read and agreed with the{" "}
          <Text style={styles.login}>Terms and Conditions</Text>, and{" "}
          <Text style={styles.login}>Privacy Policy</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.already}>
          Already have an account? <Text style={styles.login}>Log in</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={onPressHandler}>
        <Text style={styles.onpress}>
          {Submitted ? "Create account" : "Already have account"}
        </Text>
      </TouchableOpacity>
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
  holder: {
    flexDirection: "column",
  },
  num: {
    fontWeight: "700",
    fontSize: 12,
  },
  threeIcon: {
    display: "flex",
    flexDirection: "row",
  },
  threeIcon1: { marginRight: 7 },
  threeIcon2: { marginRight: 7 },
  sign: {
    marginRight: 18,
    marginLeft: 18,
    fontWeight: "700",
    fontSize: 15,
    marginTop: 18,
  },
  create: {
    color: "#999696",
    marginRight: 18,
    marginLeft: 18,
    marginTop: 5,
    fontWeight: "300",
    fontSize: 10,
  },
  policy: {
    color: "#999696",
    width: 280,
    wordBreak: "normal",
    marginLeft: 18,
    fontSize: 10,
    // lineHeight: 15,
  },
  already: {
    color: "#999696",
    marginRight: 18,
    marginLeft: 18,
    textAlign: "center",
    fontSize: 10,
  },
  login: { color: "#0c54f0" },
  name: { marginRight: 18, marginLeft: 18, fontWeight: "400", fontSize: 10 },
  email: { marginRight: 18, marginLeft: 18, fontWeight: "400", fontSize: 10 },
  password: {
    marginRight: 18,
    marginLeft: 18,
    fontWeight: "400",
    fontSize: 10,
  },
  inputView: {
    marginTop: 18,
  },
  input: {
    borderWidth: 0.1,
    borderColor: "#ccc8c8",
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginRight: 18,
    marginLeft: 18,
    fontWeight: "300",
    fontSize: 10,
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
  onpress: {
    backgroundColor: "#0c54f0",
    marginLeft: 18,
    marginTop: 10,
    fontSize: 10,
    fontWeight: "300",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#0c54f0",
    color: "#ffffff",
    width: 320,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
