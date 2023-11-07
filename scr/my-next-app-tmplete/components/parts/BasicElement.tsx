interface propsButton {
  text: string;
  templete: string;
}

export const BasicButton = ({ text, templete }: propsButton) => {
  return (
    <div>
      <button
        type="button"
        className={`btn-basic ${templete === "primary" ? "btn-primary" : ""}`}
        // className={`btn-basic` + (templete === "primary") ? "" : ""}
      >
        {text}
      </button>
    </div>
  );
};
