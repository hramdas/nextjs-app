 import { withRouter } from "next/router";

 const data = {
     "web-dev" : "web-dev",
     "android" : "android"
 }

 const CoursePage = (props) => {
     console.log(props)
  return <div>

      <h1>Inside dynamic course page </h1>
      <h1>{data[props.router.query.id]} Course</h1>

    </div>;
};


export default withRouter(CoursePage)