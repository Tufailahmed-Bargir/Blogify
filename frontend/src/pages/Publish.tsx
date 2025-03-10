// // import axios from "axios"
// // import { Appbar } from "../components/Appbar"
// // import { BACKEND_URL } from "../config"
// // import { ChangeEvent, useState } from "react"
// // import { useNavigate } from "react-router-dom"

// // export const Publish = () => {
// //     const [title, setTitle] = useState("");
// //     const [description, setDescription] = useState("");
// //     const navigate = useNavigate()

// //   return (
// //     <div><Appbar />
// //         <div className="flex justify-center w-full pt-8">
// //             <div className="max-w-screen-lg w-full">
// //                 {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label> */}
// //                 <input onChange={(e) => {
// //                     setTitle(e.target.value)
// //                 }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Title">
// //                 </input>
// //                 <TextEditor onChange={(e) => {
// //                     setDescription(e.target.value)
// //                 }} />
// //                 <button onClick={async () => {
// //                     const response = await axios.post(`${BACKEND_URL}/blog`, {
// //                         title,
// //                         content: description
                        
// //                     }, {
// //                         headers: {
// //                             Authorization: localStorage.getItem("token")
// //                         }
// //                     });
// //                     navigate(`/blog/${response.data.id}`)
// //                     }} type="submit" className="mt-4 inline-flex items-center px-3 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
// //                     Publish post
// //                 </button> 
// //             </div>   

// //      </div>
// //     </div>
// //   )
// // }

// // function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
// //     return(
// // <div className="mt-8">
// //    <div className="w-full mb-4">
// //        <div className="flex items-center justify-between px-3 py-2 border">
       
// //         <div className="my-2 bg-white rounded-b-lg w-full">
// //             <label  className="sr-only">Publish post</label>
// //             <textarea onChange={onChange} id="editor" rows={8} className="block w-full px-0 text-sm focus-outline-none text-gray-800 bg-white border-0  " placeholder="Write a blog..." required ></textarea>
// //         </div>
// //    </div>
   
// //    </div>
// // </div>
// //     )
// // }

// 'use client'
// import { useForm, type SubmitHandler } from "react-hook-form"
// import axios from 'axios'
// import { toast, Toaster } from "sonner"
// import { useNavigate } from "react-router-dom"
// import { useState } from "react"
// import { BACKEND_URL } from "../config"
// import { Appbar } from "../components/Appbar"

// interface BlogFormInputs {
//   title: string;
//   desc: string;
// }

// export default function Publish() {
//   const navigate = useNavigate()
//   const [loading, setLoading] = useState(false)

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<BlogFormInputs>()

//   const onSubmit: SubmitHandler<BlogFormInputs> = async (data) => {
//     setLoading(true)
//     try {
//       const response = await axios.post(`${BACKEND_URL}/blog/create`, data, {
//         headers: {
//           Authorization: localStorage.getItem('token')
//         },
//       })
//       if (response.data.success) {
//         toast.success("Blog created successfully!")
//         setTimeout(() => {
//           navigate(`/blogs`)
//         }, 1000)
//       }
//     } catch (error) {
//       let errorMessage = "Something went wrong!"
//       if (axios.isAxiosError(error)) {
//         errorMessage = error.response?.data?.msg || "Failed to create blog"
//       }
//       toast.error(errorMessage)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div>
//       <Appbar />
//       <div className="flex justify-center w-full pt-8">
//         <div className="max-w-screen-lg w-full">
//           <Toaster richColors position="bottom-right" />
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <input
//               {...register("title", { required: "Title is required" })}
//               type="text"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               placeholder="Your Title"
//             />
//             {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

//             <TextEditor {...register("desc", { required: "Description is required" })} />
//             {errors.desc && <p className="text-red-500 text-sm">{errors.desc.message}</p>}

//             <button
//               type="submit"
//               className="mt-4 inline-flex items-center px-3 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
//               disabled={loading}
//             >
//               {loading ? "Publishing..." : "Publish post"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// function TextEditor({ ...register }) {
//   return (
//     <div className="mt-8">
//       <div className="w-full mb-4">
//         <div className="flex items-center justify-between px-3 py-2 border">
//           <div className="my-2 bg-white rounded-b-lg w-full">
//             <textarea
//               {...register}
//               id="editor"
//               rows={8}
//               className="block w-full px-0 text-sm focus:outline-none text-gray-800 bg-white border-0"
//               placeholder="Write a blog..."
//               required
//             ></textarea>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// 'use client'
// import { useForm, type SubmitHandler } from "react-hook-form"
// import axios from 'axios'
 
