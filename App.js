import {React, useState, useEffect} from "react";
import { View, Text, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity } from "react-native";
import PickerItem from "./src/Picker";
import { api } from "./src/services/api";


export default function App(){

  const [moedas, setMoedas] = useState([])
  const [loading, setLoading] = useState(true);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null)

  useEffect( () => {
    async function  loadMoedas() {
      const response = await api.get('all')
      let arrayMoedas = [];
      Object.keys(response.data).map((key) =>  {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        })
      })
      setMoedas(arrayMoedas)
      setMoedaSelecionada(arrayMoedas[0].key)
      setLoading(false)
    }

    loadMoedas();

  },[])// arry de componentes vazio, significa que eçe vai chamar a função assim q o app rodar





if(loading){
  return(
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#101215' }}>
      <ActivityIndicator style = {{color : '#FFF', size: 'large'}}/>
    </View>
  )
}else{
  return(
    <View style = {styles.container}>
      <View style = {styles.areaMoeda}>
      <Text style = {styles.titulo}>Selecione sua moeda:</Text>
      <PickerItem
      moedas = {moedas}
      moedaSelecionada = {moedaSelecionada}
      onChange = {(moeda)  => setMoedaSelecionada(moeda) }

      />
      </View>

      <View style = {styles.areaValor}>
      <Text style = {styles.titulo}>Digite um valor para converter em (R$) </Text>
      <TextInput
      placeholder="EX: 1.50"
      style = {styles.input}
      keyboardType="numeric"
      />
      </View>

      <TouchableOpacity style = {styles.botaoArea}>
        <Text style = {styles.botaoText}>Converter</Text>
      </TouchableOpacity>
    </View>
  );
}
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
    padding: 8,
    marginBottom: 1
  },
  titulo: {
    fontSize:16,
    color: '#000',
    fontWeight:'500',
    paddingLeft: 5,
    paddingTop:5
  },
  areaValor:{
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingTop: 8,
    paddingBottom: 8,
  },
  input:{
    width: '100%',
    padding: 8,
    fontSize: 18,
    color: '#000'
  },
  botaoArea:{
    width:'90%',
    backgroundColor: '#FB5B57',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius:8
  },
  botaoText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16

  }
})

