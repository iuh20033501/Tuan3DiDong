import { StyleSheet,View,} from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';

function Screen1_c() {
    return <SafeAreaView style={{ flex: 1 }}>
    
        <View style={style.container}>
            <View style={style.header}> <h1 style={{ fontWeight: 'bold' }} >CODE </h1>
                </View>
            
            <View style={style.title}> <h3 style={{ fontWeight: 'bold' }} >VERIFICATION </h3>
                </View>
            <View style={style.paraphrase}>
                <p>Enter onetime password send on</p> 
                     ++849092606798
            </View>
            
            <View style = {style.boxinput}>
                     <View style={style.box}><input style={style.input}></input></View>
                    <View style={style.box}><input style={style.input}></input></View>
                    <View style={style.box}><input style={style.input}></input></View>
                    <View style={style.box}><input style={style.input}></input></View>
                    <View style={style.box}><input style={style.input}></input></View>
                    <View style={style.box}><input style={style.input}></input></View>
            </View>
            <View style={style.button}>
                <button style={{ color: 'black', background: '#F0C201',borderWidth:0, borderRadius: 5, width: '100%', fontWeight: 'bold' }} >VERIFY CODE</button>

            </View>

        </View>

        </SafeAreaView >
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bfebec',
    },

    header:{
        fontSize: 40,
        marginTop:-100,
    },
    boxinput : {
        flexDirection: 'row',
        borderColor:'#0b0c11',
        width: "85%",
        marginTop: 40,

    },
    box: {
    width: "16.6%",
    height: 50,
    borderWidth: 1,
  },
    title: {
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: -10,
        fontWeight: 'bold', 
        fontSize:20
    },
    input:{
        width: '86%',
        height:'100%',
        marginLeft: 0,
        backgroundColor: '#bfebec',
    },
    button: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '84%',
        height: 50  ,


    },
    paraphrase: {
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: 20,
        fontSize:18,
        fontWeight: 'bold',
    },
    icon: { 
            //flex:1,
            width: 30,
            height: 30,
            position: "absolute",   
            top: "50%",
            left: "10%",
    },

})
export default Screen1_c;