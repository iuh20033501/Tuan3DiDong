import { StyleSheet,View,} from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';

function Screen1_e() {
    return <SafeAreaView style={{ flex: 1 }}>
    
        <View style={style.container}>
            <View style={style.header}> <h4 style={{ fontWeight: 'bold'}} >REGISTER </h4>
                </View>
                <View style={{ position: "relative", width: "100%" }}>
                <input placeholder='Name' style={style.input}></input>
                <br></br>
                <input placeholder='Phone' style={style.input}></input>
                <br></br>
                <input placeholder='Email' style={style.input}></input>
                <br></br>
                <Image source = {require('../demo/img/yeyefix.png')} style={style.icon2} />

                <input placeholder='Password' style={style.input}></input>
                <br></br>
                <input placeholder='Brithday' style={style.input}></input>
            </View>
            <View style={{ position: "relative", width: "100%" }}>
            <input style={style.radio1} type='radio'></input> 
            <View><p style={style.paraphrase2}>Male</p> <p style={style.paraphrase3}>Female</p></View>
            <input style={style.radio2} type='radio'></input> 
            </View>
            <View style={style.button}>
                <button style={{ color: 'black', background: '#c34e3c',borderWidth:0, borderRadius: 0, width: '100%', fontWeight: 'bold' }} >LOGIN</button>
            </View>
            <View style= {style.paraphrase}>
                <p>When you argee to tems and conditions</p>
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
        backgroundColor: '#d8efdf',
    },

    header:{
        fontSize: 40,
        marginTop:-50,
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
        width: '360px',
        height: '40px',
        marginLeft: 0,
        backgroundColor: '#cae1d1',
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
    paraphrase2: {
        flexDirection: 'row',
        
        lineHeight: 0.1,
        alignItems: 'center',
        marginLeft: "20%",
        fontSize:18,
    },
    paraphrase3: {
        flexDirection: 'row',

        lineHeight: 0.1,
        alignItems: 'center',
        marginLeft: "50%",
        marginTop: "-6%",
        fontSize:18,
    },
    radio1: { 
            width: 20,
            height: 20,
            position: "absolute",   
            top: 5,
            left: "10%",
    },
    radio2: { 
        width: 20,
        height: 20,
        position: "absolute",   
        top: 5,
        left: "40%",
},
    icon2: { 
        width: 50,
        height: 35,
        position: "absolute",   
        top: "66%",
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
export default Screen1_e;