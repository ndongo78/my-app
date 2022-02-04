import React,{FC, useLayoutEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface Props {
    navigation: any
}

const HomeScreen:FC <Props> = ({navigation}) => {

    useLayoutEffect(() => {
       navigation.setOptions({
            headerLeft: ()=>(
                <View>
                    <Text style={styles.headerTitle}>Home</Text>
                    <Text style={styles.headerSubTitle}>Home Screen</Text>
                </View>
            ),
            headerTitleAlign: 'left',
       });
    }, [navigation]);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
           <Text>header</Text>
      </View>
        <View style={styles.body}>
            <Text>body</Text>
        </View>
        <View style={styles.footer}>
            <Text>footer</Text>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#0f1624',
    },
    header: {
        backgroundColor:'red',
        flex: 1,
      
    },
    body:{
        backgroundColor:'green',
        flex: 3,
    },
    footer:{
        backgroundColor:"#000",
        flex: 1,
    }
});
