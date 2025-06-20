import { Typography } from "@mui/material";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";


export const clientLoader = async () => {
  return {
    images: [
      "https://picsum.photos/200",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/400/300",
      "https://picsum.photos/200/600",
    ],
  };
};

export default function ServerLightGallary({ loaderData }: { loaderData: { images: string[] } }) {

  
  return (
    <div>
      <Typography variant="h3">Multiple Images</Typography>
      <LightgalleryProvider
      className="grid grid-cols-3 gap-4"
      >
        <div className="grid grid-cols-3 gap-4">

        {loaderData.images.map((image, index) => (
          <LightgalleryItem
          key={image + index}
          galleryClassName=" "
          group="any"
          src={image}
          >
            <img src={image} alt="image" />
          </LightgalleryItem>
        ))}
        </div>
      </LightgalleryProvider>


      <Typography variant="h3">Single Image</Typography>
      <LightgalleryProvider>
        <LightgalleryItem
          src={loaderData.images[0]}
        >
          <img src={loaderData.images[0]} alt="image" />
        </LightgalleryItem>
      </LightgalleryProvider>
    </div>
  );
}
