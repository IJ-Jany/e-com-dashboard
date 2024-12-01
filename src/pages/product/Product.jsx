import { useEffect, useState } from "react";
import {  useGetCategoriesQuery, useGetSubCategoriesQuery } from "../../redux/apiSlice";

const Product = () => {

 

const {data:subCategory, isLoading:subLoad}=useGetSubCategoriesQuery()
const {data:categories, isLoading: categoryLoad } = useGetCategoriesQuery()
  const [productInput, setProductInput] = useState({
    title: "",
    slug: "",
    category: "",
    subcategory: "",
    thumbnail: null,
    gallery: [],
  });
  useEffect(()=>{
console.log(subCategory);

  }, [subCategory])

 // const [createProduct,{data, isSuccess, error, isError, isLoading}]= useCreateProductMutation();

  //   handle product input fields
  const handleProductInput = (e) => {
    let productInputInfo = { ...productInput };
    productInputInfo[e.target.name] = e.target.value;
    setProductInput(productInputInfo);
  };

  // handle create product 
  const handleCreateProduct = async (e) => {
   e.preventDefault();
   const formData = new FormData();
   formData.append("title", productInput.title)
   formData.append("slug", productInput.slug)
   formData.append("category", productInput.category)
   formData.append("subcategory", productInput.subcategory)
   formData.append("thumbnail", productInput.thumbnail)

   if(productInput.gallery.length > 0){
    for (let i=0; i < productInput.gallery.length; i++){
      formData.append("gallery", productInput.gallery[i])
    }
   }
   try{
   // await createProduct(formData)
    setProductInput({
      title: "",
      slug: "",
      category: "",
      subcategory: "",
      thumbnail: null,
      gallery: [],
    })
   }catch (error) {
    console.log(error);
    
   }
  }
  return (
    <main className="py-10 px-6">
      <div>
        <h2>Create Product</h2>
      </div>
      <section className="bg-white mt-6 p-5 rounded">
        <form action="">
          <div className="flex items-center justify-between flex-wrap gap-y-4 gap-x-1">
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Title
              </label>
              <input
                type="text"
                placeholder="Enter Category Name"
                name="title"
                value={productInput.title}
                onChange={handleProductInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Slug
              </label>
              <input
                type="text"
                placeholder="Enter Slug"
                name="slug"
                value={productInput.slug}
                onChange={handleProductInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
             <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Select  Category
              </label>
              <select
           id=""
           className="w-full outline-none border border-borderColor p-3 rounded-lg"
           name="category"
           value={productInput.category}
           onChange={handleProductInput}
         >
             <option value={0}>Select Parent Category</option>
                {
                   !categoryLoad &&  categories?.data.map(({name, _id})=>(
                    <option value={_id} key={_id}>{name}</option>
                  ))
                }
         </select>
             
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
         
         <label
           htmlFor=""
           className="text-primary text-base font-medium font-inter"
         >
           Select sub Category
         </label>
         <select
           id=""
           className="w-full outline-none border border-borderColor p-3 rounded-lg"
           name="subcategory"
           value={productInput.subcategory}
           onChange={handleProductInput}
         >
             <option value={0}>Select Sub Category</option>
               {
                  !subLoad &&  subCategory?.data.data.map(({name, _id})=>(
                  <option value={_id} key={_id}>{name}</option>
                 ))
               }
         </select>
       
       </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Thumbnail
              </label>
              <input
                type="file"
                placeholder="Enter thumbnail"
                name="thumbnail"
            
                onChange={handleProductInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Gallery
              </label>
              <input
                type="file"
                multiple
                placeholder="Enter gallery images"
                name="gallery"
               
                onChange={handleProductInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="bg-black px-3 py-2 text-white rounded-lg">
              <button onClick={handleCreateProduct}>Create Product</button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Product;
