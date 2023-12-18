import './BestRecipes.css'
import './ResponsiveRecipes.css'
import { RecipePost } from './Post/RecipePost'

import PicRecipe1 from '../../images/logo/crop.png'
import PicRecipe2 from '../../images/logo/crop.png' 
import PicRecipe3 from '../../images/logo/crop.png' 
import PicRecipe4 from '../../images/logo/crop.png' 

export const BestRecipes = () => {
    return (
        <section className="bRecipes">
            <div className="recipes w-full">
                <div className="infos">
                    <h2>Agriculture + Technology = Agnology</h2>
                    <p>The Earth does not belong to us: we belong to the Earth</p>
                </div>
                
                <div className="recipe-posts  grid grid-cols-2 gap-10">
                    <RecipePost title='crop-01' 
                    src={PicRecipe1}
                    alt='crop-01'/>

                    <RecipePost title='crop-02'
                    src={PicRecipe2}
                    alt='crop-02'/>

                    <RecipePost title='crop-03'
                    src={PicRecipe3}
                    alt='crop-03'/>

                    <RecipePost title='crop-04'
                    src={PicRecipe4}
                    alt='crop-04'/>
                </div>
            </div>
        </section>
    )
}