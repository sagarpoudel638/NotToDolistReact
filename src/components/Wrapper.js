import AddTask from "./AddTask";
import GoodBadList from "./GoodBadList";
import TitleContainer from "./TitleContainer";

function Wrapper() {
    return(
  <div style={{
    "height": "100vh",
    "background": "linear-gradient(180deg,rgba(168, 97, 143, 1) 0%,rgba(112, 130, 222, 1) 100%)"
  }}
>
    <TitleContainer/>
    <AddTask/>
    <GoodBadList/>
  </div>
    )
}

export default Wrapper;
