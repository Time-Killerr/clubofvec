import './App.css';
import Carouse from './jsx/carouse';
//import CollegeCard  from './jsx/item';
import Banner from './jsx/banner';



const colleges = [
  {
    "Name":"Velammal Engineering College",
    "Location":"Chennai",
    "Src":'https://cdn.pixabay.com/photo/2015/11/06/14/59/gramophone-1028633_960_720.jpg',

  },
  {
    "Name":"Velammal Institute of Technology",
    "Location":"Chennai",
    "Src":'https://cdn.pixabay.com/photo/2015/11/06/14/59/gramophone-1028633_960_720.jpg'
  },
  {
    "Name":"Velammal college of engineering and technology",
    "Location":"Madurai",
    "Src":'https://cdn.pixabay.com/photo/2015/11/06/14/59/gramophone-1028633_960_720.jpg'
  },
]

const messages = [
  {
    "Title":"Smart India Hackathon",
    "Content":"Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving. The first four editions SIH2017, SIH2018, SIH2019 and SIH2020 proved to be extremely successful in promoting innovation out-of-the-box thinking in young minds, especially engineering students from across India. SIH 2022 brings the next generation evolution by inclusion of new methodology to inculcate the culture of startup and innovation ecosystem across different age groups",
    "Src":"https://sih.gov.in/",
  },
  {
    "Title":"AI",
    "Content":"dknsln;nds;nvk;dfn",
    "Src":"https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en",
  },
  {
    "Title":"",
    "Content":"",
    "Src":"",
  }
]

const App = () => {
  return(
    <>
    <Carouse />
    {/* <div className='container'>
      {colleges.map((college) => <CollegeCard college={college}/>)}
    </div> */}
    <div className='banner-cont'>
      {messages.map((message) => (<Banner message={message} />))}
    </div>
    </>
  )
}


export default App;