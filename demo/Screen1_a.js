import {
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-web';

function Screen1_a() {

    return <SafeAreaView style={{ flex: 1 }}>
        <View style={style.container}>

            <View style={style.Cicleshapeview} > </View>
            <View style={style.title}> <h1 style={{ fontWeight: 'bold' }} >GROW</h1>
                <h1 style={{ fontWeight: 'bold' }}>YOUR BUSINESS</h1></View>
            <View style={style.title}>
                <p>We will help you to grow your business using </p> 
                <br></br>
                online server
            </View>
            <View style={style.button}>
                <button style={{color:'black',background:'#F0C201',borderWidth:0,borderRadius:10,width:110,height:50, fontWeight: 'bold'}} >LOGIN</button>
                <button style={{color:'black',background:'#F0C201',borderWidth:0,borderRadius:10,width:110,height:50, fontWeight: 'bold'}} >SIGN UP</button>
            </View>
            <View style={style.footer} >HOW WE WORK?</View>
        </View>


    </SafeAreaView >

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bfebec',
    },

    Cicleshapeview: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: '#bfebec',
        marginTop: '25%',
        borderWidth: 15,

    },
    title: {
        lineHeight: 1.5,
        alignItems: 'center',
        marginTop: 40,
        fontStyle: 'nomal',
    },
    button: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
    },
    footer:{
        marginTop:20,
        fontSize:20,
        fontWeight: 'bold',
    },



})
export default Screen1_a;