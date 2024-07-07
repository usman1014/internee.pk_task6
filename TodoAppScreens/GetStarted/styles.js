import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logo:{
        width: '100%',
        height:'50%' ,
    },
    title:{
        fontSize:32,
        color:"#3839AF",
        fontWeight: "bold",
        left: 10,


    },
    subtitle:{
        textAlign:'left',
        color:'#3839AF',
        fontSize:16,
        paddingHorizontal:20,
        left:10,
        
    },
    button:{
        alignSelf:'center',
        backgroundColor: '#3839AF',
        padding:15,
        borderRadius:30,
        elevation:5,
        shadowOffset:{width:-4,height:7},
        shadowOpacity:0.1,
        shadowRadius:10,
        width: '100%',
        position: 'absolute',
        bottom:20,
        
    },
    btnText:{
        textAlign:'center',
        color:'white'
    },
});