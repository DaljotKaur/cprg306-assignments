import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="bg-gray-900 py-4">
      <h1 className="text-4xl font-bold text-gray-200 p-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;