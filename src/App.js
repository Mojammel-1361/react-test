import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <LoadPosts></LoadPosts>
      <District name="Gazipur" spa= "forest"></District>
      <District name="BBR fiter"></District>
      <District name="Royel gazipur"></District>
     
      
    </div>
  );
}
function LoadPosts(){
  const [posts, setPosts] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <div >
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props){
  return(
    <div className='post'>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}
const districtStyle = {
  backgroundColor: 'red',
  borderRadius: '20px',
  padding: '10px',
  margin: '20px'
  
}
function District(props){

  const [power, setPower] = useState(0);
  const boostPower =() =>{
    const newPower = power + 1;
    setPower(newPower);
  }
  return(
    <div className='district' style={districtStyle}>
      <h2>Name:{props.name} </h2>
      <h4>power: {power}</h4>
      <button onClick={boostPower}>boost the power</button>
    </div>
  );
}


export default App;
