import Link from "next/link";
import { useRouter } from "next/router";

const Index = (props) => {
    console.log(props)
    return <div>
            <h2>Courses</h2>
            <Link href="/about">Go to About</Link>
            <ul>
                {props.courses.map(course=><li key={course}>{course}</li>)}
            </ul>
        </div>
}

export const getStaticProps = async ()=>{
    
    return{
        props : {
            courses : ["Web Dev", "Android"]
        },
        notFound : false
    }
}

export default Index;
