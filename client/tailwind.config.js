module.exports = {
  purge: {
    content: ["./src/**/*.js", "./src/**/**/*.js"],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
      black: theme("colors.black.faded"),
    }),
    colors: {
      white: "#fff",
      blue: {
        medium: "#0095f6",
        bold: "#385185",
        light: "#03afd6",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
        dowload: "#262626",
        bold: "#2d2d2d",
        primary: "#463d3d",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
        graybold: "#8c8c8c",
        graysemibold: "#c7c7c7",
        graysuggeseted: "#8e8e8e",
        grayLight: "#f1f1f1",
      },
      red: {
        primary: "#ed4956",
        light: "#ff8c8c",
      },
      linear: {
        lineargradient: "linear-gradient(to right, red, purple)",
      },
    },

    extend: {
      screens: {
        minium: "345px",
        minium2: "375px",
        "xs-res": "420px",
        "xs-res2": "450px",
        "sm-res": "620px",
        "md-res": "768px",
        "md-res2": "875px",
        "lg-res": "1140px",
        "lg-res2": "1280px",
        "xl-res": "1350px",
        "2xl-res": "1540px",
      },
      fontSize: {
        sxs: ".665rem",
      },
      keyframes: {
        mobileScreen: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: ".5",
          },
        },
        scaletext: {
          "0%": {
            transform: "scale(.5)",
            opacity: "0",
          },
          "75%": {
            transform: "scale(1.0)",
            opacity: ".5",
          },
          "100%": {
            transform: "scale(1.0)",
          },
        },
        postIconClickLike: {
          "20%": {
            opacity: "0.4",
            transform: "scale(1.0)",
          },

          "50%": {
            opacity: "0.6",
            transform: "scale(1.3)",
          },
          "80%": {
            opacity: "0.8",
            transform: "scale(1.2)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        postIconClickUnLike: {
          "0%": {
            opacity: "0.6",
            transform: "scale(1.0)",
          },

          "50%": {
            opacity: "0.6",
            transform: "scale(1.2)",
          },
          "80%": {
            opacity: "0.8",
            transform: "scale(1)",
          },

          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        pulseText: {
          "0%": {
            opacity: ".4",
          },
          "50%": {
            opacity: ".6",
          },
          "80%": {
            opacity: ".8",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadedComment: {
          "0%": {
            transform: "scale(1.1)",
            opacity: "0",
          },
          "65%": {
            opacity: ".5",
          },
          "80%": {
            opacity: ".8",
          },
          "100%": {
            opacity: "1",
          },
        },
        scaleDeg: {
          "100%": {
            transform: "rotate(180deg)",
            transition: "transform linear",
          },
        },
        modalFollowProfile: {
          "0%": {
            opacity: "0.6",
            transform: "scale(1.2)",
          },

          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      inset: {
        "88px": "5.5rem",
      },
      animation: {
        mobileScreen: "mobileScreen 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scaletext: "scaletext 0.5s cubic-bezier(1, 1, 0.2, 1)",
        iconClickPost: "postIconClickLike .3s ease-in-out",
        postIconClickUnLike: "postIconClickUnLike .3s ease-in-out",
        pulseText: "pulseText 1s cubic-bezier(0.4, 0, 0.6, 1)",
        fadedComment: "fadedComment ease-in-out .3s",
        scaleDeg: "scaleDeg 1s linear",
        modalFollowProfile: "modalFollowProfile .1s ease-out",
      },
      maxWidth: {
        maxwidth350: "380px",
        maxwidth258: "258px",
      },
      minWidth: {
        minwidth215: "230px",
        minWidth350: "350px",
        minWidth420: "540px",
      },
      width: {
        "88-percent": "88%",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
