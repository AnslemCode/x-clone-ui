"use server";
import { imagekit } from "./utils";

export const shareAction = async (
  data: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const media = data.get("media") as File;
  const bytes = await media.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformation = `w-600, ${
    settings.type === "original"
      ? "ar-1-1"
      : settings.type === "wide"
      ? "ar-16-9"
      : ""
  }`;

  imagekit.upload(
    {
      file: buffer,
      fileName: media.name,
      folder: "/posts",
      ...(media.type.includes("image") && {
        transformation: {
          pre: transformation,
        },
      }),
      customMetadata: {
        sensitive: settings.sensitive,
      },
    },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
};
