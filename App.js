import {React, useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import PickerItem from "./src/Picker";
import { api } from "./src/services/api";


export default function App(){

  useEffect( () => {
    async function  loadMoedas() {
      const response = await api.get('all')
      let arrayMoedas = [];
      Object.keys.apply(response.data).map((key) =>  {
        arrayMoedas.push({
          key: key,
          label: label,
          value: key
        })
      })
    }

    loadMoedas();

  },[])// arry de componentes vazio, significa que eçe vai chamar a função assim q o app rodar






  return(
    <View style = {styles.container}>
      <View style = {styles.areaMoeda}>
      <Text style = {styles.titulo}>Selecione sua moeda:</Text>
      <PickerItem/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#101215',
    paddingTop:40,
    alignItems: 'center'
  },
  areaMoeda:{
    backgroundColor:'#F9F9F9',
    width:'90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius:8,
    padding: 8
  },
  titulo: {
    fontSize:16,
    color: '#000',
    fontWeight:'500',
    paddingLeft: 5,
    paddingTop:5
  }
})

