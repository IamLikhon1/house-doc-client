import LoadingBar from "react-top-loading-bar";

const TopLoaderComponent = ({progress,setProgress}) => {
    return (
        <LoadingBar
        color='#F7A582'
        progress={progress}
        height={5}
        loaderSpeed={1000}
        waitingTime={1500}
        onLoaderFinished={() => setProgress(0)}
      />
    );
};

export default TopLoaderComponent;