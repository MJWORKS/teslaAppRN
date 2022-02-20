import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menuItens: {
    margin: 20,
    marginBottom: 0,
  },
  icon: {
    color: "white",
  },
  menuText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    textTransform: 'uppercase'
  },
  menuRow: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  menuTextBox: {
    flexGrow: 1,
  },
  arrowIcon: {
      color: '#4D4D4E'
  },
  subtitle:{
    color: "grey",
    fontSize: 14,
    marginLeft: 15,
    marginTop: 3
  }
});

export default styles;
