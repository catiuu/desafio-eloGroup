import "./style.css";
import resumeIcon from "../../assets/resume.svg";
// import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";

export function Lead({ name }) {
  return (
    <div className="lead">
      <p>{name}</p>
      <img src={resumeIcon} alt="edição de lead" />
      {/* <img src={editIcon} alt="edição de lead" /> */}
      <img src={deleteIcon} alt="edição de lead" />
    </div>
  );
}
