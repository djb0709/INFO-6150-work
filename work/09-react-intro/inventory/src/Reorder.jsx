import "./reorder.css";

function Reorder({ onReorder }) {
  return (
    <>
      <button className="fade-in order-btn" onClick={onReorder}>
        Reorder
      </button>
    </>
  );
}
export default Reorder;
