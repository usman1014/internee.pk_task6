import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#b0c4de',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#b0c4de',

    },
    name: {
        fontSize: 28,
        color: "#333",
        paddingTop: 30,
    },
    wrapper: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#555',
    },
    items: {
        paddingTop: 20,
    },
    writeTaskWrapper: {
        width: '100%',
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        // backgroundColor: '#b0c4de',
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 60,
        borderWidth: 1,
        width: '80%',
        borderColor: '#c0c0c0'
    },
    addWrapper: {
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#c0c0c0'
    },
    arrow: {
        height: 25,
        width: 25,
        tintColor: '#55bcf6',
    },
   
    modalHeading:{
        paddingTop:20,
        color:'#000',
        fontSize:25,
        paddingHorizontal:20,
    },

    message:{
        textAlign:'center',
        paddingTop:30,
        color:'#000',
        fontSize:18,
        paddingHorizontal:20,
        paddingBottom:50,
    },
    modalButton:{
        alignSelf:'center',
        backgroundColor: '#55bcf6',
        padding:15,
        width:'90%',
        borderRadius:20,
    },
    btnText:{
        color:'#fff',
        textAlign:"center",
    },
    cancelBtn:{
        width: '50%',
        alignSelf:'center',
        marginVertical:20

    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#00000070', // semi-transparent black
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff', // white background for the modal content
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
});