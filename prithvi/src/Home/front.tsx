import { useState } from "react";
import SearchBar from "../components/searchBar";
import bg from "../Assets/bg.jpg";
import styled from "@emotion/styled";
import CountUp from 'react-countup';

const FrontContainer = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 90vh;
`

export default function Front() {
    const [searchBar, setSearchBar] = useState(false);

    return (
        <FrontContainer className="z-10">
            <div className="sm:w-11/12 mx-auto">
                <div
                    className={`py-8 sm:rounded-3xl relative w-full h-[620px] bg-homefrontbg bg-cover lg:bg-center bg-no-repeat bg-left`}
                >
                    <div className="absolute bottom-[24%] sm:left-[6%] left-[5%] flex items-center flex-wrap gap-4">
                        {searchBar && (
                            <form className="flex items-end gap-4 flex-wrap">
                                <SearchBar />
                                <button className="bg-white px-2 py-3 w-24 font-bold uppercase text-sm text-black hover:text-white hover:bg-black hover:bg-opacity-50 rounded-md">
                                    Find
                                </button>
                            </form>
                        )}
                        {!searchBar && (
                            <button
                                onClick={() => setSearchBar(!searchBar)}
                                className="sm:text-[20px] text-white sm:px-10 px-3 py-3 rounded-md border-[1px] border-white capitalize sm:w-auto w-full font-bold"
                            >
                                Check ppm
                            </button>
                        )}
                    </div>
                    <article className="lg:flex hidden items-end absolute top-[30%] right-0 w-[40%] border-l-2 h-3/5 px-2 border-l-white backdrop-opacity-50">
                        <div className="text-white text-[26px] w-[80%]">
                            <div className="font-extrabold text-7xl">Helping you <div className="text-lime-500">Green</div> the World</div>
                            <div className="mt-7">Support Earned so far</div>
                             <div className="text-lime-500 text-5xl"> <CountUp end={129749} duration={12} /> </div>
                        </div>
                    </article>
                </div>
            </div>
        </FrontContainer>
    );
}
