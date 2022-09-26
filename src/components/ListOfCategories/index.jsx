import React from "react";
import { Category } from "@/components/Category";
import { List, Item } from "./styles";

import { categories as mockCategories } from "../../../api/db.json"


export const ListOfCategories = () => {
    const [categories, setCategories] = React.useState(mockCategories);
    const [showFixed, setShowFixed] = React.useState(false);

    const renderList = (fixed) => (
        <List fixed={fixed}>
        {
            categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
        }
        </List>
    )

    React.useEffect(() => {
        const onScroll = (e) => {
            const newShowFixed = window.scrollY > 200;
            newShowFixed !== showFixed && setShowFixed(newShowFixed);
        }
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll)
    })

    return(
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    )
}
