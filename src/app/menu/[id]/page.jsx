import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import getSingleBurger from "../../../utils/getSingleBurger";
import AddToCartBtn from "./AddToCartBtn";

export const revalidate = 0;

const BurgerDetails = async ({ params: { id } }) => {
  const burger = await getSingleBurger(id);
  const { imageUrl, title, price, ratings, ingredients, details } =
  burger;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 m-2">
      <figure>
        <Image
          src={imageUrl}
          alt={title}
          width={450}
          height={450}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEGBf/EABoQAQEBAQEBAQAAAAAAAAAAAAACAQMREjH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAABm/wAS9FN/iXpoE0y7Ws+g+sAAAAAObrrFUDvruaV9NZQpgczfXRAAAADm75gF9NS9NP6al6aBda56zWueg+0AAAABmt8wmqb6UnqhWvp3KI+msoFU0Zm+ppo2aA0OZo9EdLumtom6AvpSa6M6UmuhGapn6YqnPpR6IAIocrfMdL6aBPSk9030pPdIrv07lEbTuUKrmjZpJNHTQKsp36IymvpUaqirp3aJuhGOlJrozpSbpSozVM/TFUz9CPWABGnNI6afX4m6aCfpqa9O6amvUVnddzS912dFUTp06mnTp0D81r0vNd9VHd0m9brSr0Qnpqbpp3TU3TVQutZ+nK1n1UezADLTN/iXoptN0BL0TWp6JrRS9dweOzgpknSVOHTgN46Mx1UYomzqJsRP0S9NU9EvRUIrWfXaZB7cAIrFpuiq03QEvTE9YpvCKwUrxqcHjc4DU4bOMzhs4DuY741mDcAqsIvFNYR0wRJ0SdFnVJ0BNTDdsg9uAAZr8T9FNfifoCa8IrFFk1gF+Nzjnjc4Dc4bOMThs4DuYNxvMc3AKrCOmKKwjoCPriTqt6o+qKlthu2Qe2ACo5v4RZ+/hFgnsmjrJoHGpZbkDJOkqTZBvHNdwaBdJ+iik/RFSdUfVb1R9QS2w3bKK//Z"
          className="max-h-[450px] mx-auto object-cover rounded-md"
          sizes="33vw"
        />
      </figure>
      <div className="col-span-2 ms-10 lg:ms-2">
        <h2 className="card-title text-3xl">{title}</h2>
        <h3 className="text-xl"><span className="font-semibold">Price: </span>${price}</h3>
        <h3 className="text-xl mt-2">Ingredients</h3>
        <ul>
          {ingredients?.map((ingredient, i) => (
            <ul key={i}>
              {i + 1}. {ingredient}
            </ul>
          ))}
        </ul>
        <h3 className="text-xl mt-2">Details</h3>
        <p>{details}</p>
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-1 mt-3">
          {[...Array(Math.round(ratings)).keys()]?.map((i) => (
            <AiOutlineStar key={i} className="text-2xl text-orange-500" />
          ))}
        </div>
        <AddToCartBtn />
        </div>
      </div>
    </div>
  );
};

export default BurgerDetails;