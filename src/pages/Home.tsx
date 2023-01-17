import {
  HomeHeader,
  HomeConcept,
  HomeSlider,
  HomeFooter
} from "../features/home";

const Home = () => {
  return(
    <div className={'home'}>
      <HomeHeader/>
      <HomeConcept/>
      <HomeSlider/>
      <HomeFooter/>
    </div>
  )
}
export default Home