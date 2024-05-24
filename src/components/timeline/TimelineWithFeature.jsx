import React from "react"
import "./timeline.css"
import feature1 from "../../images/shiba.png"
const TimelineWithFeature = () => {
  const data = [
    {
      title: "Community Governance",
      description:
        "Vote4Shiba prioritizes decentralization and community empowerment by enabling token holders to vote on key decisions regarding the future direction of the project. Through a transparent and democratic governance process, users can propose and vote on initiatives such as protocol upgrades, partnerships, and allocation of funds from the community treasury."
    },
    {
      title: "Solana Blockchain",
      description:
        "Built on the Solana blockchain, Vote4Shiba benefits from its high throughput, low transaction fees, and fast confirmation times. By leveraging Solana's scalability and performance, Vote4Shiba ensures a seamless and efficient user experience, making it an ideal platform for both casual users and DeFi enthusiasts."
    },
    {
      title: "Yield Farming",
      description:
        "Vote4Shiba incentivizes liquidity provision and participation in the ecosystem through yield farming opportunities. Users can stake their V4S tokens in liquidity pools to earn rewards in the form of additional tokens or fees generated from transactions within the ecosystem. This mechanism encourages active participation and helps to foster liquidity, stability, and growth within the Vote4Shiba ecosystem."
    },
    {
      title: "Community Engagement",
      description:
        "At the heart of Vote4Shiba is a vibrant and inclusive community dedicated to the project's success. Through social media channels, online forums, and community events, users can connect with like-minded individuals, share ideas, and contribute to the development and promotion of the project. Vote4Shiba aims to foster a sense of belonging and ownership among its community members, driving long-term sustainability and growth."
    }
  ]
  return (
    <div className="timeline-body">
      <h1>Key Features</h1>
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
                      <h3 id="timeline-demo-6-heading-1" className="page__job-name uia-heading ra-heading">
                        {data[0].title}
                      </h3>
                    </div>
                    <div className="uia-card__body">
                      <p>{data[0].description}</p>
                      <img
                        src={feature1}
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
                      <h3 id="timeline-demo-6-heading-2" className="page__job-name uia-heading ra-heading">
                        {data[1].title}
                      </h3>
                    </div>
                    <div className="uia-card__body">
                      <p>{data[1].description}</p>
                      <img
                        src={feature1}
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
                      <h3 id="timeline-demo-6-heading-1" className="page__job-name uia-heading ra-heading">
                        {data[2].title}
                      </h3>
                    </div>
                    <div className="uia-card__body">
                      <p>{data[2].description}</p>
                      <img
                        src={feature1}
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
                      <h3 id="timeline-demo-6-heading-2" className="page__job-name uia-heading ra-heading">
                        {data[3].title}
                      </h3>
                    </div>
                    <div className="uia-card__body">
                      <p>{data[3].description}</p>
                      <img
                        src={feature1}
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
  )
}

export default TimelineWithFeature
