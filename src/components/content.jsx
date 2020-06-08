import React from "react";
import "./content.css";
import "./subcomponents/container.css";
import ArticleCard from "./subcomponents/article-card";
import Masonry from "react-masonry-css";

export default function Content(props) {
  const articles = [
    {
      id: 1,
      title:
        "3 Hobbies That Can Improve Your Memory And Maintain a Healthy Brain",
      desc:
        "Описание, раскрывающее суть статьи, длиной в пределах 280 символов, прям как в твиттере. Описание, раскрывающее суть статьи, длиной в пределах 280 символов, прям как в твиттере. Конкретно это — случайная статья с Медиума. Описание содержит 255 символов.",
      link:
        "https://medium.com/kaizen-habits/3-hobbies-that-can-improve-your-memory-and-maintain-a-healthy-brain-b42ae7b8606e",
      cover: "https://miro.medium.com/max/1400/1*tt3GG0XKcbFNJLCWzQX4qw.png",
    },
    {
      id: 2,
      title:
        "Not Just for the French— How Designers Reflected the Sensibilities of 60s Cinema",
      desc:
        "Статья, которую увидел случайно во время создания это макета, и которая меня заинтересовала.",
      link:
        "https://medium.com/aiga-eye-on-design/not-just-for-the-french-why-so-many-graphic-designers-took-the-60s-new-wave-vibe-and-ran-with-it-610bacdcd24b",
      cover: "https://miro.medium.com/max/2400/0*TpCwLzGxH7IVMG1r.jpg",
    },
    {
      id: 3,
      title:
        "Депрессии, психозы и паранойя. Безумные случаи из практики судебного психиатра",
      desc:
        "Статья, которую увидел случайно во время создания это макета, и которая меня заинтересовала.",
      link:
        "https://discours.io/articles/social/depressii-psihozy-i-paranoyya-bezumnye-sluchai-iz-praktiki-i-emigratsii-byvshego-sudebnogo-psihiatra",
      cover:
        "https://assets.discours.io/unsafe/900x/production/image/df87c950-9921-11ea-a536-a164070c39ea.jpg",
    },
    {
      id: 4,
      title: "«Долой 230!»: что Трамп собирается делать с соцсетями",
      desc:
        "Еще одна статья и серии «увидел и заинтересовался». Лежит в сохраненках телеги, надо бы не забыть о ней",
      link:
        "https://profile.ru/abroad/doloj-230-chto-tramp-sobiraetsya-delat-s-socsetyami-329439/",
      cover:
        "https://profile.ru/wp-content/uploads/2020/06/TASS_39965871-782x440.jpg",
    },
    {
      id: 5,
      title: "Над Figma работают 110 человек, а основной конкурент — Adobe",
      desc:
        "Пример статьи без фотографии. Она там есть, конечно, но для примера убрал. Кстати, надо бы почитать.",
      link:
        "https://vc.ru/uchi.ru/104456-nad-figma-rabotayut-110-chelovek-a-osnovnoy-konkurent-ne-sketch-a-adobe",
      cover: null,
    },
  ];

  return (
    <div className="content container">
      <Masonry
      breakpointCols={3}
      className='articles-masonry-grid'
      columnClassName='articles-masonry-grid__column'
      >
        {articles.map((a) => {
          return (
            <ArticleCard
              title={a.title}
              desc={a.desc}
              link={a.link}
              cover={a.cover}
            />
          );
        })}
      </Masonry>
    </div>
  );
}
