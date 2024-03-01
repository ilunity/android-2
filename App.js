import {Image, ImageBackground, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import {Asset} from 'expo-asset';

import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";

const backgroundURI = Asset.fromModule(require('./assets/background.png')).uri;
const logoURI = Asset.fromModule(require('./assets/logo.png')).uri;
const imageUri = Asset.fromModule(require('./assets/image.png')).uri;

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'HelveticaNeue-Regular': require('./assets/fonts/HelveticaNeue-Regular.ttf'),
        'AirbnbCereal-Bold': require('./assets/fonts/AirbnbCereal-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <ImageBackground source={{uri: backgroundURI}} style={styles.background} resizeMode="stretch">
                <View style={styles.logo}>
                    <Text style={styles.logoText}>
                        Silent
                    </Text>
                    <Image source={{uri: logoURI}} style={styles.logoImage}/>
                    <Text style={styles.logoText}>
                        Moon
                    </Text>
                </View>
                <Image source={{uri: imageUri}} style={styles.image}/>
                <View style={styles.slogan}>
                    <Text style={styles.sloganTitle}>
                        We are what we do
                    </Text>
                    <Text style={styles.sloganBody}>
                        Thousand of people are using silent moon for smalls meditation
                    </Text>
                </View>
                <View style={styles.signUp}>
                    <Pressable style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}>SIGN UP</Text>
                    </Pressable>
                    <View style={styles.login}>
                        <Text style={styles.loginText}>ALREADY HAVE AN ACCOUNT?</Text>
                        <Text style={styles.loginLink} onPress={() => Linking.openURL('http://google.com')}>
                            LOG IN
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        alignItems: 'center',
        height: 504,
        flex: 1,
        paddingHorizontal: 20,
    },
    logo: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        gap: 10,
    },
    logoText: {
        fontFamily: 'AirbnbCereal-Bold',
        fontSize: 16,
        color: '#3F414E',
    },
    logoImage: {
        width: 30,
        height: 30,
    },
    image: {
        width: 289,
        height: 173,
        marginTop: 36,
    },
    slogan: {
        width: 294,
        alignItems: 'center',
        marginTop: 36,
    },
    sloganTitle: {
        fontFamily: "Roboto-Bold",
        fontSize: 30,
        color: '#3F414E',
        lineHeight: 40.5
    },
    sloganBody: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#A1A4B2",
        lineHeight: 26.4,
        textAlign: 'center'
    },
    signUp: {
        marginTop: 'auto',
        alignItems: 'center',
        paddingBottom: 32,
    },
    signUpButton: {
        width: 300,
        height: 63,
        marginTop: 110,
        borderRadius: 38,

        backgroundColor: '#8E97FD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpButtonText: {
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        color: '#fff'
    },
    login: {
        width: 282,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginText: {
        fontSize: 14,
        color: '#A1A4B2',
    },
    loginLink: {
        fontSize: 14,
        color: '#8E97FD',
    }
});
