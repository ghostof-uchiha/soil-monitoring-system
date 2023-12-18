import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import './PostRecipe.css'
import './ResponsiveCardRecipe.css'

export const RecipePost = (props: { src: string | undefined; alt: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => {
    return (
       <div className="postWrapper">
           <div className="leftInfo">
               <img src={props.src} alt={props.alt}/>

           </div>
           <div className="rigthInfo">
               <h2>{props.title}</h2>
               <button>See more</button>
           </div>
       </div>
    )
}