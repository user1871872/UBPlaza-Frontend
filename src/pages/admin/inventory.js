import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const AddUrl = 'http://localhost:4000/addProduct'
const GetUrl = 'http://localhost:4000/getProduct'
// const update = 'http://localhost:4000/updateProduct'
// const deleteProduct = 'http://localhost:4000/updateProduct'

function Inventory() {

  const [productList, getProductList] = useState([]);
  // const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [imagePreview, setImagepreview] = useState(null)
  const [image, setImage] = useState("")


  const validateImg = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setImagepreview(URL.createObjectURL(file))
  }
  const uploadImg = async () => {

    const data = new FormData()
    data.append('file', image)
    data.append("upload_preset", "upload");

    let res = await fetch("https://api.cloudinary.com/v1_1/dzdlxfeee/image/upload/",
      {
        method: 'POST',
        body: data
      })

    const urlData = await res.json()

    //  console.log(file.url)

    return urlData.url

  }

  useEffect(() => {

    axios.get(GetUrl).then((response) => {
      getProductList(response.data);
    })
  }, []);

  const addProduct = async (event) => {
    event.preventDefault();
    let url = ""
    if (image) {
      url = await uploadImg(image)
    } else {
      url = null
    }
    await axios.post(AddUrl, {
      image: url,
      title,
      price,
      stock,
    },).then((res) => {
      getProductList([...productList, res.data])
    });

  }
  const deleteProduct = (product) => {
    console.log(product)
    if (window.confirm(`are you sure about that ${product.title}`)) {
      axios.post(`http://localhost:4000/deleteProduct`, { productid: product._id }).then((response) => {
        console.log(response.data);
      })


    } else {

    }
  }
  return (

    <div className="App">

      <form>
        <div>
          <input type="text" placeholder="enter title" onChange={(event) => { setTitle(event.target.value) }} />
          <input type="file" onChange={validateImg} />
          <label htmlFor='img' className='fileUpload'>
            <img src={imagePreview || ""} alt="" width='100px' height='100px' />
          </label>
          <input type="number" placeholder="price" onChange={(event) => { setPrice(event.target.value) }} />
          <input type="number" placeholder="enter stock" onChange={(event) => { setStock(event.target.value) }} />

          <button id='btn' onClick={addProduct}>Upload</button>
        </div>
      </form>
      <Link to='reserve'><button className="bg-slate-300 rounded-md p-5">View Reservation</button></Link>
      <div className='display'>
        {productList.map((product) => {
          return (
            <div class="container">
              <table className="center">
                <tr>
                  {/* <td>{product.image}</td> */}
                  <td><img src={product.image} style={{width:"100%", height:"20ch", objectFit:"contain", objectPosition:"center"}} alt="" /> </td>
                  <td>title:{product.title}</td>
                  <td>price:{product.price}</td>
                  <td>stock:{product.stock}</td>
                  <Link to={`${product._id}`} className="btn">UPDATE</Link>
                  <button id='btn' onClick={() => deleteProduct(product)}>delete</button>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Inventory;