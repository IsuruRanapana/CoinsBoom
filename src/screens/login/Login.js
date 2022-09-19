import { useCallback, useEffect, useState } from "react";
import { View, Text, ToastAndroid } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import styles from "./Login.styles";
import { InputWithLabel, Button } from "../../components";
import { users } from "../../mock/userCredentials";

export default function Login({ navigation }) {
  const isFocused = useIsFocused();

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setInputs({ email: "", password: "" });
    setIsAuth(false);
  }, [isFocused]);

  useEffect(() => {
    if (isAuth) navigation.navigate("HOME");
  }, [isAuth]);
  const handleInputOnChange = (value, from) => {
    if (from === 1) {
      setInputs({
        ...inputs,
        email: value,
      });
    } else {
      setInputs({
        ...inputs,
        password: value,
      });
    }
  };

  const handleOnPress = () => {
    const user = users.filter(
      (currentUser) => currentUser.email === inputs.email
    )[0];
    if (!user) {
      ToastAndroid.show("User not found", ToastAndroid.SHORT);
    } else if (user.password !== inputs.password) {
      ToastAndroid.show("Email or password is incorrect", ToastAndroid.SHORT);
    } else {
      setIsAuth(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputWithLabel
          labelText={"Enter Your Email"}
          value={inputs.email}
          onChange={(value) => handleInputOnChange(value, 1)}
        />
        <View style={styles.margin}></View>
        <InputWithLabel
          labelText={"Enter Your Password"}
          value={inputs.password}
          secureTextEntry={true}
          onChange={(value) => handleInputOnChange(value, 2)}
        />
      </View>
      <View style={styles.margin}></View>
      <View style={styles.btn}>
        <Button labelText={"Login"} onPress={handleOnPress} />
      </View>
      <View style={styles.marginBottom}></View>
    </View>
  );
}
