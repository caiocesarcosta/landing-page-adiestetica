import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";
import { Maps } from "..components/Maps";
export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/nutritrack.svg"
                                alt="logo"
                                className="w-auto w-auto"
                                height="50"
                                width="300"
                                priority
                            />
                        </Link>
                        <Maps/>
                    </h1>
                    
                      

                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    {/* <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            href="https://github.com/christian-luntok/nutritrack"
                            className="btn btn--secondary ml-4"
                        >
                            Get Template
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </a>
                    </ButtonGroup> */}
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
