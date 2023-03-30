import WhatsHappening from "./whats-happening";
import TuitList from "../tuits/TuitsList"

const HomeComponent = () => {
    return(
        <div>
            <h2>Home</h2>
            <WhatsHappening/>
            <TuitList/>
        </div>
            
    )
}

export default HomeComponent;