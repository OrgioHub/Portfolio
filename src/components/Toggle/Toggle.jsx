export const Toggle = ({ handleCheck, isCheck }) => {
  return (
    <div className="hidden absolute">
      <input
        type="checkbox"
        id="check"
        onChange={handleCheck}
        checked={isCheck}
      />
    </div>
  );
};
