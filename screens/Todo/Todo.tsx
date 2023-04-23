import React from 'react'
 import { View ,ScrollView} from 'react-native'
import Enteries from '../../layouts/Enteries'
import TodoList from '../../layouts/TodoList'
function Todo():React.ReactElement {
  return (
    <View><Enteries/><TodoList/></View>
  )
}

export default Todo