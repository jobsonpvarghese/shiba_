import React from "react"
import "./timeline.css"

const ChildTimeline = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="uia-timeline__annual-sections">
            <span className="uia-timeline__year" aria-hidden="true">
              {item.phase}
            </span>
            <div className="uia-timeline__groups">
              {item?.data?.map((item, index) => {
                return (
                  <section className="uia-timeline__group" aria-labelledby="timeline-demo-4-heading-2">
                    <div className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                      <div className="uia-card__container">
                        <div className="uia-card__intro">
                          <h3 id="timeline-demo-4-heading-2" className="ra-heading">
                            {item.title}
                          </h3>
                          <span className="uia-card__time">
                            <time datetime="2008-09-02">
                              <span className="uia-card__day">{item.si}</span>
                              {/* <span>
                                Sept<span className="ha-screen-reader">ember 2008</span>
                              </span> */}
                            </time>
                          </span>
                        </div>
                        <div className="uia-card__body">
                          <div className="uia-card__description">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
const Timeline = () => {
  const data = [
    {
      phase: "Phase 1",
      data: [
        {
          si: "1.",
          title: "Website Development",
          description:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui aperiam incidunt enim facere reiciendis. Quas ab rerum facere illo tenetur dolores illum "
        },
        {
          si: "2.",
          title: "Social Media Setup",
          description:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui aperiam incidunt enim facere reiciendis. Quas ab rerum facere illo tenetur dolores illum "
        },
        {
          si: "3.",
          title: "Strong Community Buildup",
          description: ""
        },
        {
          si: "4.",
          title: "Launch of Vote4Shiba on Solana Mainnet/Start Pre Sale",
          description: ""
        },
        {
          si: "5.",
          title: "Establishment of governance framework",
          description: ""
        }
      ]
    },
    {
      phase: "Phase 2",
      data: [
        {
          si: "1.",
          title: "Launched on Raydium",
          description:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui aperiam incidunt enim facere reiciendis. Quas ab rerum facere illo tenetur dolores illum "
        },
        {
          si: "2.",
          title: "Expansion of ecosystem through strategic partnerships & Crazy Marketing.",
          description:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui aperiam incidunt enim facere reiciendis. Quas ab rerum facere illo tenetur dolores illum "
        },
        {
          si: "3.",
          title: "Listings on major exchanges, and implementation of additional features such as cross-chain interoperability.",
          description: ""
        }
      ]
    },
    {
      phase: "Phase 3",
      data: [
        {
          si: "1.",
          title:
            "Continued development and optimization based on community feedback, adoption of emerging technologies, and expansion into new markets and use cases.",
          description:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui aperiam incidunt enim facere reiciendis. Quas ab rerum facere illo tenetur dolores illum "
        }
      ]
    }
  ]
  return (
    <div>
      <div className="page" data-uia-timeline-skin="4" data-uia-timeline-adapter-skin-4="uia-card-skin-#1">
        <div className="uia-timeline">
          <div className="uia-timeline__container">
            <div className="uia-timeline__line"></div>
            <ChildTimeline data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
