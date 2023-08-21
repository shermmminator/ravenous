import { useSelector } from "react-redux";
import Businesscard from "../businesscard/Businesscard";
import "./Body.css";
import LoadingScreen from "../loadingscreen/LoadingScreen";

function Body() {

    const { businesses, isLoading, loadError } = useSelector(state => state.businesses);

    if(isLoading) {

        return (
            <>
                <div className="businesscard-container loading">
                    <LoadingScreen />
                    <LoadingScreen />
                    <LoadingScreen />
                    <LoadingScreen />
                </div>
            </>
        )
    }

    if(businesses.length > 0 && !isLoading) {

        return (

        <>
            <div className="businesscard-container">
                {businesses.map((business) => {

                    return <Businesscard 
                                key={business.id}
                                business={business}
                            />
                })}
            </div>
        </>
        )
    }
}

export default Body;