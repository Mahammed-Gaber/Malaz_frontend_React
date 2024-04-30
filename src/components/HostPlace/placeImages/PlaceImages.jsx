
function PlaceImages({ form, setForm }) {

  const handleImageChange = (event) => {
    const files = event.target.files;
    setForm({ ...form, pictures_url: files });
  };

  const handleCoverImage = (event) => {
    const file = event.target.files[0];
    setForm({ ...form, imageCover: file });
  };

  return (
    <section className="hero" style={{alignContent: 'center'}}>
      <div className="container hero__content">
      <h1 className="hero__title">Upload Your Place Images</h1>
        {/* <div className="tab-content pt-3"> */}
          <div className="tab-pane active">
            <form className="form" noValidate="">
              {/* Image */}
              <div className="row">
                {/* <div className="col-12 col-sm-6 mb-3"> */}
                <div className="row">
                  {/* <div className="mb-2">
                    <b>Image Place</b>
                  </div> */}
                  <div>
                    <div>
                      <div className="col-sm-6 form-group">
                        <label>Upload your Cover Image</label>
                        <input
                          className="form-control"
                          type="file"
                          onChange={handleCoverImage}
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 form-group">
                      <label>Upload All Ur Image for Place</label>
                      <input
                        className="form-control"
                        type="file"
                        multiple
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default PlaceImages;
