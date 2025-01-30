
import flowbite  from 'flowbite-react/tailwind'
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",

  flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow:{
        hard:'',
        normal:"",
        light:"",
      },
      colors: {
        p1: "var(--p1)",
        p2: "var(--p2)",
        p3: "var(--p3)",

        b0: "var(--b0)",
        wf: "var(--wf)",
        n1: "var(--n1)",
        n2: "var(--n2)",
        n3: "var(--n3)",
      },
    },
  },
  plugins: [flowbite.plugin()],
}

