import "./Project.css";
import 'font-awesome/css/font-awesome.min.css';

function Project(){

    return(
        <div className="Project">
            <div className="flexBox">
                <img src={require('../images/Dangerous.JPG')}></img>
                <div className="projectDesc">
                    <p>It's Dangerous To Go Alone! A website designed to bring gamers together by connecting people with others of similar gaming interests,
                        gaming styles, and availability.
                    </p>
                </div>
            </div>
                <div className="techStack">
                    <h1>Tech Stack:</h1>
                    <div className="iconList">
                        <div>
                            <h1>ReactJS</h1>
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <div>
                            <h1>ReactJS</h1>
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <div>
                            <h1>ReactJS</h1>
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <div>
                            <h1>ReactJS</h1>
                            <i className="fa-brands fa-react"></i>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Project;