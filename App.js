import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [list, setList] = useState([])
  const [item, setItem] = useState()

  const handleClear = () => {
    setList([])
    setItem('')
  }
  const handleAdd = () => {
    setList([...list, { key: item }])
    setItem('')
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={item} onChangeText={item => setItem(item)}></TextInput>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
      <Button
        title='Add'
        onpress={handleAdd}></Button>
      <Button
        title='Clear'
        onpress={handleClear}></Button>
    </View>
     <Text style={{ color: 'red', fontSize: 25}}>Ostoslista</Text>
     <FlatList
      data={list}
      renderItem={({item}) => {
        return (
          <View>
            <Text>{item.key}</Text>

          </View>
        )



      }
      }></FlatList>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 90
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
