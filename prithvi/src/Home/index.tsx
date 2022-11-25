import Front from "./front";
import Stats from "./stats";
import Discover from "./discover";
import Banner from "./banner";
import Working from "./working";

export default function Home() {
    return (
        <main>
            <Front/>
            <Stats/>
            <Working/>
            <Banner/>
            <Discover/>
        </main>
    );
}
