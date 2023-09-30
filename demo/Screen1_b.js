    import { StyleSheet,View,} from 'react-native';
    import { SafeAreaView } from 'react-native-web';
    import { Image } from 'react-native';

    function Screen1_b() {
        return <SafeAreaView style={{ flex: 1 }}>
        
            <View style={style.container}>

                <Image
                    source={require('../demo/img/61457.png')}
                    style={style.imag}
                />
                <View style={style.title}> <h1 style={{ fontWeight: 'bold' }} >FORGET </h1>
                    <h1 style={{fontWeight: 'bold' }}> PASSWORD </h1></View>
                <View style={style.paraphrase}>
                    <p>Provide account's email for which you</p> 
                         want to reset your password
                </View>
                
                <View style={{ position: "relative", width: "100%" }}>
                <Image
                    source={require('../demo/img/mail1.png')}
                    style={style.icon}
                    />
                <input type='text' placeholder='Email' style={style.input}>
                </input>
                </View>
                <View style={style.button}>
                    <button style={{ color: 'black', background: '#F0C201',borderWidth:0, borderRadius: 5, width: '100%', fontWeight: 'bold' }} >NEXT</button>

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


        imag: {
            width: 150,
            height: 150,
            marginTop: '-10%',
            backgroundColor: '#bfebec',
            
        },
        title: {
            lineHeight: 0.1,
            alignItems: 'center',
            marginTop: 20,
            fontWeight: 'bold', 
            fontSize:20
        },
        input:{
            marginTop:30,
            paddingLeft:60,
            width: '65%',
            height: 40,
            marginLeft:30,
            fontSize : 15,
            borderColor: '#0b0c11'

        },
        button: {
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            width: '84%',
            height: 40,


        },
        paraphrase: {
            lineHeight: 0.1,
            alignItems: 'center',
            marginTop: 20,

            fontSize:18,
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
    export default Screen1_b;