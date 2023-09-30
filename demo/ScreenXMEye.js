import { StyleSheet,View,} from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';

function ScreenXMEye() {
    return <SafeAreaView style={{ flex: 1 }}>
    
        <View style={style.container}>
            
            <Image source = {require('../demo/img/eyelast.png')} style={style.header} />
                <br></br> <br></br>
                <View style={{ position: "relative", width: "100%" }}>
                <Image source = {require('../demo/img/user.png')} style={style.icon} />
                <Image source = {require('../demo/img/pass.png')} style={style.icon3} />

                <input placeholder='Please input user name' style={style.input}></input>
                <br></br>
                <input placeholder='Please input password' style={style.input}></input>
            </View>
            <View style={style.button}>
                <button style={{ color: 'white', background: '#386ffd',borderWidth:0, borderRadius: 10, width: '95%', fontWeight: 'bold' }} >LOGIN</button>
            </View>
            
            <View style= {style.paraphrase}>
                Register 
            </View>
            <View style= {style.paraphrase2}>
               Forgot Password
            </View>
            <View><p style={{fontSize:18, marginTop:50,}}>Orther Login Methods</p></View>
            <View style = {style.boxinput}>
                     <View style={style.box}>
                        <Image source={require('../demo/img/addfriend.png')} style = {style.icon4}/>
                     </View>
                    <View style={style.box}>
                        <Image source={require('../demo/img/wifi.png')} style = {style.icon4}/>
                        </View>
                    <View style={style.box}> <Image source={require('../demo/img/facebook.png')} style = {style.icon4}/></View>
                    </View>
        </View>

        </SafeAreaView >
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        alignItems: 'center',
        justifyContent: '"center"',
        backgroundColor: '#ffffff',
    },

    header:{
        justifyContent: 'center',
        marginTop: 40,
        width: 100,
        height:100,
    },
    boxinput : {
        flexDirection: 'row',
       // borderColor:'#0b0c11',
        width: '300%',
       // marginTop: 40,
        height: '100%'

    },
    box: {
    width: '100%',
    height: '300%',
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
        paddingLeft: 50,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "black",
      //  top: '50%',
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
        marginTop: "10%",
        marginLeft: "-75%",
        fontSize:18,
        //justifyContent: 'space-around',
        letterSpacing: 1,
    },
    paraphrase2: {
        lineHeight: 0.1,
        marginTop: "0%",
        fontSize:18,
        marginLeft: "55%",
        //justifyContent: 'space-around',
        letterSpacing: 1,
    },
    icon3: { 
            width: 27,
            height: 27,
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
icon4: { 
    width: 70,
    height: 70,
    position: "absolute",   
    top: "0%",
    left: "-8%",
},
    icon2: { 
        width: 50,
        height: 35,
        position: "absolute",   
        top: "64%",
        left: "80%",
},
    boxinput : {
        //display: flex,
        flexDirection: 'row',
        letterSpacing: 20,
        borderColor:'#0b0c11',
        width: "100%",
        marginTop: -60,

    },
    box: {
    width: '20%',
    height: '40%',
    marginTop:100,
    margin: 25,
    justifyContent: "space-between",
    padding: '20px',
  },

})
export default ScreenXMEye;