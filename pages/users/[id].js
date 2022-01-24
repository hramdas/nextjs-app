import { withRouter } from "next/router";
const list = {
    "user1" : "Ramdas",
    "user2" : "Rohit",
    "user2" : "Rakesh Sharma",
}

const Id = (props) => {
    if(typeof window === 'undefined'){
        return <p>Loading .....</p>
    }

    return (
        <div>
            <h1>User</h1>
            <h2>{props.router.query.id} : {list[props.router.query.id]}</h2>
        </div>
    );
}

export default withRouter(Id);
