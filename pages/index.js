import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import { SEO } from "@components/SEO";


// teste


import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";


export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="EDaestética"
                description="Discover NutriTrack, the effortless way to plan your meals with the power of Notion. Streamline your nutrition journey and achieve your health goals with ease."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Serviços</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Descubra-se!! Serviços Exclusivos para Elevar sua Elegância
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Explore a Harmonização Corporal, onde a beleza se encontra com a ciência. Apresentamos tratamentos premium com a aplicação especializada de enzimas lipolíticas, esculpindo e modelando seu corpo de forma única. Transforme sua experiência estética com resultados surpreendentes. Sinta-se bem, sinta-se bela. Confira!!
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                   {/* removido mais serviços aqui */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Mais Serviços</BadgeMessage>
                                {/* <BadgeIcon icon="twemoji:waving-hand" /> */}
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Descubra Serviços Exclusivos para Transformar sua Beleza e Promover o seu Bem-Estar!!

                                
                            </PageTitle>

                           
                           
                            <Content className="text-center" alignment="center">
                                <p>
                                    Our comprehensive Notion template designed
                                    to empower you on your meal planning and
                                    nutrition journey. With our user-friendly
                                    features, customizable layouts, and seamless
                                    recipe integration, taking control of your
                                    meals has never been easier.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features4.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Customizable Layouts
                                        </CardHeader>
                                        <p>
                                            Personalize your meal planning
                                            experience with our flexible
                                            layouts. Tailor your sections,
                                            categories, and tabs to suit your
                                            unique style and organization
                                            preferences. Our template adapts to
                                            your needs, providing a seamless and
                                            personalized planning experience.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features3.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Progress Tracking
                                        </CardHeader>
                                        <p>
                                            Celebrate your wins and stay
                                            motivated on your nutrition journey.
                                            NutriTrack allows you to monitor
                                            your progress with weight,
                                            measurements, and other key metrics.
                                            Track your improvements over time
                                            and see the positive impact of your
                                            healthy choices.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Depoimentos</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="text-center mx-auto" type="default">
                                Depoimentos de Clientes: Experiências Transformadoras na EDaestética.
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Tem algumas dúvidas sobre o Estética?{" "}
                                <br></br>
                                {/* <br></br>No worries! We&apos;ve got the answers */}
                                {/* you need: */}
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
