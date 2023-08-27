"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";

type UploadResult = {
  event: "success";
  info: {
    public_id: string;
    width: number;
    height: number;
  };
};

export default function Home() {
  const [publicId, setPublicId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result) => {
          setPublicId(result.info["public_id"]);
        }}
        uploadPreset="bbugetar"
      />
      {publicId && (
        <CldImage
          width="960"
          height="600"
          src={publicId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
