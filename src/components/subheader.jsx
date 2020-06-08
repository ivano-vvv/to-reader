import React from 'react';
import CategoriesFilter from './subcomponents/categories-filter';
import './subcomponents/container.css'
import './subheader.css'
import TagRow from './subcomponents/tag-row';
import AddArticleButton from './subcomponents/add-article-button';

export default function Subheader(props) {
    return (
        <div className="subheader subheader-position container">
            <div className="subheader__filter-block">
                <CategoriesFilter />
                <TagRow />
            </div>
            <AddArticleButton />
        </div>
    )
}