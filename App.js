import React from "react";
import {View,Text,TextInput,FlatList,StyleSheet} from "react-native";
import data from "./products_json/data.json";
import PatikaStoreCard from "./components/PatikaStoreCard";

const App = () => {

  const renderItem = ({item}) => <PatikaStoreCard produtcs={item}/>;
  return(
    <View style={style.viewMain}>
      <Text style={style.header}>PatikaStore</Text>
      <TextInput style={{borderWidth:1, backgroundColor:"white", borderRadius:10, borderColor:"white", width:400, margin:5,}} placeholder={"Ara..."} blurOnSubmit={true} ></TextInput>
      <View>
        <FlatList numColumns={2} data={data} renderItem={renderItem}/>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
    viewMain:{
      flex:1,
      backgroundColor:"#92b4ec",
    },
    header:{
      fontSize:18,
      fontWeight:"bold",
      marginLeft:4,
    }

});
export default App;