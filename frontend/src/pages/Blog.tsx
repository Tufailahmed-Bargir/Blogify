import { useParams } from "react-router-dom";
 
import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useRecoilStateLoadable } from "recoil";
import { singleBlogAtom } from "../stores/atoms/atom";
import { Avatar } from "../components/BlogCard";

export const Blog = () => {

  const { id } = useParams()
  const [blog] = useRecoilStateLoadable(singleBlogAtom(id||""))
console.log('blog data is');
console.log('author data is ');
console.log(blog.contents);
try {
  console.log(blog.contents.author.name);
} catch (error) {
  console.log('sssssss');
}



  if(blog.state ==='loading' || !blog){
    return <div>
      <Appbar/>
        <div className="flex justify-center">
          <div>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          </div>
          
        </div>
    </div>
  }
  return (
    
       <div>
         <Appbar />
         <div className="flex justify-center">
           <div className="grid grid-cols-12 w-full px-10 pt-20 max-w-screen-xl ">
             <div className="col-span-8">
               <div className="text-3xl font-extrabold">{blog.contents.title}</div>
               <div className="text-slate-500 pt-3">Posten on 23rd June 2023</div>
               <div className="">{blog.contents.desc}</div>
             </div>
   
             <div className="col-span-4">
               <div className="text-slate-600 text-lg">
                   Author
               </div>
               
               <div className="flex">
                   <div className="pr-4 flex flex-col justify-center">
                   <Avatar size={"small"} name={blog.contents.author.name || "Anonymousggggggggggggg"}/>
                   </div>
                 <div>
                   <div className="text-xl font-bold">
                   {blog.contents.author.name}
                   </div>
                   <div className="pt-2 text-slate-500">
                     Random catch phrase about the author's ability to grab the
                     user's attention
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
 
}

export default Blog