import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import './PostBlogStyles.css'
import './ResponsiveBlogCard.css'

export const PostBlog = (props: { src: string | undefined; alt: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; profile: string | undefined; name: string | undefined; author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => {
    return (
        <div className="PostBlog">
            <div className="topBlog">
                <img className='h-40 w-full object-cover' src={props.src} alt={props.alt} />
            </div>
            <div className="middleBlog text-[#64748b] font-satoshi">
                <h2>{props.title}</h2>
            </div>
            <div className="botBlog">
                <div className="botProfile">
                <img src={props.profile} alt={props.name} />
                <p className='font-satoshi font-medium text-[#64748b] '>{props.author}</p>
                </div>
            </div>
        </div>
    )
}