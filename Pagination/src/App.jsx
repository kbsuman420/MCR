import { useEffect, useState } from "react"

export default function App() {
  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState(0);

  const PAGE_SIZE = 10;

  const fetchData = async () => {
    const data = await fetch(`https://dummyjson.com/products?limit=500&skip=0`);
    const json = await data.json();
    return json;
  }
  
  useEffect(() => {
    fetchData().then((data) => setProducts(data.products));
    
  }, []);

  const handleDecrement = () => {
    setActivePage((prev) => prev - 1);
  }
  const handleIncrement = () => {
    setActivePage((prev) => prev + 1)
  }

  const noofpages = Math.ceil(products.length / PAGE_SIZE);
  const start = activePage * PAGE_SIZE;
  const end = start + 10;
  const array = Array.from({length: noofpages}, (_, i) => i);
  console.log(array)
  console.log(activePage)
  
  return (products.length === 0) ? <h1>Product Not Found</h1> : (
    <div className="main-container">
    <h1>Pagination of products</h1>
    <div className="pagination">
    <button className="decrement" disabled={activePage === 0} onClick={handleDecrement}>⬅️</button>
      {array.map((i) => (
        <button className={"page " + ((activePage == i) ? "active" : "")} key={i} onClick={() => setActivePage(i)}>{i}</button>
      ))}
      <button className="increment"  onClick={handleIncrement} disabled={activePage === noofpages - 1}>➡️</button>
    </div>
      <div className="products-container">
        {products.slice(start, end).map((product) => (
          <div key={product.id} className="products">
            <img src={product.thumbnail} alt={product.title} height="140px" width="200px"/>
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}