"use client";


import Image from "next/image";
// import Link from 'next/link'; // Changed to <a> tag to resolve compilation issue
import { CardBody, CardContainer, CardItem } from "./3d-card"; // Assuming ./3d-card is the correct path
import { Produto } from '../../../interfaces/product.interface'; // Assuming path from original component
import AddToCartButton from '../../addToCartButton'; // Assuming path from original component

interface ProdutoCardProps {
  produto: Produto;
}


const getProductImage = (productName: string): string => {
  const name = productName.toLowerCase();

  if (name.includes("playstation 4") || name.includes("ps4")) {
    return "/ps4pro.jpg";
  } else if (name.includes("playstation 5") || name.includes("ps5")) {
    return "/ps5.jpg";
  } else if (name.includes("xbox") || name.includes("series x")) {
    return "/xsx.jpg";
  } else if (name.includes("vr") || name.includes("headset")) {
    return "/vr.jpg";
  } else if (name.includes("laptop")) {
    return "/laptop.jpg";
  } else if (name.includes("smartphone") || name.includes("phone")) {
    return "/smartphone.jpg";
  }

  // Default fallback image
  return "/laptop.jpg";
};

/**
 * A 3D Card component to display a product.
 * Merges the functionality of ProdutoCard with the 3D effect of ThreeDCardDemo.
 */
export function ProdutoCard3D({ produto }: ProdutoCardProps) {
  const imagePath = getProductImage(produto.nome);

  return (
    <CardContainer className="inter-var">
      {/* We merge the styles here.
        - Using the dark bg/border from your original ProdutoCard for the dark theme.
        - Using the light bg/border from the 3D card demo for the light theme.
        - I've changed the dark:hover:shadow to amber to match your price color.
      */}
      <CardBody className="bg-[#2f2f2f] relative group/card dark:hover:shadow-2xl dark:hover:shadow-amber-500/[0.1] dark:bg-[#31394c] dark:border-gray-700 border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-5 md:p-6 border">

        {/* Product Image at the top */}
        <CardItem
          translateZ="40"
          className="w-full mb-3 sm:mb-4"
        >
          <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden">
            <Image
              src={imagePath}
              alt={produto.nome}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </CardItem>

        {/* Product Name as a link */}
        <CardItem
          translateZ="50"
          as={"a"} // Use the 'as' prop to render a standard <a> tag
          href={`/products/${produto.id}`}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-white dark:text-white truncate block"
        >
          {produto.nome}
        </CardItem>

        {/* Product Price */}
        <CardItem
          as="p"
          translateZ="60"
          // Use the styling from your original card
          className="text-base sm:text-lg md:text-xl text-white font-medium mt-2"
        >
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(produto.valor)}
        </CardItem>

        {/* Add to Cart Button */}
        {/* We place the button at the end, similar to the "Sign up" button */}
        <div className="flex justify-end items-center mt-4 sm:mt-6">
          <CardItem
            translateZ={20}
            as="div" // Render as a div container to apply the 3D effect
            className="w-auto"
          >
            <AddToCartButton product={produto} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
