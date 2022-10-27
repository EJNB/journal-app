export const fileUpload = async (file) => {
  // if (!file) throw new Error("No tenemos ningun archivo");
  if (!file) return null;

  const url = "https://api.cloudinary.com/v1_1/dl1ik04nq/upload";
  const formData = new FormData();
  formData.append("upload_preset", "reactjs-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("No se pudo subir la imagen");

    const cloudRes = await resp.json();
    return cloudRes.secure_url;
  } catch (error) {
    // throw new Error(error.message);
    return null;
  }
};
