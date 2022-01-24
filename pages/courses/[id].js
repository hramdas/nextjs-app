 import { withRouter } from "next/router";

 const data = {
     "web-dev" : "web-dev",
     "android" : "android"
 }

 const CoursePage = (props) => {
     console.log(props)
     if(typeof window === 'undefined'){
         return <p>Loading ....</p>
     }
  return <>

      <h1>Inside dynamic course page </h1>
      <h1>{data[props.router.query.id]} Course</h1>

    </>
};

export default withRouter(CoursePage)