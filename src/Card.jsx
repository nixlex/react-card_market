function ProductItem({ id, name, price, count, onIncrement, onDecrement, onDelete }) {
  const handleDoubleClick = () => {
    onDelete();
  };

  return (
    <div className="border border-[#10c0a3ff] rounded-lg w-60 p-6 m-2 text-center text-lg">
      <div style={{ fontWeight: 'bold', fontSize: 22 }}>{name}</div>
      <div style={{ margin: '8px 0' }}>Price: {price}</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, marginTop: 16 }}>
        <button onClick={onDecrement} disabled={count === 0}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement} disabled={count === 25}>+</button>
      </div>
      
    </div>
  );
}

export default ProductItem;
