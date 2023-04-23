import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
interface IProps {
  title: string;
  message: string;
  index: number;
}
import TodoContext from '../context/Todo';

const Item: React.FC<IProps> = ({ title, message, index }) => {
  const todoContextData = React.useContext(TodoContext);

  const deleteItem = (idx: number) => {
    const data = todoContextData?.data.items.filter(
      (val, index) => index !== idx
    );
    todoContextData?.setData((d) => ({
      ...d,
      items: data ? data : [],
    }));
  };
 const handleEditBtn =(data:any,index: number)=>{
     todoContextData?.setData((d) => ({
      ...d,current:{...data},editKey:index,isAdding:false,isEditable:true

    }));
   }
  return (
    // <>
    <View style={style.main}>
      <View style={style.leftBox}>
        <Text style={style.title}>
          {index+1}. {title}
        </Text>
        <Text style={style.message}>{message}</Text>
      </View>
      <View style={style.rightBox}>
        <TouchableOpacity style={style.editbtn}
        onPress={()=>{
          handleEditBtn({title,message},index)
        }}
        >
          <Text>
            <Image source={require('../assets/pen.png')} />{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.editbtn}
          onPress={() => {
            deleteItem(index);
          }}
        >
          <Text>
            <Image source={require('../assets/delete.png')} />{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // </>
  );
};
export default Item;

const style = StyleSheet.create({
  main: {
    backgroundColor: '#faf3e6',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '700',
  },
  leftBox: {
    width: '70%',
    // backgroundColor:"red"
  },
  rightBox: {
    // alignItems: 'center',
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-between',
  },
  message: {
    color: 'gray',
  },
  editbtn: {
    width: '40%',
  },
  deletebtn: {
    width: '40%',
  },
});
