import Skeleton from "react-loading-skeleton";
import "./LoadingScreen.css";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingScreen() {

    return (
        <>
            <div className="loadingscreen-container">
                <div className="loadingscreen-body">
                    <div className="image-loadingscreen">
                        <Skeleton 
                            height="100%"
                            borderRadius="3%"
                            className="skeleton image"
                        />
                    </div>
                    <div className="details-loadingscreen">
                        <h1 className="title-loadingscreen">
                            <Skeleton 
                                height="100%"
                                className="skeleton title"
                            />
                        </h1>
                        <div className="details-section">
                            <Skeleton className="skeleton detail"/>
                            <Skeleton className="skeleton detail"/>
                            <Skeleton className="skeleton detail"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingScreen;