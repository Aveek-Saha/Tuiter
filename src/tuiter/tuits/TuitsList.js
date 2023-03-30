import { useSelector } from "react-redux";
import TuitItem from "./TuitItem";

const TuitList = () => {
    const tuitsArray = useSelector((state) => state.tuits);
    return(
        <div className="list-group">
            {
                tuitsArray.map(tuit => {
                    return(<TuitItem key={tuit._id} post={tuit}/>)
                })
            }
        </div>
    )
}

export default TuitList;