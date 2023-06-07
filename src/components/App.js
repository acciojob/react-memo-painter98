import React, { useState } from 'react';

function App(){
    let [todo,setTodo] = useState('');
    let [count,setCount] = useState(0);
    let [skill,setSkill] = useState('');
    let [skills,setSkills] = useState([]);


    return (
        <div>
            <h2>React.useMemo</h2>
            <h2>My todos</h2>
            <p>{todo}</p>
            <button onClick={()=>setTodo('New Todo')} className="add-todo">Add Todo</button>
            <hr/>
            <span>Count:{count}</span>
            <button className="increment" onClick={()=>setCount(count+1)}>+</button>
            <h2>Expensive Calculation</h2>
            <p>1000000000</p>
            <hr/>
            <hr/>
            <h2>React.memo</h2>
            <input className='memo' minLength='5' onClick={(e)=>setSkill(e.target.value)}/>
            <button className="submit" onClick={()=>setSkills([...skills,skill])}>Add Skill</button>
            <ul>
                {
                    skills.map((element)=>{
                        console.log('in add skill');
                        return (<li>{element}</li>)
                    })
                }
            </ul>
        </div>
    )
}
export default App;