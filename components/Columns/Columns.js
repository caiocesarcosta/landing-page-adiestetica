import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Clara Mendes",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Estou absolutamente encantada com os resultados dos tratamentos na EDaestética! Minha pele está mais radiante do que nunca, e a equipe foi incrível em me orientar sobre os cuidados adequados. Mal posso esperar para voltar!"
    },
    {
        id: uuid(),
        title: "Pedro Oliveira",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Desde que comecei os tratamentos na EDaestética, minha autoestima deu um salto! A redução das rugas e a melhoria da textura da minha pele foram além das minhas expectativas. Recomendo a todos!"
    },
    {
        id: uuid(),
        title: "Ana Silva",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Estou simplesmente maravilhada com o atendimento da EDaestética. Os profissionais são extremamente atenciosos e competentes. Meu corpo está se transformando de uma maneira que eu nunca pensei ser possível. Muito obrigada!"
    },
    {
        id: uuid(),
        title: "Juliana Santos",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Minha experiência na EDaestética foi simplesmente excepcional. Os resultados dos tratamentos superaram todas as minhas expectativas. Estou radiante e me sentindo mais bonita do que nunca. Recomendo a todos que buscam cuidados estéticos de alta qualidade!"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
