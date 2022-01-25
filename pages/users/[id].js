import { withRouter } from "next/router";
import Image from "next/image";
export const getStaticPaths = async ()=>{
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    const paths = data.data.map((curUser)=>{
        return {
            params : {
                id : curUser.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback : false,
    };
};

export const getStaticProps = async (context)=>{
    const userid = context.params.id
    const res = await fetch(`https://reqres.in/api/users/${userid}`);
    const user = await res.json()

    return {
        props: {
            user,
        }
    }
}

const userPage = ({user}) => {
    user = user.data
    return (
        <div>
            <h1>User</h1>
            <h2>Name : {user.first_name+" "+ user.last_name}</h2>
            <h2>Email : {user.email}</h2>
            <Image src={user.avatar} width={200} height={200} alt="avatar"></Image>
        </div>
    );
}

export default withRouter(userPage);
