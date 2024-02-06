import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Limpeza de Pele",
        content:
            "Desperte a luminosidade natural da sua pele com os nossos serviços de limpeza facial. Na EDaestética, dedicamo-nos a proporcionar uma experiência única de cuidados com a pele. Nossa limpeza facial especializada remove suavemente impurezas, desobstrui os poros e revitaliza a pele, deixando-a radiante e renovada. Com produtos de alta qualidade e técnicas personalizadas, garantimos que sua pele receba o carinho que merece. Descubra a verdadeira beleza da sua pele conosco",
        align: "right",
        image: "/features1.jpeg"
    },
    {
        id: uuid(),
        title: "Lipoenzimática de Papada",
        content:
            "Descubra a revolucionária Lipoenzimática de Papada na EDaestética. Diga adeus ao desconforto e olá à definição da sua linha do maxilar. Nosso procedimento especializado utiliza enzimas potentes para dissolver suavemente as células de gordura, esculpindo uma silhueta mais elegante e rejuvenescida. Com uma abordagem personalizada, garantimos resultados notáveis, promovendo a autoconfiança e realçando a beleza natural do seu rosto. Transforme-se com a Lipoenzimática de Papada – a chave para uma aparência mais esculpida e contornada.",
        align: "left",
        image: "/features2.jpeg"        
    },
    {
        id: uuid(),
        title: "Botox",
        content:
            "Revele a sua juventude atemporal com o tratamento de Botox na EDaestética. Nossa abordagem personalizada combina a experiência de profissionais especializados com a mais avançada tecnologia em estética facial. O Botox é a solução eficaz para suavizar linhas de expressão e rugas, proporcionando um aspecto natural e rejuvenescido. Experimente a transformação sutil e elegante que o Botox oferece, realçando sua beleza única. No [Nome da Clínica], o seu brilho atemporal está ao alcance. Descubra a magia do rejuvenescimento facial com o Botox.",
        align: "right",
        image: "/features3.jpeg"        
    },
    {
        id: uuid(),
        title: "Lipoenzimática",
        content:
            "Na EDaestética, apresentamos a revolucionária Lipoenzimática, um tratamento sofisticado para esculpir o corpo dos seus sonhos. Combinando a precisão das enzimas e a expertise dos nossos profissionais, oferecemos uma abordagem personalizada para eliminar suavemente as áreas indesejadas de gordura. Experimente a transformação enquanto esculpimos contornos elegantes e promovemos uma silhueta mais definida. Na EDaestética, a excelência em cuidados estéticos encontra a inovação, proporcionando a você resultados notáveis e uma experiência única. Descubra a Lipoenzimática e transforme-se com a EDaestética.",
        align: "left",
        image: "/features4.jpeg"
    },
    {
        id: uuid(),
        title: "Secagem de Microvasos",
        content:
            "Na EDaestética, apresentamos um avançado tratamento de Secagem de Microvasos para promover uma pele visivelmente mais uniforme e radiante. Nossa abordagem especializada utiliza tecnologia de ponta para direcionar e tratar delicadamente os microvasos indesejados, revelando uma aparência mais clara e suave. Com a expertise dos nossos profissionais e a eficácia comprovada do procedimento, a EDaestética oferece uma solução personalizada para revitalizar a sua pele. Transforme sua jornada estética conosco e descubra uma pele radiante na EDaestética.",
        align: "right",
        image: "/features5.jpeg"        
    },
     {
        id: uuid(),
        title: "Drenagem Linfática",
        content:
            "Na EDaestética, apresentamos a Drenagem Linfática, uma experiência terapêutica projetada para revitalizar e desintoxicar o seu corpo. Com toques suaves e precisos, nossos profissionais especializados estimulam o sistema linfático, promovendo a eliminação de toxinas e reduzindo o inchaço. Em um ambiente relaxante, a Drenagem Linfática na EDaestética é mais do que um tratamento estético; é uma jornada de bem-estar. Descubra os benefícios transformadores da Drenagem Linfática e permita que a EDaestética cuide do seu corpo, elevando sua experiência estética a um nível superior.",
        align: "left",
        image: "/features6.jpeg"
    },
    {
        id: uuid(),
        title: "Harmonização Glútea",
        content:
            "Na EDaestética, apresentamos a inovadora Harmonização Glútea, um tratamento especializado para esculpir e realçar a beleza natural da região dos glúteos. Combinando técnicas avançadas e profissionais especializados, nosso procedimento personalizado visa proporcionar contornos mais definidos e uma aparência harmoniosa. Explore a oportunidade de transformar sua silhueta com a Harmonização Glútea na EDaestética, onde a excelência em cuidados estéticos encontra a arte da escultura corporal. Descubra uma abordagem única para realçar sua confiança e beleza. Sinta-se confiante, sinta-se esculpida. Descubra a Harmonização Glútea na EDaestética.",

        align: "right",
        image: "/features7.jpeg"
    },
     {
        id: uuid(),
        title: "Tratamentos Capilares",
        content:
            "Na EDaestética, oferecemos Tratamentos Capilares personalizados para revitalizar e restaurar a saúde dos seus cabelos. Nossos especialistas utilizam técnicas avançadas e produtos de alta qualidade para promover a hidratação, fortalecimento e brilho dos fios. Seja para combater a queda, controlar a oleosidade ou tratar danos causados por químicas, nosso objetivo é proporcionar resultados excepcionais que realcem sua beleza natural. Descubra o poder da transformação capilar na EDaestética e conquiste cabelos deslumbrantes e saudáveis.",
        align: "left",
        image: "/features8.jpeg"        
    },
    {
        id: uuid(),
        title: "Eletroterapia",
        content:
            "Na EDaestética, oferecemos tratamentos avançados de Eletroterapia para promover a beleza e o bem-estar. Nossos procedimentos são cuidadosamente projetados para proporcionar resultados eficazes e duradouros, utilizando tecnologia de ponta para tonificar a pele, reduzir medidas, combater a celulite e rejuvenescer a aparência. Combinando inovação e expertise, nosso objetivo é proporcionar uma experiência única e transformadora, elevando sua autoestima e promovendo uma sensação de bem-estar completo. Descubra os benefícios da eletroterapia na EDaestética e transforme-se em sua melhor versão.",

        align: "right",
        image: "/features9.jpeg"
    },
    {
        id: uuid(),
        title: "Ativador Metabólico",
        content:
            "Na EDaestética, apresentamos nosso inovador Ativador Metabólico, um tratamento especializado projetado para impulsionar seu metabolismo e potencializar seus resultados estéticos. Utilizando uma combinação de técnicas avançadas e tecnologia de ponta, nosso programa de Ativador Metabólico é personalizado para atender às suas necessidades específicas, promovendo a queima de gordura, o aumento da energia e a melhoria da saúde geral. Transforme seu corpo e sua vida com o poder do metabolismo otimizado. Descubra uma nova maneira de alcançar seus objetivos estéticos na EDaestética.",
        align: "left",
        image: "/features10.jpeg"  
    },
    {
        id: uuid(),
        title: "Moderadores de Apetite",
        content:
            "Na EDaestética, apresentamos nossos eficazes Moderadores de Apetite, uma solução personalizada para auxiliar no controle do peso e na promoção de hábitos alimentares saudáveis. Desenvolvidos por profissionais especializados, nossos moderadores de apetite são formulados com ingredientes naturais e seguros, ajudando a reduzir a fome excessiva, os desejos por alimentos e os comportamentos compulsivos relacionados à alimentação. Com uma abordagem holística e foco no bem-estar, nossos moderadores de apetite são uma ferramenta valiosa para alcançar e manter o peso desejado de forma equilibrada e sustentável. Descubra como os moderadores de apetite da EDaestética podem transformar sua jornada rumo a uma vida mais saudável e feliz.",

        align: "right",
        image: "/features11.jpeg"
    },
    {
        id: uuid(),
        title: "BCAAs",
        content:
            "Descubra na EDaestética os benefícios dos BCAAs, aminoácidos essenciais que potencializam seus resultados de treino e recuperação muscular. Nossos BCAAs são formulados com alta qualidade, proporcionando suporte para o crescimento muscular, aumento da resistência e redução da fadiga durante os exercícios. Combinados com um programa de treinamento adequado, os BCAAs da EDaestética são essenciais para alcançar seus objetivos fitness e melhorar seu desempenho atlético. Transforme seu corpo e otimize seus resultados com os BCAAs da EDaestética.",
        align: "left",
        image: "/features12.jpeg"  
    },

];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
