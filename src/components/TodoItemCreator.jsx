import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from './TodoStore';

export default function TodoItemCreator() {
  const [inputValue,setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const [id,setId]=useState(0);

  const getId = ()=>{
    setId((pre)=>pre+1);
    return id;
  };

  const addItem = ()=>{
    setTodoList((pre)=>
      [...pre,
        {
          id : getId(),
          text : inputValue,
          isComplete : false,
        },
      ]
    );
    setInputValue('');
  };
  
  const onChange = (event)=>{
    setInputValue(event.target.value);
  };

  return (
    <div className='creator'>
      <input  onChange={onChange} value={inputValue}></input>
      <button onClick={addItem}>할일 추가</button>
    </div>
  )
}


