import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <div className="main-div">
        <p>To Do's</p>
		<div className="input-div">
			<div className="row">
				<div className="col-10">
					<input></input>
				</div>
				<div className="col-1">
					<button>Task</button>
				</div>
			</div>
			<ul className="todo-container">
				<li>test</li>
				<li>test</li>
				<li>test</li>
			</ul>
		</div>
      </div>
    </div>
  );
};

export default Home;
