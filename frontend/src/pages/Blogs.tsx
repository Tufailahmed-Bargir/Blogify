import { useRecoilStateLoadable } from "recoil";
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
 
import { blogsState } from "../stores/atoms/atom";
interface BlogCardProps{
    
  id: number;
  title: string;
  desc: string;
  publish: boolean;
  authorId: string;
  createdAt: string;
  updatedAt: string;

}
export const Blogs = () => {

  const [blogs] = useRecoilStateLoadable(blogsState)

    if (blogs.state ==='loading'){
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
      <div  className="flex justify-center">
        <div className="">
        {blogs.contents.map((data:BlogCardProps)=>{
                return <BlogCard 
                title={data.title}
                authorname={data.authorId}
                desc={data.desc}
                id={data.id}
                publishedDate={data.publish}
                />
            })}
        
       
      </div>
      </div>
    </div>
    
  )
}

