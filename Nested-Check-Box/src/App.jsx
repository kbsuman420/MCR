import { useState } from "react"
import json from "./data.json"


const Checkbox = ({data, setList, list}) => {

  const handleCheckBoxes = (list, id) => {
    console.log(list)
    const updateData = (listArr) => {
      const ud = listArr.map((lst) => {
        console.log(lst)
        if(lst.id === id) {
          return {...lst, checked: !lst.checked}
        }
        if(lst.children.length) {
          return {...lst, children: updateData(lst.children)}
        }
        return lst;
      })
      return ud;
    }
    setList(updateData(list))
  }

  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" name={data.name} checked={data.checked} onChange={() => handleCheckBoxes(list, data.id)}/>
        {data.name}
      </label>
      {data.children && data.children.map((d1) => <Checkbox data={d1} key={d1.id} setList={setList} list={list}/>)}
    </div>
  )
}

export default function App() {
  const [list, setList] = useState(json);

  return (
    <div className="container">
      {
        list.map((data) => (
          <Checkbox key={data.id} data={data} setList={setList} list={list}/>
        ))
      }
    </div>
  )
}
