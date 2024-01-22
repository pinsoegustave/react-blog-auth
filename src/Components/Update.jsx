import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export const Update = () => {

    const {id} = useParams();

  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://blogapi-se2j.onrender.com/api/v1/blogs/"+ id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://blogapi-se2j.onrender.com/api/v1/blogs/"+ id, inputData)
      .then((res) => {
        alert("Data updated successfully!!");
        navigate("/dashboard");
      });
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          Add title: <br />{" "}
          <input
            type="text"
            name="title"
            className="form-control"
            // {...register("title")}
            onChange={(event) =>
              setInputData({ ...inputData, title: e.target.value })
            }
            value={inputData.title}
          />
          <br />
          Description: <br />{" "}
          <input
            type="text"
            name="description"
            className="form-control"
            // {...register("description")}
            value={inputData.description}
            onChange={(e) =>
              setInputData({ ...inputData, description: e.target.value })
            }
          />
          <br />
          Upload a picture: <br />{" "}
          <input
            type="file"
            name="image"
            className="form-control"
            value={inputData.image[0]}
            // {...register("image")}
            onChange={(e) =>
              setInputData({ ...inputData, image: e.target.files })
            }
          />
          <br />
          <br />
          <button className="btn btn-info" type="submit">
            Update
          </button>
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};
