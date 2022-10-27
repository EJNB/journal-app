import { waitFor } from "@testing-library/react";
import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dl1ik04nq",
  api_key: "428577729644755",
  api_secret: "cK8aiQTfKcc98N19WX0lVWAwRW8",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  // test("debe de subir el archivo correctamente a claudinary", async () => {
  //   const imageUrl =
  //     "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg";

  //   const resp = await fetch(imageUrl);

  //   const blob = await resp.blob();
  //   const file = new File([blob], "foto.jpg");
  //   const url = await fileUpload(file);

  //   waitFor(() => expect(typeof url).toBe("string"), { timeout: 20000 });
  //   const segments = url.split("/");
  //   const imageId = segments[segments.length - 1].replace(".jpg", "");

  //   await cloudinary.api.delete_resources([
  //     "journal/" + imageId,
  //     {
  //       resource_type: "image",
  //     },
  //   ]);
  // });

  test("debe retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
