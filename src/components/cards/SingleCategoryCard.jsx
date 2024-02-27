import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

const SingleCategoryCard = ({ category }) => {
  const { _id, imageUrl, name } = category;

  return (
    <div className="card card-compact bg-base-100 shadow-2xl h-full justify-between">
      <figure>
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="max-h-[150px] sm:max-h-[250px] xl:max-h-[300px] object-cover w-auto"
        />
      </figure>
      <div className="card-body flex-grow-0">
        <div className="flex justify-between items-center">
          <h2 className="text-sm md:text-base font-bold">{name}</h2>
          <Link title="View All from this Category" href={`/products?categoryId=${_id}`}>
            <FaEye className="text-lg"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryCard;
