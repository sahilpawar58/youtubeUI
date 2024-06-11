import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PageHeader } from './Components/PageHeader'
import { CategoryPills } from './Components/CategoryPills'
import {categories} from './data/home.js'

function App() {
  const [count, setCount] = useState(0);
  const [selectedCategory,setSelectedCategory] = useState(categories[0])

  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>Sidebar</div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory}/>
        </div>
      </div>
    </div>
  )
}

export default App
