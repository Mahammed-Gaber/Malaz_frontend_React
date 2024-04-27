import'./Congratulations.css'
function Congratulations() {

  return (
    <>
<section className="hero">
  <video
    className="hero__video"
    autoPlay
    loop
    muted
    crossOrigin="anonymous"
    playsInline
    preload="auto"
    style={{ objectFit: "cover" }}
  >
    <source src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high" />
  </video>

  <div className="hero__content">
    <h1 className="hero__title">Congratulations, Mahdy!
</h1>
    <p className="hero__text">
    From one host to another: Welcome. Thank you for sharing your home and helping give our guests amazing experiences.

    </p>
  </div>
</section>

</>
  )
}


export default Congratulations