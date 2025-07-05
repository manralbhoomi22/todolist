import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
// import Container from'./components/Container';

function App() {
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);
  useEffect(() => {
    let data=localStorage.getItem("todos");
    if(data){
     setTodos(JSON.parse(data))
    }
  }, [])
  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  }
   const handleAdd = () => {
    setTodos([...todos,{id:uuidv4(),todo,isComplete:false}]);
    setTodo("");
     }
   const handleCheck=  (e) => {
    let id=e.target.name;
    let index=todos.findIndex((item) => {
      return item.id===id;
    } )
   let newtodos=[...todos];
   newtodos[index].isComplete= !newtodos[index].isComplete;
   setTodos(newtodos)
   }
   
    const handleEdit = (e,id)=>{
       let index=todos.findIndex((item) => {
      return item.id===id;
    } )
    setTodo(todos[index].todo)
     let newtodos=todos.filter(i=>{
     return i.id!==id
    })
    setTodos(newtodos);
     
   }
    const handleDelete= (e,id) => {
    let newtodos=todos.filter(i=>{
      return i.id!==id
    })
    setTodos(newtodos);
    
   }
  return (
    <>
   <Navbar/>
   <div className='flex justify-center'>
     <div className='bg-pink-200  w-[50vw] h-[90vh] ml-20 mt-2 border rounded-xl text-gray-600'>
         <h1 className='m-5 ml-10 font-semibold text-xl align-middle text-center'>ActivityManager-Manage your Activity</h1>
         <div className='m-5'>
            <p className='font-semibold text-xl pl-6'>Add a Activity</p>
           <div className='flex gap-5 ml-8 mt-2'>
            <input type="text" value={todo} onChange={handleChange} className='w-full h-9 border rounded-xl outline-none p-3 cursor-pointer hover:border-pink-600'/>
            <button className='bg-pink-600 text-white w-20 border rounded-md hover:bg-pink-200 hover:text-gray-600' onClick={handleAdd}>Add</button>
           </div>
            <h1 className='font-semibold m-3 text-xl mt-5'>Your Activity</h1>
           <hr className='border-gray-600 mt-3'/>
            
         </div>
          { todos.map( item=>{
           return(<div className='flex gap-3 ml-10 relative' key={item.id} >
            <input type="checkbox" name={item.id} className='accent-pink-600' onChange={handleCheck} checked={item.isComplete}/>
           <div className='activity flex m-2 justify-between w-full'>
            <div className={item.isComplete ? "line-through":""}>{item.todo}</div>
            <div className='mr-2'>
               <button className='bg-pink-600 text-white w-20 border rounded-md hover:bg-pink-200 hover:text-gray-600 mr-5' onClick={(e)=>handleEdit(e,item.id)}>Edit</button>
             <button className='bg-pink-600 text-white w-20 border rounded-md hover:bg-pink-200 hover:text-gray-600' onClick={(e)=>handleDelete(e,item.id)}>Delete</button>
            </div>
             </div>
             </div>)
         })}
            
        
    </div>
   </div>
    </>
  )
}

export default App
