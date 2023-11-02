
import Header from './pages/Header'
import Footer from './pages/Footer'
import Packages from './pages/Packages'
import Widget from './pages/Widget'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'
import Practice from './pages/Practice'
import Action from './pages/Action'

export default function Home() {
  return (
    <main>   
      <Header/>
      <Packages/>
      <Action/>
      <Practice/>
      <Testimonial/>
      <Team/>
      <Widget/>
      <Footer/>
    </main>
  )
}
