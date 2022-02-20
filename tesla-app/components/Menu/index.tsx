import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";
import items from "./items";

export default function Menu() {
  return (
    <View style={styles.menuItens}>
      {items.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesomeIcon icon={item.icon} size={24} style={styles.icon} />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style={styles.subtitle}> {item.subTitle} </Text>
              )}
            </View>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={24}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
