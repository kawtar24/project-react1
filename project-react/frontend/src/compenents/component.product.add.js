import { useState } from "react";
import { addProduct } from "../services/product.services";
import {useNavigate} from "react-router-dom";
export function ProductAddForm(){
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const navigate =useNavigate()
    function handlForm(event){
        //pour ne pas actualiser la page quand j'envoie le formulaire 
        event.preventDefault();
        const p={"name":name, "price":price}
        addProduct(p);
        navigate("/products");
      }

      return (<>  
        
      <style>
        {`
          .card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
            padding: 20px;
           
            margin: auto;
          }
        `}
      </style>
    
        <form class="design" onSubmit={(e)=>handlForm(e)}>
        <div class="card">
          <label htmlFor= "name"> Name :</label>
          <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
          <br/>
  
          <label htmlFor= "price"> Price :</label>
          <input type="number" id="price" onChange={(e)=>setPrice(e.target.value)}/>
          <br/>
  
          <input type='submit' value={"Enregister"}/>
          <input type='reset' value={"Annuler"}/>
        </div>
        </form>
       
      </>
        
      )
}
