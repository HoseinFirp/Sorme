/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        236: "236px",
      },
      backgroundColor: {
        "custom-cream": "#C6A86C",
        "custom-bg-1": "#EFEFEF",
        "custom-bg-pink": "#F29AA7",
        "custom-bg-footer":"#F9D6DC",
        "custom-bg-icons":"#FFEFEF",
      },
      textColor: {
        "custom-white": "#F4F4F2",
        "custom-green": "#5C7855",
        "custom-gray": "#787878",
      },
    },
  },
  plugins: [daisyui],
};
