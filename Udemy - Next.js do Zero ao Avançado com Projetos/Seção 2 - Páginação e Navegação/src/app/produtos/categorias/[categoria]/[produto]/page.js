const ProductPage = async ({ params }) => {
    const {  produto } = await params; 
  
    return (
      <div>
        <h2>Produto: {produto}</h2>
      </div>
    );
  };
  
  export default ProductPage;
  