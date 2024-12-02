import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.background}>
      <Text style = {styles.heading}>Tic Tac Toe</Text>

         {/* Solo play select Button */}
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("(drawer)")}
          >
            <Text style={styles.buttonText}>Solo Play</Text>
        </TouchableOpacity>

         {/* Multiplayer select Button */}
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("(drawer)")}
          >
            <Text style={styles.buttonText}>Multiplayer</Text>
        </TouchableOpacity>

         {/* Settings Select Button */}
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("(drawer)")}
          >
            <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>



    </View>
  )
}

export default index

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "cyan"
      },
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      },
      heading: {
        color: "black",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: "center",
      },
      button: {
        backgroundColor: "#007BFF",
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: "center",
        marginVertical: 20,
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
      },
})