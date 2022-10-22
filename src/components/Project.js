import "./Project.css";
import 'font-awesome/css/font-awesome.min.css';
import {useLocation} from "react-router-dom"

function Project(){

    let data = useLocation();
    console.log(data.state);

    let stack = '';

    for(let i = 0; i < data.state.stack.length; i++){
        stack += `<div><h1>${data.state.stack[i]}</h1></div>`;
    }

    return(
        <div className="Project">
            <div className="flexBox">
                <img src={require(`../images/${data.state.picture}`)}></img>
                <div className="projectDesc">
                    <p>{data.state.desc}
                    </p>
                </div>
            </div>
            <div className="iconList">
                <li><a href={data.state.github}><i className='fa fa-github fa-4x'></i></a></li>
                {/* <li><a href={data.state.github}><i className='fa fa-globe fa-4x'></i></a></li> */}
            </div>
            <div className="techStack">
                <h1>Tech Stack:</h1>
                <div className="iconList" dangerouslySetInnerHTML={{__html: stack}}>
                </div>
            </div>
        </div>
    )
}

export default Project;