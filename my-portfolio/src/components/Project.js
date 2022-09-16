import "./Project.css";
import 'font-awesome/css/font-awesome.min.css';
import {useLocation} from "react-router-dom"

function Project(){

    let data = useLocation();
    console.log(data.state);

    let stack = '';

    for(let i = 0; i < data.state.stack.length; i++){
        stack += `<div><h1>` + data.state.stack[i] + `</h1></div>`;
    }

    return(
        <div className="Project">
            <div className="flexBox">
                <img src={require('../images/Dangerous.JPG')}></img>
                <div className="projectDesc">
                    <p>{data.state.desc}
                    </p>
                </div>
            </div>
                <div className="techStack">
                    <h1>Tech Stack:</h1>
                    <div className="iconList">
                        {stack}
                    </div>
                </div>
        </div>
    )
}

export default Project;