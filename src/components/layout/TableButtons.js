const TableButtons = () => {
  return (
    <div className="footer-btns footer">
      <button type=" submit" className="blue-btn" name="sbm" value="qr">
        QR만들기
      </button>
      <button type="submit" className="blue-btn" name="sbm" value="save">
        저장
      </button>
      <button type="submit" className="grey-btn" name="sbm" value="print">
        출고증인쇄
      </button>
    </div>
  );
};

export default TableButtons;
