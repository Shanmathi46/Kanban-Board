
import { useState } from 'react';
import './app.scss'

function App() {
  const [tasks,setTasks]=useState([
    {
      name:"Drink Water",
      stage:0
    },
    {
      name:"Read Book",
      stage:0
    }
  ])
  const [input,setInput]=useState("")
  const stages=["Things to-do","Planned to-do","OnGoing","Completed"]

  const setStages=[]
  for(let i=0;i<stages.length;i++){
   setStages[i]=[]
  }
  for(let i=0;i<tasks.length;i++){
    setStages[tasks[i].stage].push(tasks[i])
   }
  const handleClick=(e)=>{
    const task={
      name:input,
      stage:0
    }
    e.preventDefault();
    setTasks([...tasks,task])
    console.log(tasks)
    setInput("")
    
  }
  const handleLeftArrow=(name)=>{
    
        let newTasks=tasks.map((item)=>{
          if(item.name==name){
            return {...item,stage:item.stage-1}
          }
          return item

        })
        setTasks(newTasks)
      }
    
    const handleRightArrow=(name)=>{
    
      let newTasks=tasks.map((item)=>{
        if(item.name==name){
          return {...item,stage:item.stage+1}
        }
        return item

      })
      setTasks(newTasks)
    }
    const deleteItem=(name)=>{
      console.log(name)
      let newTasks=tasks.filter((item)=>item.name!=name)
      setTasks(newTasks)
    }
  


  return (
    <div className="app">
      
      <div className="top">
        <div className="container">
          <input type="text" placeholder="Enter Task" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
          <button onClick={(e)=>{handleClick(e)}}>Add Task</button>
        </div>
      </div>
      <div className="bottom">
        <div className="card-container">
          {stages.map((item,index)=>{
            return(
              <div className="card">
              <h2>{item}</h2>
              <ul>
               {setStages[index].map((item)=>
                  (<li>
                 <div className="card-container">
                     <div className="left">
                     {item.name}
                     </div>
                     <div className="right">
                        <button onClick={()=>{handleLeftArrow(item.name)}} disabled={item.stage==0?true:false}>
                          <img src="assets/arrow-left.svg" alt="left-arrow" />
                        </button>
                         <button onClick={()=>{handleRightArrow(item.name)}} disabled={item.stage==3?true:false}>
                          <img src="assets/arrow-right.svg"alt="right-arrow" />
                         </button>

                         
                         <img src="assets/trash-alt.svg" alt="delete" onClick={()=>deleteItem(item.name)}/>
                     </div>
               </div>
               
             </li>)
               )}
              </ul>
         </div>
            )
          })}
       
        </div>
      </div>
    </div>
  );
}

export default App;
