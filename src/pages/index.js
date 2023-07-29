import {useEffect} from "react";
import {UserTable} from "../../component/userTable";
import {UserOutlined} from "@ant-design/icons/lib/icons";
import {useMutation, useQuery} from "react-query";
import {getUserInformation} from "@/services/user";
import {useState} from "react";

export default function Home() {
  const [allUser, setAllUser] = useState([]);

  const mutateUserInfo = useMutation({
    mutationKey: ["user_info"],
    mutationFn: getUserInformation,
    onSuccess: data => {
      console.log(data);
      setAllUser(data?.data);
      window.localStorage.setItem("allUsers", JSON.stringify(data?.data));
    },
    onError: e => {
      console.log(e);
    },
  });
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("allUsers"));
    console.log(user);
    if (user) {
      setAllUser(user);
    } else {
      mutateUserInfo.mutate();
    }
  }, []);

  return (
    <main style={{zIndex: "3"}}>
      <div className="container py-5">
        <div className="row ">
          <div className="col-md-10 offset-md-1 box-shadow-blur ">
            <h3 className="text-dark py-2 pt-4 d-flex align-items-center justify-content-center">
              <span className="font-weight-dark">All Users</span>{" "}
              <UserOutlined className="d-flex mx-1 fs-4 font-weight-dark" />
            </h3>
            <UserTable allUser={allUser} />
          </div>
        </div>
      </div>
    </main>
  );
}
