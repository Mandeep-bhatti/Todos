import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Item from './Item';
import TodoContext from '../context/Todo';

const data = new Array(50).fill( {
    title: 'app',
    message: 'this is my app',
  });

function TodoList() {
   const todoContextData= React.useContext(TodoContext)
  return (
    <>
      {/* <ScrollView> */}
        <View style={{paddingLeft:20,paddingRight:20}}>
          <FlatList
            data={todoContextData?.data.items}
            renderItem={(data: any) => {
              return (<Item title={data.item.title} message={data.item.message} index={data.index}/>
              );
            }}
          ></FlatList>

{
  todoContextData.data.items.length===0 &&          <Text style={styles.notfound}>Data not available</Text>

}
        </View>
      {/* </ScrollView> */}
    </>
  );
}

 const styles = StyleSheet.create({
  notfound:{
     fontWeight:"700",
     fontSize:20,
     color:"#b3b3b3",
     textAlign:"center"
  }
 })
export default TodoList;
