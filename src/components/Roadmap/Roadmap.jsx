import React from "react"
import rdlogo from "../../images/rdlogo.png"
import "./roadmap.css"
import phase1 from "../../images/phase1.jpeg"
import phase2 from "../../images/phase2.jpeg"
import phase3 from "../../images/phase3.jpeg"
import phase4 from "../../images/phase4.jpeg"

const Roadmap = () => {
  const data = [
    {
      title: "Phase 1",
      li: [
        "Creation of website and social media.",
        "Plant trees with funds rasied on pre sale.",
        "Setup governance famework.",
        "Launch of 'vote4shiba' on vote4shiba.com."
      ]
    },
    {
      title: "Phase 2",
      li: ["Launch on Raydium.", "Going on tour (Marketing).", "listing on major exchanges."]
    },
    {
      title: "Phase 3",
      li: ["Continued Development.", "Community feedback.", "implementation of new technology.", "Crazy world wide marketing on our comunity group."]
    },
    {
      title: "Phase 4",
      li: ["Expansion of campagain.", "Everlasting Impression."]
    }
  ]

  return (
    <div id="roadmap">
      <div class="image-container">
        <img src={rdlogo} alt="rdlogo" className="rd_foot" />
      </div>
      <div>
        <div className="page timeline-5-2" data-uia-timeline-skin="5" data-uia-timeline-adapter-skin-5="uia-card">
          <div className="uia-timeline">
            <div className="uia-timeline__container">
              <div className="uia-timeline__line"></div>
              <div className="uia-timeline__groups">
                <section className="uia-timeline__group" aria-labelledby="timeline-demo-6-heading-1">
                  <div className="uia-timeline__dot"></div>
                  <div className="uia-timeline__point uia-card">
                    <div className="uia-card__container">
                      <div className="uia-card__intro">
                        <h3 id="timeline-demo-6-heading-1" className="header page__job-name uia-heading ra-heading">
                          {data[0].title}
                        </h3>
                      </div>
                      <div className="uia-card__body">
                        {data[0].li.map((item, i) => (
                          <ul className="point">
                            <li>{item}</li>
                          </ul>
                        ))}
                        <img
                          src={phase1}
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="uia-timeline__group" aria-labelledby="timeline-demo-6-heading-2">
                  <div className="uia-timeline__dot"></div>
                  <div className="uia-timeline__point uia-card">
                    <div className="uia-card__container">
                      <div className="uia-card__intro">
                        <h3 id="timeline-demo-6-heading-2" className="header page__job-name uia-heading ra-heading">
                          {data[1].title}
                        </h3>
                      </div>
                      <div className="uia-card__body">
                        {data[2].li.map((item, i) => (
                          <ul className="point">
                            <li>{item}</li>
                          </ul>
                        ))}
                        <img
                          src={phase2}
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="page timeline-5-2" data-uia-timeline-skin="5" data-uia-timeline-adapter-skin-5="uia-card">
          <div className="uia-timeline">
            <div className="uia-timeline__container">
              <div className="uia-timeline__line"></div>
              <div className="uia-timeline__groups">
                <section className="uia-timeline__group" aria-labelledby="timeline-demo-6-heading-1">
                  <div className="uia-timeline__dot"></div>
                  <div className="uia-timeline__point uia-card">
                    <div className="uia-card__container">
                      <div className="uia-card__intro">
                        <h3 id="timeline-demo-6-heading-1" className="header page__job-name uia-heading ra-heading">
                          {data[2].title}
                        </h3>
                      </div>
                      <div className="uia-card__body">
                        {data[2].li.map((item, i) => (
                          <ul className="point">
                            <li>{item}</li>
                          </ul>
                        ))}
                        <img
                          src={phase3}
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="uia-timeline__group" aria-labelledby="timeline-demo-6-heading-2">
                  <div className="uia-timeline__dot"></div>
                  <div className="uia-timeline__point uia-card">
                    <div className="uia-card__container">
                      <div className="uia-card__intro">
                        <h3 id="timeline-demo-6-heading-2" className="header page__job-name uia-heading ra-heading">
                          {data[3].title}
                        </h3>
                      </div>
                      <div className="uia-card__body">
                        {data[3].li.map((item, i) => (
                          <ul className="point">
                            <li>{item}</li>
                          </ul>
                        ))}
                        <img
                          src={phase4}
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto"
                          }}
                        />
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

export default Roadmap
