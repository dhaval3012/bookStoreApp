import React, { useEffect, useState } from "react";
import Cards from "./Cards";
// import list from "../assets/list.json";
import axios from "axios";
import {Link} from "react-router-dom"
function Course() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data);
        setBook(res.data)
       
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Hear! :)</span>
          </h1>
          <p className="mt-12 ">
            “There are two motives for reading a book: one, that you enjoy it;
            the other, that you can boast about it.”—Bertrand
            Russell.......|||....... “Keep reading. It’s one of the most
            marvelous adventures that anyone can have.”—Lloyd
            Alexander.......||......."Books are the quietest and most constant
            of friends; they are the most accessible and wisest of counselors,
            and the most patient of teachers." – Charles W.
            Eliot.......||......."The only thing you absolutely have to know, is
            the location of the library." – Albert Einstein
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2  rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
