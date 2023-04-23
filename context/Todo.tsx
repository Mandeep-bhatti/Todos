import React ,{SetStateAction,Dispatch}from 'react';

export interface IProps {
  isAdding: boolean;
  items: any[];
  current:{
    title:string,
    message:string
  },
  editKey:number,
  isEditable:boolean
}

export interface Initial {
  data: IProps;
  setData: Dispatch<SetStateAction<IProps>>;
}
const int={
  data:{
    isAdding:false,
    items:[],
    editKey:-1,
    current:{
      title:"",message:""
    },
    isEditable:false
  }
  ,setData:()=>{}
}
const TodoContext = React.createContext<Initial>(int);
export default TodoContext;
