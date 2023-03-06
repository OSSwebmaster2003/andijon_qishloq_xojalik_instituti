import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";
import Heading from "../../components/Header/Heading";
import BookCard from "../../components/BookCard/BookCard";
import "./books.scss";

function Books(props) {
  const { books } = useSelector((state) => state.data);
  const [lessons, setLessons] = useState(false);
  const [artistic, setArtistic] = useState(false);
  const [studyGuide, setStudyGiude] = useState(false);
  return (
    <div className="books_page">
      <div className="books_wrapper">
        <div className="lesson_books all_books">
          <div className="lessons_header all_books_header">
            <Heading title="Darsliklar" />
            <h3 onClick={() => setLessons((prev) => !prev)}>
              {lessons ? "Kamroq" : "Ko'proq"} <AiOutlineRight />
            </h3>
          </div>
          <div className="lessons_body all_books_body">
            {lessons
              ? books
                  .filter((item) => item.category === "darsliklar")
                  .map((item) => (
                    <BookCard
                      key={item.id}
                      img={item.cover}
                      title={item.name}
                      author={item.author}
                    />
                  ))
              : books
                  .filter((item) => item.category === "darsliklar")
                  .slice(0, 5)
                  .map((item) => (
                    <BookCard
                      key={item.id}
                      img={item.cover}
                      title={item.name}
                      author={item.author}
                    />
                  ))}
          </div>
        </div>
        <div className="artistic_books all_books">
          <div className="artistic_header all_books_header">
            <Heading title="Badiy Kitoblar" />
            <h3 onClick={() => setArtistic((prev) => !prev)}>
              {artistic ? "Kamroq" : "Ko'proq"} <AiOutlineRight />
            </h3>
          </div>
          <div className="artistic_body all_books_body">
            {artistic
              ? books
                  .filter((item) => item.category === "badiy kitoblar")
                  .map((item) => (
                    <BookCard
                      key={item.id}
                      img={item.cover}
                      title={item.name}
                      author={item.author}
                    />
                  ))
              : books
                  .filter((item) => item.category === "badiy kitoblar")
                  .slice(0, 5)
                  .map((item) => (
                    <BookCard
                      key={item.id}
                      img={item.cover}
                      title={item.name}
                      author={item.author}
                    />
                  ))}
          </div>
        </div>
        <div className="guideline_books all_books">
          <div className="guideline_header all_books_header">
            <Heading title="Oquv Qollanmalari" />
            <h3 onClick={() => setStudyGiude((prev) => !prev)}>
              {studyGuide ? "Kamroq" : "Ko'proq"} <AiOutlineRight />
            </h3>
          </div>
          <div className="guideline_body all_books_body">
            {studyGuide
              ? books
                  .filter((item) => item.category === "oquv qollanmalari")
                  .map((item) => (
                    <BookCard
                      key={item.id}
                      img={item.cover}
                      title={item.name}
                      author={item.author}
                    />
                  ))
              : books
                  .filter((item) => item.category === "oquv qollanmalari")
                  .slice(0, 5)
                  .map((item) => (
                    <BookCard
                      key={item.id}
                      img={item.cover}
                      title={item.name}
                      author={item.author}
                    />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
