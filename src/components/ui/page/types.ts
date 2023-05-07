export type ImageType = {
  url: string;
  file: File | "";
};

export type ImageUploadProps = {
  image: ImageType | null;
  setImage: React.Dispatch<React.SetStateAction<ImageType | null>>;
};
