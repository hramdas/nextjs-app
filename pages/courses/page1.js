import { useRouter } from "next/router";
const Webdev = () => {
    const router = useRouter()
    return (
        <div>
            <h2>Web dev course page</h2>
            <button onClick={()=>router.push("/")}>Go to Home</button>
        </div>
    );
}

export default Webdev;
