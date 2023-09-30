import {StyleSheet, View, } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';
function FirstScreen() {

    return <SafeAreaView style={{ flex: 1 }}>
        <View style={style.container}>

            <View style={style.Cicleshapeview} > </View>
            <View style={style.title}> <h1 style={{ fontWeight: 'bold' }} >GROW</h1>
                <h1 style={{ fontWeight: 'bold' }}>YOUR BUSINESS</h1></View>
            <View style={style.title}>
                <p>We will help you to grow your business using</p> 
                <br></br>
                online server
            </View>
            <View style={style.button}>
                <button style={{color:'black',background:'#F0C201',borderWidth:0,borderRadius:10,width:110,height:50, fontWeight: 'bold'}} >LOGIN</button>
                <button style={{color:'black',background:'#F0C201',borderWidth:0,borderRadius:10,width:110,height:50, fontWeight: 'bold'}} >SIGN UP</button>
            </View>
        </View>


    </SafeAreaView >

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#71E2FC',
    },

    Cicleshapeview: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#71E2FC',
        marginTop: '25%',
        borderWidth: 15,

    },
    title: {
        lineHeight: 2,
        alignItems: 'center',
        marginTop: 40,
        fontStyle: 'nomal',
    },
    button: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
        

    }



})
export default FirstScreen;