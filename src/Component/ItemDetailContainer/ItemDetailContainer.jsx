import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dataContext } from '../Context/DataContext';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { arrayProductos } = useContext(dataContext);

  useEffect(() => {
    const selectedItem = arrayProductos.find((product) => product.id === parseInt(id, 10));

    const loadData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(selectedItem);
        }, 1000);
      });
    };

    setLoading(true);

    loadData().then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [id, arrayProductos]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <ItemDetail item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
