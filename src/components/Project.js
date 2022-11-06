import "./Project.css";
import 'font-awesome/css/font-awesome.min.css';
import catalogArray from '../projects.json';
import { useParams } from "react-router-dom"

function Project(){
    const param = useParams();

    let data = catalogArray.filter(project => project.id === param.title)[0];
    console.log(data);

    let stack = '';

    for(let i = 0; i < data.stack.length; i++){
        stack += `<div><h1>${data.stack[i]}</h1></div>`;
    }

    return(
        <div className="Project">
            <div className="flexBox">
                <img src={require(`../images/${data.picture}`)}></img>
                <div className="projectDesc">
                    <p>{data.desc}
                    </p>
                    <span dangerouslySetInnerHTML={{__html: data.link}}></span>
                </div>
            </div>
            <div className="iconList">
                <li><a href={data.github}><i className='fa fa-github fa-4x'></i></a></li>
                {/* <li><a href={data.github}><i className='fa fa-globe fa-4x'></i></a></li> */}
            </div>
            <div className="techStack">
                <h1>Tech Stack:</h1>
                <div className="techList" dangerouslySetInnerHTML={{__html: stack}}>
                </div>
            </div>
        </div>
    )
}

export default Project;