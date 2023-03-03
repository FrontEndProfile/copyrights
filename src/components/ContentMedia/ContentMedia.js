import React from 'react'
import MediaOne from '../../assets/images/MediaOne.png'


const ContentMedia = () => {
    return (
        <>
            <section className='ContentMedia'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className='ContentMediaHeadTitle'>Check out what's
                                cool<br />about us!
                            </h1>
                            <p className='ContentMediaHeadContent'>
                                We understand that as a creator, your intellectual property is incredibly <br /> valuable, and it's important to ensure that it remains safe and secure.
                            </p>
                        </div>
                    </div>

                    <div className='row align-items-center ContentMediaRow'>
                        <div className='col-md-7'>
                            <h3 className='ContentMediaTitle'>Connect with a loyal audience</h3>
                            <p className='ContentMediaContent'>Your current customer base connects you to their friends, <br/>
                                with whom they share purchasing power and purchasing<br/>
                                behavior. We leverage existing relationships to create an<br/>
                                emotional experience.
                            </p>
                        </div>
                        <div className='col-md-5'>
                            <img className='w-100 ContentMediaImage' src={MediaOne} alt='MediaOne' />
                        </div>
                    </div>
                    <div className='row align-items-center ContentMediaRow'>
                        <div className='col-md-7'>
                            <h3 className='ContentMediaTitle'>Connect with a loyal audience</h3>
                            <p className='ContentMediaContent'>Your current customer base connects you to their friends, <br/>
                                with whom they share purchasing power and purchasing<br/>
                                behavior. We leverage existing relationships to create an<br/>
                                emotional experience.
                            </p>
                        </div>
                        <div className='col-md-5'>
                            <img className='w-100 ContentMediaImage' src={MediaOne} alt='MediaOne' />
                        </div>
                    </div>
                    <div className='row align-items-center ContentMediaRow'>
                        <div className='col-md-7'>
                            <h3 className='ContentMediaTitle'>Connect with a loyal audience</h3>
                            <p className='ContentMediaContent'>Your current customer base connects you to their friends, <br/>
                                with whom they share purchasing power and purchasing<br/>
                                behavior. We leverage existing relationships to create an<br/>
                                emotional experience.
                            </p>
                        </div>
                        <div className='col-md-5'>
                            <img className='w-100 ContentMediaImage' src={MediaOne} alt='MediaOne' />
                        </div>
                    </div>
                    <div className='row align-items-center ContentMediaRow'>
                        <div className='col-md-7'>
                            <h3 className='ContentMediaTitle'>Connect with a loyal audience</h3>
                            <p className='ContentMediaContent'>Your current customer base connects you to their friends, <br/>
                                with whom they share purchasing power and purchasing<br/>
                                behavior. We leverage existing relationships to create an<br/>
                                emotional experience.
                            </p>
                        </div>
                        <div className='col-md-5'>
                            <img className='w-100 ContentMediaImage' src={MediaOne} alt='MediaOne' />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ContentMedia