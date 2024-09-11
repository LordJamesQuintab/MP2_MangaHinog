import React from "react";
import useFetch from "../hooks/useFetch";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/Carousel";
import { FeatureCard } from "./Card";

export function Recomend() {
  const { data, loading, error } = useFetch(
    `/manga?limit=6&order[updatedAt]=desc&includes[]=cover_art`
  );

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error: {error}</p>;

  if (!data || !data.data || data.data.length < 6) {
    return <p className="text-white">No recommendations available</p>;
  }

  const getCoverImageUrl = (manga) => {
    const cover = manga.relationships.find((rel) => rel.type === "cover_art");
    return cover
      ? `https://uploads.mangadex.org/covers/${manga.id}/${cover.attributes.fileName}.256.jpg`
      : "https://via.placeholder.com/256x400?text=No+Cover";
  };

  return (
    <div className="mx-auto mb-4 w-full px-4">
      <Carousel className="relative w-full h-auto rounded-lg overflow-hidden">
        <CarouselContent className="flex">
          {data.data.slice(0, 6).map((manga, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full h-96 flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div
                  className="absolute inset-0 blur-sm bg-cover bg-center rounded-lg"
                  style={{ 
                    backgroundImage: `url(${getCoverImageUrl(manga)})`,
                    borderRadius: '0.5rem' // Rounded corners for the background image
                  }}
                ></div>
                <div className="relative z-10 w-full h-full p-4 flex items-center justify-center">
                  <FeatureCard
                    imageUrl={getCoverImageUrl(manga)}
                    title={<span className="text-white text-xl font-semibold">{manga.attributes.title.en || "No Title"}</span>}
                    ranking={<span className="text-white text-sm">{manga.attributes.rating || "N/A"}</span>}
                    status={<span className="text-white text-sm">{manga.attributes.status || "Unknown"}</span>}
                    genres={
                      <span className="text-white text-sm">
                        {manga.attributes.tags
                          .map((tag) => tag.attributes.name.en)
                          .join("/ ")}
                      </span>
                    }
                    description={
                      <p className="text-white text-sm">
                        {manga.attributes.description.en || "No synopsis available"}
                      </p>
                    }
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer" />
      </Carousel>
    </div>
  );
}
