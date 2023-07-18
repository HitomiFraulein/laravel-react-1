import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table, Card, Button } from "react-bootstrap";

function ProductList() {
  const [data, setData] = useState([]);
  console.warn(data);
  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    getData();
  }

  async function getData(){
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result)
  }
  return (
    <div>
      <Header />
      <h1>INI HANYA CONTOH</h1>
      <div className="KartuP">
        {data.map((item) => (
          <Card style={{ width: 300 }} className="kartuu shadow">
            <div className="konten">
              <h1>{item.name}</h1>
              <img
                className="gmbr"
                src={"http://localhost:8000/" + item.file_path}
              />
              <div className="deskripsi">
                <p>{item.description}</p>
              </div>
              <h3 className="harga">Rp. {item.price}</h3>
              <div className="actioon">
                <Button>Buy Now</Button>
                <Button
                  variant="danger"
                  onClick={() => deleteOperation(item.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductList;