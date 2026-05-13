import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";

const App = () => {
  const [formData , setFormData] = useState({})
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(list);
  };

  const addBooks = async () => {
    try {
      const docRef = await addDoc(collection(db, "BookApp"), { formData });
      console.log(docRef.id);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks();
    setList({});
  };

  const getAllBooks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "BookApp"));
      let newList = []
      querySnapshot.forEach((doc) => {
        let val=doc.data();
        newList.push({id:doc.id,...val.formData});
      });
      setList(newList)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async(id) => {
    try {
      await deleteDoc(doc(db,"BookApp" , id));

      setList(list.filter((item)=>item.id !== id))
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2>Add Book</h2>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                className="form-control"
                onChange={handleChange}
                value={formData.title || ""}
                type="text"
                name="title"
                id=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Price
              </label>
              <input
                className="form-control"
                onChange={handleChange}
                value={formData.price || ""}
                type="number"
                name="price"
                id=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Author
              </label>
              <input
                className="form-control"
                onChange={handleChange}
                value={formData.author || ""}
                type="text"
                name="author"
                id=""
              />
            </div>

            <button className="btn btn-primary">Add Book</button>
          </form>
        </div>
      </div>
      <div className="row">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Book Title</th>
              <th>Book Price</th>
              <th>Book Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((data, idx) => {
              return (
                <tr key={data.id}>
                  <td>{idx + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.price}</td>
                  <td>{data.author}</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>deleteBook(data.id)}>Delete</button>
                    <button className="btn btn-info">Update</button>
                  </td>
                </tr>
              )
              
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
