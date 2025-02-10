"use client"

import { Avatar } from "../../components/avatar";
import ContainerPage from "../../components/container-page";
import CounterServices from "../../components/counter-services";
import TimeLine from "../../components/time-line";
import TransitionPage from "../../components/transition-page";
import {CoverParticles} from "../../components/cover-particles";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <div className="mt-[200px] sm:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                        Toda mi{' '}
                        <span className="font-bold text-secondary">
                            trayectoria profesional
                        </span>
                    </h1>
                    <CounterServices />
                </div>
                <div className="mt-[90px] sm:mt-0">
                    <TimeLine />
                </div>
            </ContainerPage>
            <CoverParticles />
        </>
    );
}

export default AboutMePage;