const Result = (props) => {
    return (
        <div>
            {props.results.country && <div>{props.results.country}</div>}
            {props.results.cityName && <div>{props.results.cityName}</div>}
            {props.results.temperature && <div>{props.results.temperature}</div>}
            {props.results.conditionText && <div>{props.results.conditionText}</div>}
        </div>
    );
};

export default Result;