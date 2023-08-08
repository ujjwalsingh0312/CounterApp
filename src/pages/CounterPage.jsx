import { useState } from "react";
import Message from "../components/Message";
import Button from "../components/Button";

const CounterPage = () => {
    const [quant, setCount] = useState(0);
    const updateCount = (text) => {
        if (text === "+") {
            setCount(quant + 1);
        } else {
            setCount(quant - 1);
        }
    };
    return (
        <div className="container">
            <Message className="alert alert-danger" msgh2="Counter App" />
            <Message value={quant} className="alert alert-info" msgh5="Counter Value is "/>
            <div className="row text-center">
                <div className="col-4">
                    <Button fn={updateCount} classname="btn btn-danger" text="-" />
                </div>
                <div className="col-4">
                    <Message value={quant} />
                </div>
                <div className="col-4">
                    <Button fn={updateCount} classname="btn btn-success" text="+" />
                </div>
            </div>
        </div>
    );
};

export default CounterPage;
