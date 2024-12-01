import  { useState, useEffect} from "react";
import { useCreateSubCategoryMutation, useGetCategoriesQuery } from "../../redux/apiSlice";


const SubCategory = () => {
  const [subCategoryInput, setsubCategoryInput] = useState({
    name: "",
    slug: "",
    category: "",
  });

  const {data:isData, isLoading:isLoad}=useCreateSubCategoryMutation()
  const [createSubCategory,{data, isSuccess, error, isError, isLoading}]= useCreateSubCategoryMutation()
  const {data:categories, isLoading: categoryLoad } = useGetCategoriesQuery()

  //   handle sub category input fields
  const handleSubCategoryInput = (e) => {
    let subCategoryInputInfo = { ...subCategoryInput };
    subCategoryInputInfo[e.target.name] = e.target.value;
    setsubCategoryInput(subCategoryInputInfo);
  };

  //   handle create sub category
  const handleCreateSubCategory = async (e) => {
    e.preventDefault();
    try {
      if(Object.values(subCategoryInput).some((value) => value.trim() != "")) {
        await createSubCategory(subCategoryInput)
       }
       setsubCategoryInput({
         name: "",
         slug: "",
         category:"",
       });
    } catch (error) {
      console.log(error);
      
    }
  
   
  };
  useEffect(()=>{
    console.log(data, isSuccess, error, isError, isLoading,isData,isLoad);
    
      },[data, isSuccess, error, isError, isLoading,isData,isLoad])
  return (
    <main>
      <div>
        <h2>Create Sub Category</h2>
      </div>
      <section className="bg-white mt-6 p-5 rounded">
        <form action="">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-3">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Category Name
              </label>
              <input
                type="text"
                placeholder="Enter Category Name"
                name="name"
                value={subCategoryInput.name}
                onChange={handleSubCategoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3">
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
                value={subCategoryInput.slug}
                onChange={handleSubCategoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Select Category
              </label>
              <select
                id=""
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
                name="category"
                onChange={handleSubCategoryInput}
                value={subCategoryInput.category}
              >
                <option value={0}>Select Parent Category</option>
                {
                   !categoryLoad &&  categories?.data.map(({name, _id})=>(
                    <option value={_id} key={_id}>{name}</option>
                  ))
                }
              </select>
            </div>
            <div className="bg-black px-3 py-2 text-white rounded-lg">
              <button onClick={handleCreateSubCategory}>
                Create Sub Category
              </button>
            </div>
          </div>
        </form>
      </section>

    </main>
  );
};

export default SubCategory;
