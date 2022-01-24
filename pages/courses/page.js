import { withRouter } from "next/router";

const Page = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Higher order function </h2>
            <p>withRouter</p>
            <button onClick={ ()=>props.router.push('/') } >Go to Home</button>
        </div>
    );
}

export default withRouter(Page);
