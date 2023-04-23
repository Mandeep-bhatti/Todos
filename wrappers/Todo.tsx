import React from 'react';
import TodoContext, { IProps } from '../context/Todo';

const Todo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = React.useState<IProps>({
    isAdding: true,
    items: [],
    current: {
      title: '',
      message: '',
    },
    editKey: -1,
    isEditable: false,
  });
  return (
    <React.Fragment>
      <TodoContext.Provider value={{ data, setData }}>
        {children}
      </TodoContext.Provider>
    </React.Fragment>
  );
};
export default Todo;
