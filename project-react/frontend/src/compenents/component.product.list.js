import { useEffect, useState } from "react";

import { deleteProductByID, getAllProducts } from "../services/product.services";
import {Link} from "react-router-dom";
export function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])

  async function fetchProducts() {
    const res = await getAllProducts()
    setProducts(res.data);
  }

  async function deleteProduct(id) {
    const res = await deleteProductByID(id)
    fetchProducts();
  }

  return (<>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <button className="btn btn-primary">
        <Link to="/products/new" style={{ textDecoration: 'none', color: '#FFF' }}>
          Nouveau produit
        </Link>
      </button>
    </div>

    <div class="table-wrapper">
      <table class="fl-table">
        <tr>
          <th class="text-center">Id</th>
          <th class="text-center">Name</th>
          <th class="text-center">Price</th>
          <th class="text-center">Delete</th>

        </tr>
        <tbody id="tbody">
          {products.map((elem, index) => (
            <tr key={index}>
              <td className="text-center">{elem._id}</td>
              <td className="text-center">{elem.name}</td>
              <td className="text-center">{elem.price}</td>
              <td className="text-center">
                {/* Bouton de suppression avec une icône de FontAwesome */}
                <button className="btn btn-supprimer" onClick={() => deleteProduct(elem._id)}>
                  <i className="fas fa-trash icon-rouge"></i> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

  </>);

}