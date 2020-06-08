import React from 'react';
import Content from '../display/content';
import { useSelector } from 'react-redux';

export default function ContentContainer(props) {
    const articlesPack = useSelector( state => state.articlesPack )

    return (
        <Content articlesPack={articlesPack} />
    )
}