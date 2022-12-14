import { FcPaid, FcDeleteDatabase } from "react-icons/fc";
export default function Error() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ width: "100%", height: "400px" }}
    >
      <div className="d-flex flex-column justify-content-center">
        {/* <img
          height="300px"
          src={
            "https://res.cloudinary.com/dxir7knlo/image/upload/v1669217670/success_loynmh.png"
          }
        /> */}
        <FcDeleteDatabase size={228} />
        {/* <h1>Welcome Abroad</h1> */}
      </div>
      <div className="d-flex flex-column justify-items-center">
        <span>
          {" "}
          <span
            style={{
              color: "tomato",
              position: "relative",
              top: "4px",
            }}
          >
            Some error happened!
          </span>
          &nbsp;
        </span>
        <br />
        <button className="btn btn-warning ml-3">Go to dashboard</button>
      </div>
    </div>
  );
}
