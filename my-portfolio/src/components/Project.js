import "./Project.css";

function Project(){

    return(
        <div className="Project">
            <div className="flexBox">
                <img className="imgBox" src={require('../images/me.jpg')}></img>
                <div className="projectDesc">
                    <p>This is my face. It's a pretty face</p>
                    <h1>Tech Stack:</h1>
                    <div className="techStack">
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;