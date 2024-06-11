import { Button } from "./Button"
export function CategoryPills({categories,selectedCategory,setSelectedCategory}){
    return (
    <>
    <div className="overflow-x-hidden relative ">
        <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map(category => (
            <Button variant="dark" className="py-1 px-3 rounded-lg whitespace-nowrap" onHover={()=>{setSelectedCategory(category)}}>
                {category}
            </Button>
        ))} 
                  <Button className="py-1 px-3 rounded-lg whitespace-nowrap">Javascirpt</Button>
        </div>
    </div>
    </>
)}