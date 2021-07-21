import React, { useState } from 'react';
import { Slider } from 'react-native-elements/dist/slider/Slider';
import {  Text, View, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles/styles';
import { Button } from './components/button';

export default function App() {

    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0.0);
    const maximumValue = 3.15;
    
    
    const togglePlay = () => {
      isPlaying === true ? setIsPlaying(false) : setIsPlaying(true);
    }
    return(
        <LinearGradient colors={["#222", "#444"]} style={styles.gradient}>
            <SafeAreaView style = {styles.header}>
              <Text style={styles.headerText}>Now Playing</Text>
            </SafeAreaView>
            <View style={ styles.container}>
                <Image 
                  source={require('./assets/images/MOTMTLogo.png')} 
                  style={styles.image}
                />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>
                      MenOnTheMooN: Episode 1
                    </Text>
                  <Button background='#8a2be2' 
                    text={'ellipsis-h'} 
                    color='white'
                    radius={50}
                    style={{ width: 30, height: 30, marginLeft: 40}}
                  />
                </View>
              <View style={styles.progressContainer}>
                <Slider
                  thumbTintColor = "#8a2be2"
                  maximumValue = {maximumValue} 
                  minimumTrackTintColor="#8a2be2"
                  onValueChange={(value) => setDuration(value)} 
                 />
                <View style={styles.durationContainer}>
                  <Text style = {[styles.durationText, { textAlign: 'left'}]}>
                    {duration.toFixed(2)}
                  </Text>
                  <Text style = {[styles.durationText, { textAlign: 'right'}]}>
                    -{(maximumValue - duration).toFixed(2)}
                  </Text>
                </View>
              </View>
              <View style={styles.buttonsContainer}>
                <Button style={styles.mainButtons} 
                  text = 'backward' 
                  color='white' 
                  size={30}
                />
                <Button 

                  style={styles.mainButtons} 
                  onPress = {() => togglePlay()} 
                  text = {isPlaying ? 'pause' : 'play'} 
                  color='white' 
                  size={30}
                />
                <Button 
                  style={styles.mainButtons}  
                  text = 'forward'
                  color='white' 
                  size={30}
                />
              </View>
              <View style={[styles.progressContainer, {flexDirection: 'row'}]}> 
                <Button 
                   onPress = {() => {}}
                  style={{flex: 0.1}} 
                  text='volume-off' 
                  color="white" size={16}
                />
                <Slider 
                  thumbTintColor = "#8a2be2"
                  style={{flex: 0.8 }} 
                  minimumTrackTintColor='#8a2be2' 
                />
                <Button 
                  onPress = {() => {}}
                  style = {{flex: 0.1}}
                  text='volume-up' 
                  color="white" 
                  size={16}
                />
                
              </View>
          </View>  
          
        </LinearGradient>
    );
    

}
