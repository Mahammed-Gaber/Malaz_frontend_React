


function placeCard({place}) {
    
    return (
        <>
            <section className='accomodation_area section_gap'>
                <div className='container'>
                    <div className='row mb_30'>
                        <div key={place._id} className='col-lg-3 col-sm-6'>
                            <div className='accomodation_item text-center'>
                                <div className='hotel_img'>
                                    <img src={place.imageCover} alt='' />
                                    <button className='btn theme_btn button_hover' onClick={() => navigate("/Mydeatails")}>
                                        Deatails
                                    </button>
                                </div>
                                <a href='#'>
                                    <h4 className='sec_h4'>{place.place_name}</h4>
                                </a>
                                <h5>
                                    ${place.price}
                                    {/* <small>/{place.host_id}</small> */}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default placeCard