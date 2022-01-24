import Link from "next/link";
import { useRouter } from "next/router";

const Index = () => {
    return (
        <div>
            <h2>Courses</h2>
            <Link href="/about">Go to About</Link>
        </div>
    );
}

export default Index;
