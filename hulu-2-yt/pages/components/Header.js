import {
    HomeIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className="">
            <div>
                <HeaderItem title="home" Icon={HomeIcon} />
            </div>
            <Image 
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header
