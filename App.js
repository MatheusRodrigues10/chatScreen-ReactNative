import { StatusBar } from 'expo-status-bar';
import { Platform, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { chatData } from './src/chatData';
import MsgItem from './src/MsgItem';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={chatData}
        renderItem={({item}) => <MsgItem data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS == 'ios') ? 20 : 40,
    backgroundColor: '#FFFFFF'
  },
});
