import { atom, selector } from "recoil";

export const todoListState = atom({
    key : 'todoListState',
    default : [],
});

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
  });

export const filteredTodoListState = selector({
    key : 'filteredTodoListState',
    get : ({get})=>{
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'Show Completed':
                return list.filter((item)=>item.isComplete);
                
            case 'Show Uncompleted':
                return list.filter((item)=>!item.isComplete);
            default:
                return list;
        }
    },
});

export const toDoListStatsState = selector({
    key : 'toDoListStatsState',
    get : ({get})=>{
        const list = get(todoListState);
        const totalNum = list.length;
        const completedNum = list.filter((item)=>item.isComplete).length;
        const unCompletedNum = totalNum - completedNum;
        const percentCompleted = totalNum ===0 ? 0 : completedNum/totalNum;

        return {
            totalNum,
            completedNum,
            unCompletedNum,
            percentCompleted,
        };
    },
});