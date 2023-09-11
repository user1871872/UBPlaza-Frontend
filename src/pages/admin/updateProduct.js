// import axios from 'axios';
// import React, { useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// function Updateproduct () {
//     const {id} = useParams();
//     const [data, setData] = useState([]);

//     useEffect(() =>{
//         axios.get('http://localhost:4000/getProduct/'+id)
//         .then(res => setData(res.data))
//         .catch(err => console.log(err))
//     },[])

//     function handleSubmit(event){
//         event.preventDefault()
//         axios.put('http://localhost:4000/getProduct/'+id, data)
//         .then(res => {
//             alert("updated sucessfully!");
//         })
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//         <div>
          
//           <input type="text" placeholder="enter title" name='title' value={data.title} 
//           onChange={e => setData({...data, title: e.target.value})}/>
//           {/* <input type="file" onChange={validateImg} /> */}
//           {/* <label htmlFor='img' className='fileUpload'>
//             <img src={imagePreview || ""} alt="" width='100px' height='100px' />
//           </label> */}
        
//           <input type="number" placeholder="price" name='price'  value={data.price}
//           onChange={e => setData({...data, price: e.target.value})}/>
        
//           <input type="number" placeholder="enter stock" name='stock' value={data.stock} 
//           onChange={e => setData({...data, stock: e.target.value})}/>
  
//           <button id='btn'>Update</button>
//         </div>
//       </form>
//     )

// }

// export default Updateproduct