
import './App.css';
import PVV_Classcomp from './component/PVV_Classcomp';
import PVV_FuncDemo from './component/PVV_FuncDemo';

function App() {
  //khai bao bien doi tuong
  const users ={
    username:"k22cntt3",
    password:"123456",
    fistname:"phan viet ",
    lastname:"vuong"
  }
  //khai bao doi tuong ham
  function formatname(user){
    return <h2>xin chao, {users.fistname} {users.lastname} </h2>;
  }
  return (
    <div className="App">
      {/*bieu thuc jsx */}
      <div>
        <p>fullname:{users.fistname} {users.lastname}</p>
        {formatname(users)}
      </div>
      {/* su dung functiono component*/}
      <div>
        <PVV_FuncDemo/>
        {/*su dung Fun_Comp co props*/}
        <PVV_FuncDemo username="PVV" fullname="phan viet vuong" age="20"/>
      </div>
      {/*su dung class component */}
      <div>
        {/* dung ko su dung props */}
        <PVV_Classcomp/>
      </div>
    </div>
  );
}

export default App;
