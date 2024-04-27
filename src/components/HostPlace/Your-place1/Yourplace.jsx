import React, { useState } from "react";
import "./Yourplace.css";
import { useDispatch, useSelector } from "react-redux";
import { IncrementCounter } from "../../../Redux/slices/placeSlice";


function Yourplace({ form, setForm}) {

// const [placeImage, setPlaceImage] = useState([])


  const handleImageChange = (event) => {
    const files = event.target.files;
    const formData = new FormData();
  // console.log(files);
    // for (let i = 0; i < files.length; i++) {
      // formData.append('pictures_url', files);
    // }
    files.forEach((file)=> {
      formData.append('pictures_url', file);
    })
    // setPlaceImage(files)
    setForm({...form, pictures_url : files})
    // console.log(form);
  };

  const handleCoverImage = (event) => {
    const file = event.target.files[0];
    // const formData = new FormData();
    // formData.append('imageCover', file);
  
    setForm({...form, imageCover : file})
  };
console.log(form);

  return (
    <>
      <section className="hero" style={{ overflow: "scroll" }}>
        <div className="container hero__content">
          <h1 className="hero__title">Tell us about your residence</h1>
          <p className="hero__text">
            At this point, we will ask you what type of property you have and
            whether guests will be booking the entire listing or just a room.
            Next, you will tell us the location and the number of guests that
            can be received.
          </p>
          <div className="tab-content pt-3">
            <div className="tab-pane active">
              <form className="form" noValidate="">
                {/* Image */}
                <div className="row">
                  {/* <div className="col-12 col-sm-6 mb-3"> */}
                  <div className="row">
                    <div className="mb-2">
                      <b>Image Place</b>
                    </div>
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

                      {/* {form && (
                        <div>
                          <p>Uploaded images:</p>
                          <div className="col-sm-12">
                            {form..map((name, index) => (
                              <img
                                key={index}
                                src={form.pictures_url[index]}
                                alt="img :("
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  marginRight: "10px",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )} */}

                    </div>
                  </div>
                </div>

                {/* <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                <div className="mb-2">
                                  <b>Keeping in Touch</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <label>Email Notifications</label>
                                    <div className="custom-controls-stacked px-2">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-blog"
                                          defaultChecked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-blog"
                                        >
                                          Blog posts
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-news"
                                          defaultChecked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-news"
                                        >
                                          Newsletter
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-offers"
                                          defaultChecked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-offers"
                                        >
                                          Personal Offers
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container" style={{overflow: 'scroll', border: '2px solid red'}}>
        <div className="row flex-lg-nowrap">
          <div className="col">
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="e-profile">
                      <div className="row">
                        <div className="col-12 col-sm-auto mb-3">
                          <div className="mx-auto" style={{ width: 140 }}>
                            <div
                              className="d-flex justify-content-center align-items-center rounded"
                              style={{
                                height: 140,
                                backgroundColor: "rgb(233, 236, 239)",
                              }}
                            >
                              <img
                                style={{
                                  color: "rgb(166, 168, 170)",
                                  font: "bold 8pt Arial",
                                }}

                              />
                                140x140
                            </div>
                          </div>
                        </div>
                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                              John Smith
                            </h4>
                            <p className="mb-0">@johnny.s</p>
                            <div className="text-muted">
                              <small>Last seen 2 hours ago</small>
                            </div>
                            <div className="mt-2">
                              <input className="btn btn-primary w-75" type="file"
                              onChange={(event)=> setForm({...form, imageCover : event.target.value})}/>
                                <i className="fa fa-fw fa-camera" />
                                <span>Change Photo</span>
                            </div>
                          </div>
                          <div className="text-center text-sm-right">
                            <span className="badge badge-secondary">
                              administrator
                            </span>
                            <div className="text-muted">
                              <small>Joined 09 Dec 2017</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a href="" className="active nav-link">
                            Settings
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content pt-3">
                        <div className="tab-pane active">
                          <form className="form" noValidate="">
                            <div className="row">
                              <div className="col">
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Full Name</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="John Smith"
                                        defaultValue="John Smith"
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Username</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="username"
                                        placeholder="johnny.s"
                                        defaultValue="johnny.s"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="user@example.com"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col mb-3">
                                    <div className="form-group">
                                      <label>About</label>
                                      <textarea
                                        className="form-control"
                                        rows={5}
                                        placeholder="My Bio"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-sm-6 mb-3">
                                <div className="mb-2">
                                  <b>Change Password</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Current Password</label>
                                      <input
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>New Password</label>
                                      <input
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>
                                        Confirm{" "}
                                        <span className="d-none d-xl-inline">
                                          Password
                                        </span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                <div className="mb-2">
                                  <b>Keeping in Touch</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <label>Email Notifications</label>
                                    <div className="custom-controls-stacked px-2">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-blog"
                                          defaultChecked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-blog"
                                        >
                                          Blog posts
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-news"
                                          defaultChecked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-news"
                                        >
                                          Newsletter
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-offers"
                                          defaultChecked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-offers"
                                        >
                                          Personal Offers
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col d-flex justify-content-end">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default React.memo(Yourplace);
