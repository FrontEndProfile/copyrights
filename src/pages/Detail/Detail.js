import React from 'react'

import Header from '../../components/header/Header'
import Lines from '../../assets/images/circles.png'
import mdHeart from '../../assets/images/mdi_cards-heart.png'
import '../profile/profile.css'
import './Detail.css'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';





const Detail = () => {

  return (
    <>

      <section className='detailPageLast'>
        <div className='viewPage'>
          <Header />
          <div className='PageContainer'>
            <section className='HeroComponent dataPage patch'>
              <div className='heroLines viewPageBlur'>
                <img className='img-fluid mw-100' src={Lines} alt='' />
              </div>

              <div className='container-xl position-relative AgreementDetailFix detailPage'>
                <div className='row justify-content-between'>
                  <div className='col-md-5'>
                    <h5 className='detailPageHead'>Agreement detail</h5>

                  </div>


                </div>
                <div className="row justify-content-center formGap">
                  <div className="col-md-5 formMain">
                    <label for="one" className="form-label">Agreement name</label>
                    <input type="text" className="form-control bg-transparent shadow-none" id='one' placeholder="First name" />
                  </div>
                  <div className="col-md-5 offset-lg-1 formMain">
                    <label for="one" className="form-label">Agreement name</label>
                    <input type="text" className="form-control bg-transparent shadow-none" id='one' placeholder="First name" />
                  </div>
                </div>

                <div className="row justify-content-center formGap">
                  <div className="col-md-11 formMainTextArea">
                    <label for="one" className="form-label">Agreement name</label>
                    <textarea className="form-control bg-transparent shadow-none p-5" rows='7' id='one'></textarea>
                  </div>
                </div>

                <div className="row justify-content-center formGap">
                  <div className="col-md-9 formMainTextArea">

                    <div className='audioSection'>
                      <div className='container-fluid g-0'>
                        <div className='row align-items-center'>
                          <div className='col-8'><h1 className='text-white audioSectionTittle'>MD</h1>
                            <p className='audioSectionContent'>Baco Exu do Blues</p></div>
                          <div className='col-4 text-end'>
                            <img className='audioIcon' src={mdHeart} alt='' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <AudioPlayer
                      autoPlay
                      src="https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"
                      onPlay={e => console.log("onPlay")} showJumpControls={false} volume={0.0} loop={true} preload={'auto'} showSkipControls={true} showFilledVolume={true}
                      // other props here
                      className='text-white'
                    />

                  </div>
                </div>


              </div>

            </section>

          </div>
          <div className='container-fluid copyRightFooter '>
            <div className='row'>
              <div className='col-md-3 ms-auto justify-content-center'>
                <div className='d-flex justify-content-end flex-column align-content-center'>
                  <p>Account Created 2023</p>
                  <p>Copyright Agreements</p>
                  <p>New Copyright Agreements</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>

  )

}


export default Detail




