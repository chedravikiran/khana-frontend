import  react,{ useState} from 'react'
import './Home.css'
import Header from "../../assets/components/Header/Header"
import { assets } from '../../assets2/frontend_assets/assets'
import ExploreMenu from '../../assets/components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../assets/components/FoodDisplay/FoodDisplay'
import AppDownload from '../../assets/components/AppDownload/AppDownload'

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
     < AppDownload/>
    </div>
  )
}

export default Home