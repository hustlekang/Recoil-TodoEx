import React from 'react'
import { useRecoilValue } from 'recoil'
import { toDoListStatsState } from './TodoStore';

export default function TodoListStats() {
  const {
    totalNum,
    completedNum,
    unCompletedNum,
    percentCompleted,
  } = useRecoilValue(toDoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <table>
      <tbody>
          <tr >
            <td>전체</td>
            <td>끝낸일</td>
            <td>남은일</td>
            <td>진행률</td>
          </tr>
          <tr>
            <td>{totalNum}</td>
            <td >{completedNum}</td>
            <td >{unCompletedNum}</td>
            <td>{formattedPercentCompleted}%</td>
          </tr>
          </tbody>
        </table>    
  )
}
