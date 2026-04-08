
import './App.css'
import State from "./components/State";
import UseEffect from "./components/UseEffect";
import UseStateComponent from "./components/UseStateComponent";
import ClickEvent from "./components/ClickEvent";
import OnChangeEvent from "./components/OnChangeEvent";
import TwoStateComponent from "./components/TwoStateComponent";
import RenderList from "./components/Lists/RenderList";
import RenderListObjects from "./components/Lists/RenderListObjects";
import Courses from "./components/Lists/Courses";
import FormSubmit from "./components/form/FormSubmit";

function App() {
  const courses = [
    {
      id: 1,
      title: "react",
      instructor: "leotrimi",
      price:200
    },
    {
      id: 2,
      title: "javascript",
      instructor: "leoni",
      price:200
    },
    {
      id: 3,
      title: "html & css",
      instructor: "edonisa",
      price:300
    },
    {
      movieName: "arrnold",
      movieDesc:"dkfndkfk",
      isAvailable: true, 
      movieRate:100
    }
  ]

  return (
    <>
      <State />
      <UseEffect />
      <hr />
      <TwoStateComponent />
      <hr />

      <UseStateComponent />
      <hr />
      <ClickEvent />
      <OnChangeEvent />
      <hr />
      <RenderList />
      <RenderListObjects />
      {
        courses.map(course => (
          <Courses
            title={course.title}
            instructor={course.instructor}
            price={course.price}
            key={course.id}
          />
        ))
      }
    
      <hr />
      <FormSubmit />
      <hr />
    </>
  )
}

export default App
