import React, { useState } from 'react';
import ProductItem from './Card';

const initialData = [
  { id: 1, name: 'Велосипед', price: 1000, count: 1 },
  { id: 2, name: 'Самокат', price: 700, count: 1 },
  { id: 3, name: 'Ролики', price: 1300, count: 2 },
  { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
];

function App() {
  const [data, setData] = useState(initialData);

  const addProduct = () => {
    const modal = prompt('Введите название товара и цену для него, например: "Сетевая карта 3000"');
    if (!modal) return;
    const [name, priceText] = modal.split(' ');
    const price = Number(priceText);
    if (!name || isNaN(price)) {
      alert('Неверный формат');
      return;
    }
    setData([
      ...data,
      { id: Date.now(), name, price, count: 1 }
    ]);
  };

  const changeCount = (id, delta) => {
    setData(data =>
      data
        .map(item =>
          item.id === id
            ? {
                ...item,
                count:
                  delta > 0
                    ? Math.min(item.count + delta, 25)
                    : Math.max(item.count + delta, 0)
              }
            : item
        )
        .filter(item => item.count > 0)
    );
  };

  const deleteProduct = id => {
    setData(data => data.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={addProduct}>Добавить новый товар</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginTop: 32 }}>
        {data.map((product) => (
          <ProductItem
            key={product.id}
            {...product}
            onIncrement={() => changeCount(product.id, 1)}
            onDecrement={() => changeCount(product.id, -1)}
            onDelete={() => deleteProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

