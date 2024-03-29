import Head from "next/head";
import {useState} from "react";
import {UserTable} from "../../component/userTable";
import {toast} from "react-toastify";
import {SearchOutlined} from "@ant-design/icons/lib/icons";

export default function SearchUser() {
  const [query, setQuery] = useState("");
  // state for searched items
  const [searchUsersList, setSearchUserList] = useState([]);

  function handeQuery(query) {
    setQuery(query);
    if (!query) {
      setSearchUserList([]);
      return;
    }
    let list = JSON.parse(window.localStorage.getItem("allUsers"));
    if (!list) {
      toast.error("No item found");
      return;
    }
    let searchedItems = list.filter(
      e => e.name.slice(0, query.length).toLowerCase() == query.toLowerCase()
    );
    setSearchUserList(searchedItems);
  }

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{zIndex: "3"}}>
        <div className="container py-5">
          <div className="row ">
            <div className="col-md-10 offset-md-1 box-shadow-blur ">
              <h3 className="text-dark py-2 pt-4 d-flex align-items-center font-weight-dark justify-content-center">
                <span>Search</span>{" "}
                <SearchOutlined className="d-flex mx-1 fs-4" />
              </h3>
              <div className="my-2 mt-4">
                <input
                  onChange={e => handeQuery(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Type name here..."
                  required
                  value={query}
                />
              </div>
              <div>
                {searchUsersList.length == 0 ? (
                  <div className="text-center font-weight-bold py-4 fs-5">
                    No User available!
                  </div>
                ) : (
                  <UserTable allUser={searchUsersList} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
