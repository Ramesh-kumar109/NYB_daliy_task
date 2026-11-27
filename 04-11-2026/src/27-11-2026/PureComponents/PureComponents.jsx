
import {PureComponent} from "react";
class Count extends PureComponent {
    render(){
        console.log("Count is rendering")
        return(
            <div>
                <h2>Count:{this.props.count}</h2>
            </div>
        );
    }
}
export default Count;