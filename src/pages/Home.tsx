import {
  HomeHeader,
  HomeConcept,
  HomeDinosaur,
  HomeFooter,
  HomePaleontology,
  HomeEras
} from "../features/home";

const Home = () => {
  return(
    <div className={'home'}>
      <HomeHeader/>
      <HomePaleontology/>
      <HomeEras/>
      <HomeDinosaur/>
      <HomeFooter/>
    </div>
  )
}
export default Home