// import { toast, Toaster } from "sonner"
// import { useNavigate } from "react-router-dom"
// import { BACKEND_URL } from "../config"
 
// type BlogFormInputs = {
//   title: string
//   desc: string
// //   authorId: string
// }

// export default function BlogPublishForm() {
//   const redirect = useNavigate()  
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<BlogFormInputs>()

// const onSubmit: SubmitHandler<BlogFormInputs> = async (data:BlogFormInputs) => {
//     try {
//       console.log(data)
//     const response = await axios.post(`${BACKEND_URL}/blog/create`, data,{
//         headers:{
//             authorization:localStorage.getItem('token')
//         }
//     })
//     console.log(response.data);
//     if(response.data.success){
//         toast.success("blog created success!")
//         setTimeout(() => {
//             redirect(`/blogs`)
//         }, 1000);
//     }
   
    
//     } catch (error) {
//       // @ts-expect-error error
//       toast.message('error found', error.message)
      
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//         <Toaster richColors position="bottom-right"/>
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto">
//             <div>
//               <h1 className="text-2xl font-semibold">Publish Your Blog Post</h1>
//             </div>
//             <div className="divide-y divide-gray-200">
//               <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
//               >
//                 <div className="relative">
//                   <input
//                     {...register("title", { required: "Title is required" })}
//                     id="title"
//                     type="text"
//                     className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                     placeholder="Blog Title"
//                   />
//                   <label
//                     htmlFor="title"
//                     className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
//                   >
//                     Blog Title
//                   </label>
//                   {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
//                 </div>
//                 <div className="relative">
//                   <textarea
//                     {...register("desc", { required: "Description is required" })}
//                     id="description"
//                     className="peer placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 resize-none"
//                     placeholder="Blog Description"
//                   ></textarea>
//                   <label
//                     htmlFor="description"
//                     className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
//                   >
//                     Blog Description
//                   </label>
//                   {errors.desc && <p className="text-red-500 text-sm mt-1">{errors.desc.message}</p>}
//                 </div>
                
                  
//                 <div className="relative">
//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//                   >
//                     Publish Post
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'
import { useForm, type SubmitHandler } from "react-hook-form"
import axios from 'axios'
import { toast, Toaster } from "sonner"
import { useNavigate } from "react-router-dom"
import { useState } from "react" // ✅ Import useState for loading
import { BACKEND_URL } from "../config"

type BlogFormInputs = {
  title: string
  desc: string
}

export default function Publish() {
  const redirect = useNavigate()
  const [loading, setLoading] = useState(false) // ✅ Loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogFormInputs>()

  const onSubmit: SubmitHandler<BlogFormInputs> = async (data) => {
    setLoading(true)  
    try {
       
      console.log('data sending is', data, )
      const response = await axios.post(`${BACKEND_URL}/blog/create`, data,{
        headers: {
          Authorization: localStorage.getItem('token')
        },
      })

      console.log('token sending is', localStorage.getItem('token') )
      if (response.data.success) {
        toast.success("Blog created successfully!")
        setTimeout(() => {
          redirect(`/blogs`)
        }, 1000)
      }
    } catch (error) {
      console.error("Error:", error)
      let errorMessage = "Something went wrong!"
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.msg || "Failed to create blog"
      }
      toast.error(errorMessage) // ✅ Corrected error handling
    } finally {
      setLoading(false) // ✅ Stop loading
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Toaster richColors position="bottom-right" />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Publish Your Blog Post</h1>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit(onSubmit)} className="py-8 space-y-4">
                <div className="relative">
                  <input
                    {...register("title", { required: "Title is required" })}
                    id="title"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Blog Title"
                  />
                  <label
                    htmlFor="title"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Blog Title
                  </label>
                  {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                </div>
                <div className="relative">
                  <textarea
                    {...register("desc", { required: "Description is required" })}
                    id="description"
                    className="peer placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 resize-none"
                    placeholder="Blog Description"
                  ></textarea>
                  <label
                    htmlFor="description"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Blog Description
                  </label>
                  {errors.desc && <p className="text-red-500 text-sm mt-1">{errors.desc.message}</p>}
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
                    disabled={loading} // ✅ Disable button when loading
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5 mr-3 border-2 border-t-transparent border-white rounded-full"
                        viewBox="0 0 24 24"
                      ></svg>
                    ) : (
                      "Publish Post"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
