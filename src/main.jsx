import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "../Components/Header";
import Entry from "../Components/Entry";
import data from "./data";
const dataElements = data.map((entry) => (
  <Entry
    key={entry.id}
    // entry={entry} --> props.entry.<properties> to be used in Entry.jsx
    {...entry} //Spreading objects as props
  />
));
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <main className="container">{dataElements}</main>
  </>
);