import { View, Text, StyleSheet, Image } from "react-native";
import { coinIcons } from "../../mock/coinIcons";

export function ItemCard({ assetId, title, image }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.userIdContainer}>
        <Text style={styles.userIdText}>{`${assetId}`}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#B7C4CF",
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  userIdContainer: {
    position: "absolute",
    right: 15,
    bottom: 15,
  },
  userIdText: {
    fontSize: 10,
  },

  image: {
    height: 25,
    width: 25,
    position: "absolute",
    borderRadius: 5,
    right: 15,
  },
});
