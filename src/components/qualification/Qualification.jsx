import React,{ useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : 
                "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                {
                /*<div className={toggleState === 2 ? "qualification__button qualification__active button--flex" :
                "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
                */}
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? 
                "qualification__content qualification__content-active" : 
                "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">KMUTNB</h3>
                            <span className="qualification__subtitle">Thai - University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Thai-Germen Pre-Engineering</h3>
                            <span className="qualification__subtitle">Thai - High School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2019
                            </div>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Wat khemapirataram</h3>
                            <span className="qualification__subtitle">Thai - Middle School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Karun Sueksa</h3>
                            <span className="qualification__subtitle">Thai - Elementary School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2009 - 2014
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? 
                "qualification__content qualification__content-active" : 
                "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Product Designer</h3>
                            <span className="qualification__subtitle">Microsoft - Spain</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Ux Designer</h3>
                            <span className="qualification__subtitle">Apple Inc - Spain</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">Figma - Spain</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification