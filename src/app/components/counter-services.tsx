import { dataCounter } from "../data";
import CountUp from "react-countup";

const CounterServices = () => {
    return (
        <div className="flex justify-center mx-auto my-8 max-w-5xl">
            <div className="grid grid-cols-2 gap-y-6 gap-x-10 md:grid-cols-4 md:divide-x md:divide-gray-100">
                {dataCounter.map(({ id, endCounter, text }, index) => (
                    <div
                        key={id}
                        className={`flex flex-col items-center text-center px-6 ${
                            index === 1 || index === 3 ? 'md:px-10' : ''
                        }`}
                    >
                        <div className="flex flex-col items-center text-center">
                            <p className="flex items-center mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                                + <CountUp end={endCounter} start={0} duration={5} />
                            </p>
                            <p className="text-xs uppercase max-w-[120px]">
                                {text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CounterServices;
