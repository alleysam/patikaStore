import React from "react";
import { View, Text, Image, Button} from "react-native";
import style from "./PatikaStoreCard.style";

const PatikaStoreCard = ({produtcs}) =>{
    let stockState= false;
    function buy(){
        console.log("SatınAl");
    }

    if(produtcs.inStock === true)[
        stockState ="Stokta Var!",
    ]
    else{
        stockState="Stokta Yok!"
    }
    return(
        <View style={style.mainContainer}>
            <Image style={style.img} source={{uri:produtcs.imgURL}}></Image> 
            <Text style={style.title}>{produtcs.title}</Text>     
            <Text style={style.price}>{produtcs.price}</Text>
            <Text style={style.stock}>{stockState}</Text>
            <Button style={style.button} title="Satın Al" onPress={buy}/>
        </View>
    );
}

export default PatikaStoreCard;