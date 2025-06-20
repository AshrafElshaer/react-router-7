import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";


export const loader = async () => {
  return {
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  };
};

export default function ServerLightGallary({ loaderData }: { loaderData: { images: string[] } }) {
  return (
    <div>
      <LightgalleryProvider>
        {loaderData.images.map((image) => (
          <LightgalleryItem
            galleryClassName=" "
            group="any"
            src={image}
          >
            <img src={image} alt="image" />
          </LightgalleryItem>
        ))}
      </LightgalleryProvider>
    </div>
  );
}
