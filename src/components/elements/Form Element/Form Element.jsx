// import { useForm } from 'react-hook-form'
import './Form Element.css'

function FormElement() {


    const form = useForm();
    // console.log(form);
     const { register, handleSubmit, formState, getValues } = form;
       function onSubmit(values) {
        // axios({
        //     method: "post",
        //     url: "myurl",
        //     data: bodyFormData,
        //     headers: { "Content-Type": "multipart/form-data" },
        //   })
        localStorage.setItem('token', "true");
        if (loc.state) {
            nav(loc.state);
        }
        else
            nav('/Home');

    }

    return (
        <>
            <div className="section-top-border">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <h3 className="mb-30 title_color">Form Element</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-10">
                                <input type="text" name="first_name" placeholder="First Name" />
                            </div>

                            
                            <div className="mt-10">
                                <input type="text" name="last_name" placeholder="Last Name" />
                            </div>


                            <div className="mt-10">
                                <input type="text" name="last_name" placeholder="Last Name" />
                            </div>


                            <div className="mt-10">
                                {/* ////////////////////////////email////////////////////// */}
                            {...register('email', {
                            required: {
                                value: true,
                                message: "must enter data in email"
                            },
                        })}
                                <input type="email" name="EMAIL" placeholder="Email address" />
                            </div>


                            <div className="input-group-icon mt-10">
                                <div className="icon"><i className="fa fa-thumb-tack" aria-hidden="true"></i></div>
                                <input type="text" name="address" placeholder="Address" />
                            </div>


                            <div className="input-group-icon mt-10">
                                <div className="icon"><i className="fa fa-plane" aria-hidden="true"></i></div>
                                <div className="form-select" id="default-select">
                                    <select>
                                        <option value="1">City</option>
                                        <option value="1">Dhaka</option>
                                        <option value="1">Dilli</option>
                                        <option value="1">Newyork</option>
                                        <option value="1">Islamabad</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-group-icon mt-10">
                                <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
                                <div className="form-select" id="default-select2">
                                    <select>
                                        <option value="1">Country</option>
                                        <option value="1">Bangladesh</option>
                                        <option value="1">India</option>
                                        <option value="1">England</option>
                                        <option value="1">Srilanka</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-10">
                                <textarea className="single-textarea" placeholder="Message" ></textarea>
                            </div>

                            <div className="mt-10">
                                <input type="text" name="first_name" placeholder="Primary color" />
                            </div>

                            <div className="mt-10">
                                <input type="text" name="first_name" placeholder="Accent color" />
                            </div>

                            <div className="mt-10">
                                <input type="text" name="first_name" placeholder="Secondary color" />
                          
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-sm-30 element-wrap">
                        <div className="single-element-widget">
                            <h3 className="mb-30 title_color">Switches</h3>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>01. Sample Switch</p>
                                <div className="primary-switch">
                                    <input type="checkbox" id="default-switch" />
                                    <label htmlFor="default-switch"></label>
                                </div>
                            </div>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>02. Primary Color Switch</p>
                                <div className="primary-switch">
                                    <input type="checkbox" id="primary-switch" defaultChecked />
                                    <label htmlFor="primary-switch"></label>
                                </div>
                            </div>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>03. Confirm Color Switch</p>
                                <div className="confirm-switch">
                                    <input type="checkbox" id="confirm-switch" defaultChecked />
                                    <label htmlFor="confirm-switch"></label>
                                </div>
                            </div>
                        </div>
                        <div className="single-element-widget">
                            <h3 className="mb-30 title_color">Selectboxes</h3>
                            <div className="default-select" id="default-select">
                                <select>
                                    <option value="1">English</option>
                                    <option value="1">Spanish</option>
                                    <option value="1">Arabic</option>
                                    <option value="1">Portuguise</option>
                                    <option value="1">Bengali</option>
                                </select>
                            </div>
                        </div>
                        <div className="single-element-widget">
                            <h3 className="mb-30 title_color">Checkboxes</h3>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>01. Sample Checkbox</p>
                                <div className="primary-checkbox">
                                    <input type="checkbox" id="default-checkbox" />
                                    <label htmlFor="default-checkbox"></label>
                                </div>
                            </div>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>02. Primary Color Checkbox</p>
                                <div className="primary-checkbox">
                                    <input type="checkbox" id="primary-checkbox" defaultChecked />
                                    <label htmlFor="primary-checkbox"></label>
                                </div>
                            </div>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>03. Confirm Color Checkbox</p>
                                <div className="confirm-checkbox">
                                    <input type="checkbox" id="confirm-checkbox" />
                                    <label htmlFor="confirm-checkbox"></label>
                                </div>
                            </div>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>04. Disabled Checkbox</p>
                                <div className="disabled-checkbox">
                                    <input type="checkbox" id="disabled-checkbox" disabled />
                                    <label htmlFor="disabled-checkbox"></label>
                                </div>
                            </div>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>05. Disabled Checkbox active</p>
                                <div className="disabled-checkbox">
                                    <input type="checkbox" id="disabled-checkbox-active" defaultChecked disabled />
                                    <label htmlFor="disabled-checkbox-active"></label>
                                </div>
                            </div>
                        </div>
                        <div className="single-element-widget">
                            <h3 className="mb-30 title_color">Radios</h3>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>01. Sample radio</p>
                                <div className="primary-radio">
                                    <input type="checkbox" id="default-radio" />
                                    <label htmlFor="default-radio"></label>
                                </div>
                            </div>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>02. Primary Color radio</p>
                                <div className="primary-radio">
                                    <input type="checkbox" id="primary-radio" defaultChecked />
                                    <label htmlFor="primary-radio"></label>
                                </div>
                            </div>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>03. Confirm Color radio</p>
                                <div className="confirm-radio">
                                    <input type="checkbox" id="confirm-radio" defaultChecked />
                                    <label htmlFor="confirm-radio"></label>
                                </div>
                            </div>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>04. Disabled radio</p>
                                <div className="disabled-radio">
                                    <input type="checkbox" id="disabled-radio" disabled />
                                    <label htmlFor="disabled-radio"></label>
                                </div>
                            </div>
                            <div className="switch-wrap d-flex justify-content-between">
                                <p>05. Disabled radio active</p>
                                <div className="disabled-radio">
                                    <input type="checkbox" id="disabled-radio-active" defaultChecked disabled />
                                    <label htmlFor="disabled-radio-active"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FormElement