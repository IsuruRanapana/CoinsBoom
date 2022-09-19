import {
  View,
  FlatList,
  BackHandler,
  Alert,
  Modal,
  Text,
  Pressable,
} from "react-native";
import styles from "./Home.styles";
import { Button, ItemCard } from "../../components";
import { useEffect, useState } from "react";
import { get } from "../../api/baseAPI";
import { coinAssets } from "../../mock/coinAssets";
import { coinIcons } from "../../mock/coinIcons";

export default function Home({ navigation }) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  });

  const [listData, setListData] = useState([]);
  const [listOfIconData, setListOfIconData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLoadCoins = async () => {
    const data = await get({ endpoint: "v1/assets" });
    setListData(data);
    const iconData = await get({ endpoint: "v1/assets/icons" });
    setListOfIconData(iconData);
  };

  const handleOnPress = () => {
    navigation.pop();
  };

  const handleClose = () => {
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item, index }) => {
    console.log(item);
    const image = listOfIconData.filter(
      (img) => img.asset_id === item?.asset_id
    )[0];
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{item?.name}</Text>
              <Text
                style={styles.modalText}
              >{`Price in USD = ${item?.price_usd}`}</Text>
              <Button labelText={"Close"} onPress={handleClose} />
            </View>
          </View>
        </Modal>
        <Pressable onPress={() => setModalVisible(true)}>
          <ItemCard
            title={item?.name}
            assetId={item?.asset_id}
            image={image?.url}
          />
        </Pressable>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.btn}>
        <Button labelText={"Load Coins"} onPress={handleLoadCoins} />
        <Button labelText={"Logout"} onPress={handleOnPress} />
      </View>
    </View>
  );
}
