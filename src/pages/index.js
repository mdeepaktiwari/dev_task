import { useState, useEffect } from 'react';
import axios from 'axios';
import { UserTable } from "../../component/userTable";
import { toast } from 'react-toastify';
import { UserOutlined } from '@ant-design/icons/lib/icons';

export default function Home() {
  const [allUser, setAllUsers] = useState([]);

  useEffect(() => {
    let list = JSON.parse(window.localStorage.getItem("allUsers"));
    if(!list) getData();
    else setAllUsers(list);
  }, []);
  
  // if no data is available then make an axios call
  async function getData(){
    try{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    setAllUsers(data);
    window.localStorage.setItem("allUsers", JSON.stringify(data));
    }catch(e){
      toast.error("Error in fetching the data");
      console.log(e);
    }
  };

  return (
      <main style={{zIndex:"3"}}>
        <div className="container py-5">
          <div className="row ">
              <div className="col-md-10 offset-md-1 box-shadow-blur ">
                <h3 className="text-dark py-2 pt-4 d-flex align-items-center justify-content-center">
                  <span>All Users</span> <UserOutlined className='d-flex mx-1 fs-4'/>
                </h3>
                  <UserTable allUser={allUser}/>
              </div>
          </div>
        </div>
      </main>
  )
}


