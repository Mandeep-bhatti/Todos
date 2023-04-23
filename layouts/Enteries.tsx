import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Alert,
} from 'react-native';
import TodoContext from '../context/Todo';

const Enteries: React.FC = () => {
  const [addItem, setAddItem] = React.useState({
    title: '',
    message: '',
  });

  const todoContextData = React.useContext(TodoContext);

  const newaddBtnClcik = (): void => {
    todoContextData?.setData((d) => ({
      ...d,
      isAdding: false,
      current: { title: '', message: '' },
      editKey: -1,
      isEditable: false,
    }));
  };
  const addBtnHandle = () => {
    if (
      todoContextData?.data?.current?.title?.length > 0 &&
      todoContextData?.data.current.message.length > 0
    ) {
      todoContextData?.setData((d) => ({
        ...d,
        isAdding: true,
        items: [...d.items, { ...d.current }],
        current: {
          title: '',
          message: '',
        },
      }));
      setAddItem({ title: '', message: '' });
    } else {
      Alert.alert('Please Enter require data.');
    }
  };

  const cancelBtnHandle = () => {
    todoContextData?.setData((d) => ({
      ...d,
      isAdding: true,
    }));
  };

  const titleChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    todoContextData?.setData((obj) => {
      return {
        ...obj,
        current: { ...obj.current, title: e.nativeEvent.text },
      };
    });
  };

  const messageChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    todoContextData?.setData((obj) => {
      return {
        ...obj,
        current: { ...obj.current, message: e.nativeEvent.text },
      };
    });
  };

  const editBtnHandler = () => {
    const items = todoContextData.data.items;
    const selectedIndex = todoContextData.data.editKey;
    const currentVal = todoContextData.data.current;
    items.splice(selectedIndex, 1, currentVal);

    todoContextData?.setData((obj) => {
      return {
        ...obj,
        items: [...items],
        current: {
          title: '',
          message: '',
        },
        isEditable: false,
        editKey: -1,
      };
    });
  };
  return (
    <View style={styles.mainContainer}>
      {todoContextData?.data.isAdding ? (
        <View style={styles.addBtn}>
          <Button
            color='rgb(239 177 13)'
            onPress={newaddBtnClcik}
            title='+ Add'
          ></Button>
        </View>
      ) : (
        <View>
          <View>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: '700',
                paddingVertical: 10,
              }}
            >
              Note
            </Text>
          </View>
          <TextInput
            onChange={titleChangeHandler}
            placeholder='*Enter title'
            style={styles.inputField}
            value={todoContextData?.data.current.title}
          ></TextInput>
          <TextInput
            onChange={messageChangeHandler}
            multiline={true}
            numberOfLines={4}
            placeholder='*Enter notes here...'
            style={{ ...styles.inputField, ...styles.textArea }}
            value={todoContextData?.data.current.message}
          ></TextInput>
          <View style={styles.btncontainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.cancelbtn}
              onPress={cancelBtnHandle}
            >
              <Text style={{ textAlign: 'center', color: '#000' }}>Cancel</Text>
            </TouchableOpacity>
            {todoContextData.data.isEditable ? (
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.addbtn2}
                onPress={editBtnHandler}
              >
                <Text style={{ textAlign: 'center', color: '#fff' }}>edit</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.addbtn2}
                onPress={addBtnHandle}
              >
                <Text style={{ textAlign: 'center', color: '#fff' }}>Add</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    //  paddingLeft:10,
    //  paddingRight:10
  },
  inputField: {
    borderWidth: 0,
    borderBottomWidth: 1,
    // borderRadius: 50,
    height: 40,
    // backgroundColor: '#ebebeb',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    borderBottomColor: '#b0afac',
    shadowOpacity: 0.32,
    // shadowRadius: 1,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    // elevation: 4,
  },
  textArea: {
    height: 200,
    textAlignVertical: 'top',
    // borderRadius: 10,
    marginTop: 15,
    paddingVertical: 20,
  },
  addBtn: {
    width: 100,
    // backgroundColor: 'yelllow',
    marginVertical: 10,
  },
  addbtn2: {
    width: '40%',
    backgroundColor: "'rgb(239 177 13)'",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btncontainer: {
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cancelbtn: {
    width: '40%',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  mainContainer: {
    backgroundColor: '#fefefe',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    // borderBottomWidth:1,
    borderBottomColor: '#b7b7b7',
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.54,
    elevation: 3,
  },
});

export default Enteries;
