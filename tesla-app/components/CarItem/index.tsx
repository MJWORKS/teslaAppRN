import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";

export default function CarItem() {
  const [locked, setLocked] = useState(false);

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCog} size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>MJWORKS</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faToolbox} size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {/* MILAGE */}
      <View style={styles.baterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      {/* STATUS */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      <ScrollView>
        {/* CONTROL ICONS */}
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon icon={faFan} size={24} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon icon={faKey} size={24} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLocked(!locked)}>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon
                icon={locked ? faLock : faUnlockAlt}
                size={24}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Menu />
      </ScrollView>
    </View>
  );
}
