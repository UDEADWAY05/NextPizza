import { Categories, Container, SortPopup, Title, TopBar } from "@/components/shared";
import { Filters } from "@/components/shared";
import { Button } from "@/components/ui";

//1:07:45

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="pb-14">
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            Список товаров
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}