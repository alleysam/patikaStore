import {StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    mainContainer:{
        height:300,
        width:125,
        borderColor:"purple",
        borderRadius:10,
        flex:1,
        alignItems:"center",
        margin:2,
        backgroundColor:"white",
    },
    title:{
        fontWeight:"bold",
        fontSize:12,
        color:"black",
    },
    price:{
        fontWeight:"bold",
        color:"green",
    },
    img:{
        height: Dimensions.get("window").height/4,
        width:Dimensions.get("window").width/4,
        resizeMode:"contain", 
    },
    stock:{
        color:"black",
        textDecorationLine:"underline",
    },
});