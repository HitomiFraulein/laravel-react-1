import { Button } from "react-bootstrap";
import Header from "./Header";
import { useState } from "react";

function Add() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addProduct() {
    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("description", description);

    try {
      let result = await fetch("http://localhost:8000/api/add", {
        method: "POST",
        body: formData,
      });

      if (result.ok) {
        alert("Upload Data Berhasil");
      } else {
        alert("Gagal Upload Data");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Gagal Upload Data");
    }
  }

  return (
    <>
      <Header />
      <div>
        <h1>Add Page</h1>
        <div className="col-sm-6 offset-sm-3 mt-4">
          <form  encType="multipart/form-data"> {/* Tambahkan elemen form di sini */}
            <input
              type="text"
              className="form-control m-1"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="file"
              className="form-control m-1"
              placeholder="File"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              className="form-control m-1"
              placeholder="Rp."
              onChange={(e) => setPrice(e.target.value)}
            />
            <textarea
              type="text"
              className="form-control m-1"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button className="mt-4" onClick={addProduct}>
              Add Product
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
