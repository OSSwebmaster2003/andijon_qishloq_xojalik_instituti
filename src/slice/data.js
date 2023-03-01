import { createSlice } from "@reduxjs/toolkit";
import timetable from "../assets/icons/timetable.svg";
import roomOrdering from "../assets/icons/roomOrdering.svg";
import houseRenting from "../assets/icons/houseRenting.svg";
import vacancy from "../assets/icons/vacancy.svg";
import canteen from "../assets/icons/canteen.svg";
import freeCourse from "../assets/icons/freeCourse.svg";
import library from "../assets/icons/library.svg";
import aboutInstitute from "../assets/icons/aboutInstitute.svg";
import student from "../assets/icons/student.svg";
import cover1 from "../assets/books/cover1.svg";
import cover2 from "../assets/books/cover2.svg";
import cover3 from "../assets/books/cover3.svg";
import cover4 from "../assets/books/cover4.svg";
import cover5 from "../assets/books/cover5.svg";
import cover6 from "../assets/books/cover6.svg";
import cover7 from "../assets/books/cover7.svg";

const initialState = {
  departments: [
    {
      id: 1,
      title: "Dars jadvali",
      body: "Joriy yildagi barcha kurslar uchun darslar jadvali",
      link: "/timetable",
      img: timetable,
    },
    {
      id: 2,
      title: "Xonalar joylashuvi",
      body: "O’quv bo’limlari va ma’muriy bo’lim xodimlarining xonalari joylashuvi",
      link: "/room_ordering",
      img: roomOrdering,
    },
    {
      id: 3,
      title: "Ijaraga uylar",
      body: "Ijara uchun yaqn atrofdagi yoki arzon narxdagi uylar ro’yxati",
      link: "/house_renting",
      img: houseRenting,
    },
    {
      id: 4,
      title: "Bo’sh ish o’rinlari",
      body: "Institutdagi va hamkor tashkilotlardagi maavjud ish vakansiyalari",
      link: "/vacancies",
      img: vacancy,
    },
    {
      id: 5,
      title: "Oshxona va kafelar",
      body: "Atrofdagi arzon oshxona va kafelarning joylashuvi va narxlari",
      link: "/canteens_and_cafes",
      img: canteen,
    },
    {
      id: 6,
      title: "To’garaklar ro’yxati",
      body: "Institutdagi bepul va pullik to’garaklarning ro’yxati",
      link: "/free_courses",
      img: freeCourse,
    },
    {
      id: 7,
      title: "Kutubxona",
      body: "O’quv qollanmalari, darsliklar va badiiy adibiyotlar jamlanmasi",
      link: "/library",
      img: library,
    },
    {
      id: 8,
      title: "Institut haqida",
      body: "Institut tarixi, web sahifalari, va ma’muriy xodimlari haqida ma’lumot",
      link: "/about_institute",
      img: aboutInstitute,
    },
    {
      id: 9,
      title: "Iqtidorli talabalar",
      body: "Institutdagi faol, iqtidorli va bilimdon talabalarni sarab bo’limi",
      link: "/best_students",
      img: student,
    },
  ],
  most_read_books: [
    {
      id: 1,
      cover: cover1,
      info: "first book",
    },
    {
      id: 2,
      cover: cover2,
      info: "second book",
    },
    {
      id: 3,
      cover: cover3,
      info: "third book",
    },
    {
      id: 4,
      cover: cover4,
      info: "fourth book",
    },
    {
      id: 5,
      cover: cover5,
      info: "fifth book",
    },
    {
      id: 6,
      cover: cover6,
      info: "sixth book",
    },
    {
      id: 7,
      cover: cover7,
      info: "seventh book",
    },
    {
      id: 8,
      cover: cover1,
      info: "eighth book",
    },
  ],
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {},
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
