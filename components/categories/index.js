import Link from "next/link";

function Categories({ categories }) {
  return (
    <div className="flex h-[72px] gap-6 px-12">
      {categories.map((category) => (
        <Link
          key={category.id}
          className="flex items-center justify-center bg-[#000000bf] border-[1px] border-[#333] shadow-[0_5px_10px_0px_rgba(0,0,0,0.5)] w-full h-full rounded-md font-bold "
          href={`/${category.id}`}
        >
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}
export default Categories;
