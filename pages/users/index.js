import Link from "next/link";

export const getStaticProps = async ()=>{
    const res = await fetch("https://reqres.in/api/users");
    const users = await res.json()

    return {
        props: {
            users,
        }
    }
}

const Index = ({users}) => {
    
    return (
        <div>
            <h2>Users List</h2>
           {users.data.map((user)=> (
                    <div key={user.id}> 
                        <Link href={`/users/${user.id}`}>
                            <a>
                            <h2>{user.first_name, user.last_name}</h2>
                            </a>                         
                        </Link>

                    </div>
                )
            )}
        </div>
    );
}

export default Index;
