import { Table, Card, Button } from "react-bootstrap";
import { useState } from "react";
import Header from "./Header";

function SearchProduct() {
    const [data,setData]= useState([]);

    async function search(key) {
        console.warn(key);
        let result = await fetch("http://localhost:8000/api/search/"+key);
        result = await result.json();
        setData(result);
    }
  return (
    <>
      <Header />
      <div className="serbar">
        <h1>Search Product</h1>
        <input onChange={(e)=>search(e.target.value)} type="text" className="form-control" placeholder="search"/>
      </div>
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
    </>
  );
}
export default SearchProduct;
