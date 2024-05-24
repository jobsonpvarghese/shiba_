import React from "react"
import "./timeline.css"

const Timeline = () => {
  return (
    <div>
      <div className="page" data-uia-timeline-skin="4" data-uia-timeline-adapter-skin-4="uia-card-skin-#1">
        <div className="uia-timeline">
          <div className="uia-timeline__container">
            <div className="uia-timeline__line"></div>
            <div className="uia-timeline__annual-sections">
              <span className="uia-timeline__year" aria-hidden="true">
                Phase 1
              </span>
              <div className="uia-timeline__groups">
                <section className="uia-timeline__group" aria-labelledby="timeline-demo-4-heading-1">
                  <div className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                    <div className="uia-card__container">
                      <div className="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-1" className="ra-heading ha-screen-reader">
                          Philadelphia Museum School of Industrial Art
                        </h3>
                        <span className="uia-card__time">
                          <time datetime="2008-02-02">
                            <span className="uia-card__day">2</span>
                            <span>
                              Feb<span className="ha-screen-reader">ruary 2008</span>
                            </span>
                          </time>
                        </span>
                      </div>
                      <div className="uia-card__body">
                        <div className="uia-card__description">
                          <p>
                            Attends the Philadelphia Museum School of Industrial Art. Studies design with Alexey Brodovitch, art director at Harper's
                            Bazaar, and works as his assistant.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="uia-timeline__group" aria-labelledby="timeline-demo-4-heading-2">
                  <div className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                    <div className="uia-card__container">
                      <div className="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-2" className="ra-heading">
                          The part of my life in University of Pennsylvania
                        </h3>
                        <span className="uia-card__time">
                          <time datetime="2008-09-02">
                            <span className="uia-card__day">2</span>
                            <span>
                              Sept<span className="ha-screen-reader">ember 2008</span>
                            </span>
                          </time>
                        </span>
                      </div>
                      <div className="uia-card__body">
                        <div className="uia-card__description">
                          <p>
                            Started from University of Pennsylvania. This is an important stage of my career. Here I worked in the local magazine. The
                            experience greatly affected me
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="uia-timeline__annual-sections">
              <span className="uia-timeline__year" aria-hidden="true">
                2014
              </span>
              <div className="uia-timeline__groups">
                <section className="uia-timeline__group" aria-labelledby="timeline-demo-4-heading-3">
                  <div className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                    <div className="uia-card__container">
                      <div className="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-3" className="ra-heading ha-screen-reader">
                          My travel to Europe
                        </h3>
                        <span className="uia-card__time">
                          <time datetime="2014-07-14">
                            <span className="uia-card__day">14</span>
                            <span>
                              Jul<span className="ha-screen-reader">e 2014</span>
                            </span>
                          </time>
                        </span>
                      </div>
                      <div className="uia-card__body">
                        <div className="uia-card__description">
                          <p>
                            Travels to France, Italy, Spain, and Peru. After completing fashion editorial in Lima, prolongs stay to make portraits of
                            local people in a daylight studio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
