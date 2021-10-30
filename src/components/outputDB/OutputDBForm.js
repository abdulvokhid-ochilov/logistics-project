const OutputDBForm = () => {
  return (
    <div className="search-cont">
      <div className="search-cel">
        <label className="label" for="date">
          전송일자
        </label>
        <input id="date" name="from" type="date" placeholder="yyyy-mm-dd" />
        <span> ~ </span>
        <input id="date" name="to" type="date" placeholder="yyyy-mm-dd" />
      </div>
      <div className="search-cel_add"></div>
      <div className="search-cel">
        <label className="label" for="name">
          성함
        </label>
        <input id="name" name="name" type="text " placeholder="성함" />
      </div>
      <div className="search-cel">
        <label className="label" for="contact">
          연락처
        </label>
        <input id="contact" type="text" name="contact" placeholder="연락처" />
      </div>
      <div className="search-cel">
        <label className="label" for="car_number">
          차량번호
        </label>
        <input
          type="text"
          id="car_number"
          name="car_number"
          placeholder="차량번호"
        />
        <button
          className="search-btn"
          name="search"
          value="search"
          type="submit"
        >
          조회
        </button>
      </div>
    </div>
  );
};

export default OutputDBForm;
