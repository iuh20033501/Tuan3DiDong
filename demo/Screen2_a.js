import { StyleSheet,View,} from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';

function Screen2_a() {
    return <SafeAreaView style={{ flex: 1 }}>
    
        <View style={style.container}>
            <View style={style.header}> <h4 style={{ fontWeight: 'bold'}} >LOGIN </h4>
                </View>
                <View style={{ position: "relative", width: "100%" }}>
                <Image source = {require('../demo/img/1077114.png')} style={style.icon} />
                <Image source = {require('../demo/img/lock.png')} style={style.icon3} />

                <input placeholder='Email' style={style.input}></input>
                <br></br>
                <Image source = {require('../demo/img/yeyefix.png')} style={style.icon2} />

                <input placeholder='Password' style={style.input}></input>
            </View>
            <View style={style.button}>
                <button style={{ color: 'white', background: '#060000',borderWidth:0, borderRadius: 0, width: '100%', fontWeight: 'bold' }} >LOGIN</button>
            </View>
            <View style= {style.paraphrase}>
                <h3>CREATE ACCOUNT</h3>
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
        backgroundColor: '#f5c500',
    },

    header:{
        fontSize: 40,
        marginTop:-90,
        marginLeft:-200,
    },
    boxinput : {
        flexDirection: 'row',
        borderColor:'#0b0c11',
        width: '200%',
        marginTop: 40,

    },
    box: {
    width: 50,
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
        width: '320px',
        height: '40px',
        marginLeft: 0,
        backgroundColor: '#dcbe3c',
        paddingLeft: 50,
        borderWidth: 2,
        borderColor: "white",
    },
    button: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        


    },
    paraphrase: {
        lineHeight: 0.1,
        alignItems: 'center',
        marginTop: "10%",
        fontSize:18,
    },
    icon3: { 
            width: 30,
            height: 30,
            position: "absolute",   
            top: 70,
            left: "3%",
    },
    icon: { 
        width: 30,
        height: 30,
        position: "absolute",   
        top: 8,
        left: "3%",
},
    icon2: { 
        width: 50,
        height: 35,
        position: "absolute",   
        top: "64%",
        left: "80%",
},
    boxinput : {
        
        flexDirection: 'row',
        borderColor:'#0b0c11',
        width: "85%",
        marginTop: -60,

    },
    box: {
    width: "33.3%",
    height: 30,
    marginTop:100,
    borderWidth: 1,
  },

})
export default Screen2_a;