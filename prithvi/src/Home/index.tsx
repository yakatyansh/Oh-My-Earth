import Front from "./front";
import Stats from "./stats";
import Discover from "./discover";
import Banner from "./banner";
import Working from "./working";
import Reviews from "./reviews";

export default function Home() {
    return (
        <main>
            <Front/>
            <Stats/>
            <Working/>
            <Reviews/>
            <Banner/>
            <Discover/>
        </main>
    );
}
