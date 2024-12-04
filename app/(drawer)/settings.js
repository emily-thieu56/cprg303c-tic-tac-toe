import { View, Text } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';

const settings = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View>
      <Text>Settings</Text>

      <h2>Color Scheme</h2>
      {/*Select color scheme */}
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />

      <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />
      <RadioButton
        value="fourth"
        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fourth')}
      />

      <RadioButton
        value="fifth"
        status={ checked === 'fifth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fifth')}
      />
      <RadioButton
        value="sixth"
        status={ checked === 'sixth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('sixth')}
      />

      <RadioButton
        value="seventh"
        status={ checked === 'seventh' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('seventh')}
      />

      <TextInput
        label="Username"
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={text}
        onChangeText={text => setText(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
export default settings