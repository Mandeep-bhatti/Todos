import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import Todo from './screens/Todo/Todo';
import TodoWrapper from './wrappers/Todo';
// import { ToastProvider } from 'react-native-toast-notifications'

export default function App() {
  return (
    <>
      {/* <ToastProvider> */}
      <View style={styles.container}>
        <TodoWrapper>
          <Todo />
        </TodoWrapper>
        <StatusBar style='auto' />
      </View>
      {/* </ToastProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    //  paddingLeft:10,
    //  paddingRight:10
  },
});
