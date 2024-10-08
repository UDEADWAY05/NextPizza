
import { FC } from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";

type Props = {
    className?: string;
}
export const Filters: FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" />
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>
        </div>
    );
}