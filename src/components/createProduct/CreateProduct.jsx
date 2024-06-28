import React, { useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../context/api/ProductApi/ProductApi";
import LocalImage from "./LocalImage";
import './Create.scss'

const intialstate = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};
const CreateProduct = () => {
  const { formData, handleChange, setFormData } = useGetInputValue(intialstate);
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const [files, setFiles] = useState("");

  const handleCreateProduct = (e) => {
    e.preventDefault();

    let form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);
    form.append("info", JSON.stringify({}));
    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });

    createProduct(form);
    setFormData(intialstate);
    setFiles("");
  };
  return (
    <form className="form" onSubmit={handleCreateProduct}>
      <label htmlFor="title">
        Title
        <input
          value={formData.title}
          onChange={handleChange}
          type="text"
          required
          name="title"
          id="title"
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          value={formData.price}
          onChange={handleChange}
          type="text"
          required
          name="price"
          id="price"
        />
      </label>
      <label htmlFor="oldPrice">
        Old Price
        <input
          value={formData.oldPrice}
          onChange={handleChange}
          type="text"
          required
          name="oldPrice"
          id="oldPrice"
        />
      </label>
      <label htmlFor="category">
        Category
        <input
          value={formData.category}
          onChange={handleChange}
          type="text"
          required
          name="category"
          id="category"
        />
      </label>
      <label htmlFor="units">
        Units
        <input
          value={formData.units}
          onChange={handleChange}
          type="text"
          required
          name="units"
          id="units"
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          value={formData.description}
          onChange={handleChange}
          type="text"
          required
          name="description"
          id="description"
        />
      </label>
      <label htmlFor="image">
        <input
          onChange={(e) => setFiles(e.target.files)}
          type="file"
          required
          multiple
          accept="image/*"
        />
        <LocalImage files={files} setFiles={setFiles} />
      </label>
      <button disabled={isLoading}>Create</button>
    </form>
  );
};

export default CreateProduct;
