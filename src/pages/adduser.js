import { useEffect, useState } from "react";
// validation function
import { validation } from "../../functions/validation";
// for notification
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { UserAddOutlined } from "@ant-design/icons/lib/icons";

function Adduser() {
  // state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  // action after form submission
  function handleForm(e) {
    e.preventDefault();
    // validation check
    const result = validation(name, phone, email);
    // if entries are correct save the data in localstorage
    if (result === true) {
      const list = JSON.parse(window.localStorage.getItem("allUsers"));
      const newUser = {
        id:list.length+1,
        name,
        phone,
        email,
      };
      list.push(newUser);
      window.localStorage.setItem("allUsers", JSON.stringify(list));
      toast.success("New User added successfully");
      router.push('/');
      // else show error
    } else {
      toast.error(result);
    }
    // make field empty once user has submitted
    setName("");
    setEmail("");
    setPhone("");
  }
  return (
    
    <div className="container py-5">
      <div className="row ">
        <div className="col-md-6 offset-md-3 box-shadow-blur ">
          <h3 className="text-dark py-2 pt-4 d-flex align-items-center justify-content-center">
            <span>User Details</span> <UserAddOutlined className='d-flex mx-1 fs-4'/>
          </h3>
          <form className="form-group px-3 py-1" onSubmit={handleForm}>
            <div className="my-4">
              <input
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Name"
                required
                value={name}
              />
            </div>
            <div className="my-4">
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="Phone"
                required
                value={phone}
              />
            </div>
            <div className="my-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email"
                required
                value={email}
              />
            </div>
            <div className="my-4">
              <button
                disabled={!name || !email || !phone}
                className="my-2 btn btn-secondary w-100"
              >
                Save Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Adduser;
