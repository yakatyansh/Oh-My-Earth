const Stats = () => {
    return (
        <section className="stats_box py-10 grid place-items-center lg:grid-cols-4 grid-cols-2 gap-4 sm:w-9/12 w-11/12 mx-auto mt-2 px-4">
            <div>
                <h1 className="md:text-[40px] text-[25px] font-bold">120+</h1>
                <p>Experts and Researchers</p>
            </div>
            <div>
                <h1 className="md:text-[40px] text-[25px] font-bold">200k</h1>
                <p>Supporters</p>
            </div>
            <div>
                <h1 className="md:text-[40px] text-[25px] font-bold">Rs.200M</h1>
                <p>Money in doantions</p>
            </div>
            <div>
                <h1 className="md:text-[40px] text-[25px] font-bold">50+</h1>
                <p>Communities</p>
            </div>
        </section>
    );
}

export default Stats;