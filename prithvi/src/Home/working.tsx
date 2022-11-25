import React from "react";
import how_1 from "../Assets/how_1.png"
import how_2 from "../Assets/how_2.png"
import how_3 from "../Assets/how_3.png"
import how_4 from "../Assets/how_4.png"

const items = [
    {
        id: 1,
        icon: how_1,
        heading: "Find the communities around you",
        text: "Find active communities around you or create a new one",
    },
    {
        id: 2,
        icon: how_2,
        heading: "Solve environmental issues and make your environment better",
        text: "Seek resources and fundings to help us save the earth",
    },
    {
        id: 3,
        icon: how_3,
        heading: "Take guidance from our experts",
        text: "Meet our experts and researchers and seek guidance",
    },
    {
        id: 4,
        icon: how_4,
        heading: "Donate to other communities and orgs",
        text: "Donate a sum of Rs.2500 and get a tree planted by your name",
    },
];

const Working = () => {
    return (
        <section className="my-14">
            <div className="md:w-11/12 w-full md:px-0 px-3 mx-auto">
                <h1 className={`md:text-[40px] text-[30px] font-bold uppercase`}>how it works</h1>
                <div className="bg-[#D9CAB3] bg-opacity-30 px-8 py-14 rounded-md mt-8">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8">
                        {items.map((item) => (
                            <div
                                className="text-center flex flex-col items-center justify-center"
                                key={item.id}
                            >
                                <img src={item.icon} alt="icon" className="pb-4 w-24" />
                                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Working;
