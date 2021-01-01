import React,{Component} from 'react';
import firebase from './config/firebase.js';
import './App.css';

class Header extends Component{
  render(){
    return(
    <div>
    <h1>Welcome in Todo List Application</h1>
    </div>
    )
  }
}

class App extends Component{
  constructor(){
    super()
    this.state={
      todos:[{title:"muntaha",edit:false},{title:"maha",edit:false}],
      value: ''
    }
  }

add_todo=()=>{
let obj={title:this.state.value}
this.setState({
  todos:[...this.state.todos,obj],
  value:""
})
  }

delete_todo=(index)=>{
this.state.todos.splice(index,1)
this.setState({
  todos:this.state.todos
})
}

delete_all=()=>{
  let obj={title:this.state.value}
  this.setState({
    todos:[],
    value:""
  })
}

edit_todo=(index,val)=>{
  this.state.todos[index].edit=true;
  this.setState({
    todos:this.state.todos
  })}


handleChange=(e,index)=>{
this.state.todos[index].title=e.target.value;
this.setState({
  todos: this.state.todos
})
}
Update=(index)=>{
  this.state.todos[index].edit=false;
  this.setState({
    todos:this.state.todos
  })
}

render(){
  let {todos,value}=this.state;
  return(
  <div>
   <input value={value} onChange={(e)=> this.setState({value:e.target.value})} type="text" placeholder="enter value"/>
   <button onClick={this.add_todo}>Add item</button>
   <button onClick={this.delete_all}>Delete All</button>
   <ul>
     {todos.map((v,i)=>{
         return <li key={i}>
          {v.edit ? <input value={v.title} type="text" onChange={((e)=>this.handleChange(e,i))}/> : v.title}
         {v.edit ?
         <button onClick={()=>this.Update(i)}>Update</button>
        :
         <button onClick={()=>this.edit_todo(i,v.title)}>Edit</button>
         }
         <button onClick={()=>this.delete_todo(i)}>Delete</button>
         </li>
       })
     }
   </ul>
  </div>
  )
}
}

export {
Header,
App
} ;