import { CategoriesClass } from "../models/CategoriesClass";

export const categoriesArray : CategoriesClass[] = [
    { id: 1, icon: "fa-solid fa-book", text: "Skönlitteratur", query:["Fiction"] },
    { id: 2, icon: "fa-solid fa-child-reaching", text: "Barn & ungdom", query: ["Juvenile Fiction"]},
    { id: 3, icon: "fa-solid fa-feather", text: "Lyrik", query: ["Poetry"] },
    { id: 4, icon: "fa-solid fa-magnifying-glass", text: "True crime", query:["True Crime"] },
    { id: 5, icon: "fa-solid fa-face-smile", text: "Biografier", query:["Biography & Autobiography"] },
    { id: 6, icon: "fa-solid fa-circle-question", text: "Fakta", query: ["Family & Relationship", "Gardening", "Law", "Political Science", "Pshycology"  ] },
  ];