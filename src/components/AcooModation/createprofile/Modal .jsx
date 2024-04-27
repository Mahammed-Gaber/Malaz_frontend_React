import React from 'react'

function Modal(props) {
  let {q1,q2,p}=props
  
  return (
    <div>
<>
  {/* Button trigger modal */}
  <div 
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    {q1}
  </div>
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header ">
          <h4 className="modal-title fw-bold" id="exampleModalLabel">
            {q2}
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
        <p>{p}</p>
        {/* input */}
        <div className="input-group mb-3">
  <input
    type="text"
    className="form-control"
    placeholder={q1}
    aria-label="Username"
    aria-describedby="basic-addon1"
  />
</div>

        {/*  input*/}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            save
          </button>
        </div>
      </div>
    </div>
  </div>
</>


    </div>
  )
}

export default Modal