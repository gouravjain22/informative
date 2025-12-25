import { imagePath } from "../common/constant/imagespath";
export default function data({ title, description, img, ReadMore }) {
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${imagePath}${img}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description} </p>
              <a
                href={ReadMore}
                target="_blank"
                rel="noreferrer"
                className="link-secondary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
