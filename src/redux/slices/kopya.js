const getTotalItemCount = () => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

const handleAdd = (id, name) => {
  dispatch(addItem({ id, name }));
};

const handleRemove = (id) => {
  dispatch(removeItem({ id }));
};