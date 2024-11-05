import { View, StyleSheet, Pressable } from "react-native";
import { paletOfColors } from "../../utils/colors";
import { Image_Dianamic, Montserrat_Text } from "../../components";
import { ShadowBox_Wrapper } from "../../wrappers";

export function Card_Category({ category, index, navigation }) {
  return (
    <ShadowBox_Wrapper style={styles.containerBoxShadow}>
      <Pressable
        style={styles.pressableCategory}
        onPress={() => {
          navigation.navigate("Products By Categories", {
            cat_iden: category.cat_iden,
            cat_name: category.cat_name,
          });
        }}
      >
        <View
          style={
            index % 2 === 0
              ? styles.containerChildrenRow
              : styles.containerChildrenRow_Reverse
          }
        >
          <Image_Dianamic
            styleImage={styles.styleImage}
            uriURL={category.cat_url_image}
            altProp={`imagen de la categoria ${category.cat_name}`}
          />
          <Montserrat_Text style={styles.textStyleBlack}>
            {category.cat_name}
          </Montserrat_Text>
        </View>
      </Pressable>
    </ShadowBox_Wrapper>
  );
}

const styles = StyleSheet.create({
  containerBoxShadow:{width:"100%"},
  containerChildrenRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerChildrenRow_Reverse: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
  },
  pressableCategory: { padding: 5, marginTop: 10, width: "100%" },
  styleImage: { width: 120, height: 120 },
  textStyleBlack: {
    fontSize: 22,
    color: paletOfColors.black,
    letterSpacing: 2,
  },
});
