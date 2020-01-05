import React from "react"
import { animated, useSprings, interpolate } from "react-spring"
import "./homeBackground.css"

const spotsArray = [
  {
    width: "50px",
    height: "50px",
    backgroundColor: `rgba(250, 249, 246, .5)`,
    borderRadius: "50%",
  },
  {
    width: "20px",
    height: "20px",
    backgroundColor: `rgba(250, 249, 246, .5)`,
    borderRadius: "50%",
  },
  {
    width: "80px",
    height: "80px",
    backgroundColor: `rgba(250, 249, 246, .5)`,
    borderRadius: "50%",
  },
  {
    width: "20px",
    height: "20px",
    backgroundColor: `rgba(60, 40, 41, 0.8)`,
    borderRadius: "50%",
  },
  {
    width: "80px",
    height: "80px",
    backgroundColor: `rgba(60, 40, 41, 0.2)`,
    borderRadius: "50%",
  },
  {
    width: "50px",
    height: "50px",
    backgroundColor: `rgba(60, 40, 41, 0.35)`,
    borderRadius: "50%",
  },
  {
    width: "80px",
    height: "80px",
    backgroundColor: `rgba(60, 40, 41, 0.35)`,
    borderRadius: "50%",
  },
  {
    width: "50px",
    height: "50px",
    backgroundColor: `rgba(60, 40, 41, 0.35)`,
    borderRadius: "50%",
  },
  {
    width: "20px",
    height: "20px",
    backgroundColor: `rgba(60, 40, 41, 0.35)`,
    borderRadius: "50%",
  },
  {
    width: "20px",
    height: "20px",
    backgroundColor: `rgba(60, 40, 41, 0.8)`,
    borderRadius: "50%",
  },
  {
    width: "30px",
    height: "30px",
    backgroundColor: `rgba(60, 40, 41, 0.35)`,
    borderRadius: "50%",
  },
  {
    width: "50px",
    height: "50px",
    backgroundColor: `rgba(60, 40, 41, 0.8)`,
    borderRadius: "50%",
  },
  {
    width: "20px",
    height: "20px",
    backgroundColor: `rgba(60, 40, 41, 0.8)`,
    borderRadius: "50%",
  },
]

const from = () => ({
  x: Math.random() * 900,
  y: Math.random() * 600,
})

const to = () => ({
  x: Math.random() * 800,
  y: Math.random() * 600,
})

const HomeBackground = () => {
  const [props] = useSprings(spotsArray.length, () => ({
    ...to(),
    from: from(),
    config: {
      duration: "70000",
      friction: "300",
    },
  }))

  return (
    <div className="home-background">
      <div className="triangle-wrapper">
        <svg
          width="1024px"
          height="380px"
          viewBox="0 0 1024 380"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="home-background-triangle"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="56.2263569%"
              x2="50%"
              y2="100%"
              id="linearGradient-1"
            >
              <stop stopColor="#F26071" offset="0%"></stop>
              <stop stopColor="#DF5A63" stopOpacity="0.4" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g
            id="Home-Page"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            fillOpacity="0.8"
          >
            <g id="Ladybug-Podcast-Home-Page" fill="url(#linearGradient-1)">
              <g id="player">
                <polygon
                  id="Rectangle"
                  points="410 0 1024 380 -5.68434189e-13 380"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
        {props.map(({ x, y }, i) => {
          let { width, height, backgroundColor, borderRadius } = spotsArray[i]
          return (
            <animated.div
              key={i}
              className="spot"
              style={{
                transform: interpolate(
                  [x, y],
                  (x, y) => `translate3d(${x}px,${y}px,0)`
                ),
                backgroundColor: backgroundColor,
                width: width,
                height: height,
                borderRadius: borderRadius,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HomeBackground
