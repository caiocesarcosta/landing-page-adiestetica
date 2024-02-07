import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "O que é estética?",
        isOpen: true,
        content:
            "A estética é um campo que engloba cuidados com a aparência física, visando aprimorar a beleza e promover o bem-estar. Envolve uma variedade de procedimentos e práticas para cuidar da pele, cabelos, unhas e corpo. Além de focar na melhoria da aparência, a estética também está associada à autoestima e ao bem-estar emocional, proporcionando uma sensação de confiança e satisfação pessoal."
    },
    {
        id: uuid(),
        title: "Quais são seus benefícios?",
        isOpen: false,
        content:
            "A estética oferece uma série de benefícios, incluindo melhora da autoestima, sensação de bem-estar, rejuvenescimento da pele, correção de imperfeições, melhor saúde da pele, expressão individual e relaxamento. Além de promover uma aparência física mais atraente, os cuidados estéticos também contribuem para a saúde mental, emocional e o bem-estar geral."
    },
    {
        id: uuid(),
        title: "Demora para ter resultados?",
        isOpen: false,
        content: "A rapidez dos resultados na estética pode variar significativamente dependendo do tipo de tratamento realizado, das necessidades individuais do paciente e de outros fatores, como a consistência na aplicação dos cuidados recomendados. Alguns tratamentos estéticos, como uma limpeza facial básica, podem apresentar resultados imediatos, enquanto outros, como a redução de rugas ou a perda de peso, podem exigir várias sessões ao longo do tempo para alcançar os resultados desejados. É importante discutir as expectativas de tempo e os resultados esperados com um profissional qualificado para obter uma compreensão clara dos resultados e do cronograma do tratamento."
    },
    {
        id: uuid(),
        title: "É recomendável passar em um nutricionista para maxizar os resutados?",
        isOpen: false,
        content:
            "Sim, é altamente recomendável consultar um nutricionista para maximizar os resultados em muitos tratamentos estéticos, especialmente aqueles relacionados à perda de peso, melhoria da saúde da pele e promoção de uma aparência geral mais saudável. Um nutricionista pode oferecer orientações personalizadas sobre dieta, nutrição e estilo de vida que podem complementar os tratamentos estéticos, otimizando os resultados e promovendo uma abordagem holística para a saúde e o bem-estar. Além disso, um nutricionista pode ajudar a identificar quaisquer deficiências nutricionais ou desequilíbrios que possam estar afetando a saúde da pele, o peso corporal ou outros aspectos da aparência física, fornecendo recomendações específicas para abordar essas preocupações. Em resumo, a colaboração entre profissionais de estética e nutrição pode ser altamente benéfica para alcançar os melhores resultados estéticos e de saúde possíveis."
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
