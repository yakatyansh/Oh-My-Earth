import {useEffect, useState} from "react";
import SearchBar from "../components/searchBar";
import bg from "../Assets/bg2.jpg";
import styled from "@emotion/styled";
import CountUp from 'react-countup';
import * as https from "https";
import AQI from "../components/AQI";

const FrontContainer = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 92vh;
`

const Front = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus('');
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
        fetch("https://api.waqi.info/feed/here/?token=93299e6d0ae6d024077265cc44633a41178f9fcd", )
            .then(response => response.json())
            .then(data => data.json());
    }, []);


        return (
            <FrontContainer className="z-10">
                <div className="sm:w-11/12 mx-auto">
                    <div
                        className={`py-8 sm:rounded-3xl relative w-full h-[620px] bg-homefrontbg bg-cover lg:bg-center bg-no-repeat bg-left`}
                    >
                        <div className="absolute bottom-[24%] sm:left-[6%] left-[5%] flex items-center flex-wrap gap-4">
                            {searchBar && (
                                <form className="flex items-end gap-4 flex-wrap">
                                    <SearchBar/>
                                    <button className="bg-white px-2 py-3 w-24 font-bold uppercase text-sm text-black hover:text-white hover:bg-black hover:bg-opacity-50 rounded-md">
                                        Find
                                    </button>


                                </form>
                            )}
                            {!searchBar && (
                                <button onClick={() => setSearchBar(!searchBar)}
                                        className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-white">
                                <span
                                    className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span
                                        className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
                                    <span className="relative mr-1">Check AQI</span>
                                </button>
                            )}

                        </div>
                        <article
                            className="lg:flex hidden items-end absolute top-[30%] right-0 w-[40%] border-l-2 h-3/5 px-2 border-l-white backdrop-opacity-50">
                            <div className="text-white text-[26px] w-[80%]">
                                <div className="font-extrabold text-7xl">Helping you <div
                                    className="text-lime-500">Green</div> the World
                                </div>
                                <div className="mt-7">Support Earned so far</div>
                                <div className="text-lime-500 text-5xl"><CountUp end={129749} duration={1.5}/></div>
                            </div>
                        </article>
                    </div>
                </div>
            </FrontContainer>
        );
}

export default Front;
