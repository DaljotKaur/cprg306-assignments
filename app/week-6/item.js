const Item = ({ name, quantity, category }) => {
  return (
    <li className="m-4 p-2 list-none bg-gray-400 border text-gray-900 w-1/4 rounded-xl">
      <h3 className="text-2xl font-bold capitalize">{name}</h3>
      <p className="mt-[0.5rem]">{`Buy ${quantity} in ${category} aisle`}</p>
    </li>
  );
};

export default Item;