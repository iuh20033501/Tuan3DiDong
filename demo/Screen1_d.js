        import { StyleSheet,View,} from 'react-native';
        import { SafeAreaView } from 'react-native-web';
        import { Image } from 'react-native';

        function Screen1_d() {
            return <SafeAreaView style={{ flex: 1 }}>
            
                <View style={style.container}>
                    <View style={style.header}> <h4 style={{ fontWeight: 'bold'}} >LOGIN </h4>
                        </View>
                        <View style={{ position: "relative", width: "100%" }}>
                        <input placeholder='Email' style={style.input}></input>
                        <br></br>
                        <br></br>
                        <Image source = {require('../demo/img/yeyefix.png')} style={style.icon2} />
                        
                        <input placeholder='Password' style={style.input}></input>

                    </View>
                    <View style={style.button}>
                        <button style={{ color: 'black', background: '#c34e3c',borderWidth:0, borderRadius: 0, width: '100%', fontWeight: 'bold' }} >LOGIN</button>
                    </View>
                    <View style= {style.paraphrase}>
                        <p>When you argee to tems and conditions</p>
                       <p><a href='#'>For got your password?</a></p> 
                        <p>Or login with</p>
                    </View>
                    <View style = {style.boxinput}>
                     <View style={style.box}>
                        <Image source={require('../demo/img/fb2.png')} style = {style.icon}/>
                     </View>
                    <View style={style.box}>
                        <Image source={require('../demo/img/zalo.png')} style = {style.icon}/>
                        </View>
                    <View style={style.box}> <Image source={require('../demo/img/gg3.png')} style = {style.icon}/></View>
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
            icon: { 
                    width: 104,
                    height: 29,
                    position: "absolute",   
                    top: "0%",
                    left: "%",
            },
            icon2: { 
                width: 50,
                height: 35,
                position: "absolute",   
                top: "68%",
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
        export default Screen1_d;