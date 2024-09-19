import Link from "next/link";

export default function Page() {
    return (
        <p>
            <Link href="/post/1" className="block">
                1
            </Link>
            <Link href="/post/2" className="block">
                2
            </Link>
            <Link href="/post/3" className="block">
                3
            </Link>
        </p>
    );
}
