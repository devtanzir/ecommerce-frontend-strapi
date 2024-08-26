'use client'
import { useParams } from "next/navigation";
const Slug = () => {
    const {slug} = useParams()

    if (!slug) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Slug: {slug}</h1>
        </div>
    );
}

export default Slug;