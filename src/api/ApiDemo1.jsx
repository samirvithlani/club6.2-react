import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyLoader } from "../components/MyLoader";
import { Button, Modal } from "react-bootstrap";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [show, setshow] = useState(false);
  const [singleUser, setsingleUser] = useState({});
  const handleClose = () => {
    setshow(false);
  };

  const deleteUser = async (id) => {
    //alert("delete user"+id)
    setisLoading(true);
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    console.log("delete res", res);
    setisLoading(false);
    if (res.status === 204) {
      //alert("User deleted successfully")
      toast.success("user deleted!");
      getApiCall(); //refresh the data
    }
  };
  const getApiCall = async () => {
    setisLoading(true);
    //api calling...
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log("axios res", res);
    console.log("api response..", res.data);
    console.log("message", res.data.message);
    console.log("data..", res.data.data);
    setmessage(res.data.message);
    setusers(res.data.data);
    setisLoading(false);
  };

  const detailUser = async (id) => {
    //alert("detail user"+id)
    //getUserById
    const res = await axios.get("https://node5.onrender.com/user/user/" + id);
    console.log("detail res", res.data);
    setsingleUser(res.data.data);
    setshow(true);
  };
  useEffect(() => {
    
    getApiCall();
  
    
  }, [])

  const searchHandler = async (e) => {

    console.log("searchHandler", e.target.value);
    const res = await axios.get("https://node5.onrender.com/user/filter2",{
      params:{
        name:e.target.value
      }
    })
    console.log("search res", res.data.data);
    setusers(res.data.data);

  }
  
  return (
    <div>
      <input type="text" placeholder="search" onChange={(event)=>{searchHandler(event)}}/>
      {/* {
            isLoading && <p>LOADING......</p>
        } */}
      {isLoading && <MyLoader />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <h1>API DEMO 1</h1>
      {/* <button
        onClick={() => {
          getApiCall();
        }}
      >
        GET
      </button> */}
      {message}
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => {
                      detailUser(user?._id);
                    }}
                    className="btn btn-info"
                    style={{ marginLeft: "5px" }}
                  >
                    DETAIL
                  </button>
                  <Link
                    to={`/updateuser/${user?._id}`}
                    className="btn btn-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    UPDATE
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>USER DERAIL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{singleUser.name}</p>
          <p>{singleUser.age}</p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
