const timeline = [
    {
      id: "0",
      avatar:
        "https://pbs.twimg.com/profile_images/1346819351622660096/8C7pbk4y_normal.jpg",
      username: "Biyín",
      message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
    },
    {
      id: "1",
      avatar:
        "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg",
      username: "midudev",
      message: "Wow, devter está funcionando y vivo 🦉",
      name: "Miguel Ángel Durán",
    },
    {
      id: "2",
      username: "TheGrefg",
      name: "TheGrefg",
      avatar:
        "https://pbs.twimg.com/profile_images/1387963288105934849/gEVwPJtl_x96.jpg",
      message: `Nada mejor que quedarme durmiendo en el sofá de mi set-up, desvelarme a las 4 de la mañana y joderme la vida.`,
    },
    {
        id: "0",
        avatar:
          "https://pbs.twimg.com/profile_images/1346819351622660096/8C7pbk4y_normal.jpg",
        username: "Biyín",
        message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
      
      (gzipped size went from 16.6 KB down to 2.7 KB!!)
      
      * Chrome 79+, Safari 14+, Firefox 68+`,
      },
      {
        id: "1",
        avatar:
          "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg",
        username: "midudev",
        message: "Wow, devter está funcionando y vivo 🦉",
        name: "Miguel Ángel Durán",
      },
      {
        id: "2",
        username: "TheGrefg",
        name: "TheGrefg",
        avatar:
          "https://pbs.twimg.com/profile_images/1387963288105934849/gEVwPJtl_x96.jpg",
        message: `Nada mejor que quedarme durmiendo en el sofá de mi set-up, desvelarme a las 4 de la mañana y joderme la vida.`,
      },
      {
        id: "0",
        avatar:
          "https://pbs.twimg.com/profile_images/1346819351622660096/8C7pbk4y_normal.jpg",
        username: "Biyín",
        message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
      
      (gzipped size went from 16.6 KB down to 2.7 KB!!)
      
      * Chrome 79+, Safari 14+, Firefox 68+`,
      },
      {
        id: "1",
        avatar:
          "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg",
        username: "midudev",
        message: "Wow, devter está funcionando y vivo 🦉",
        name: "Miguel Ángel Durán",
      },
      {
        id: "2",
        username: "TheGrefg",
        name: "TheGrefg",
        avatar:
          "https://pbs.twimg.com/profile_images/1387963288105934849/gEVwPJtl_x96.jpg",
        message: `Nada mejor que quedarme durmiendo en el sofá de mi set-up, desvelarme a las 4 de la mañana y joderme la vida.`,
      },
      {
        id: "0",
        avatar:
          "https://pbs.twimg.com/profile_images/1346819351622660096/8C7pbk4y_normal.jpg",
        username: "Biyín",
        message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
      
      (gzipped size went from 16.6 KB down to 2.7 KB!!)
      
      * Chrome 79+, Safari 14+, Firefox 68+`,
      },
      {
        id: "1",
        avatar:
          "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg",
        username: "midudev",
        message: "Wow, devter está funcionando y vivo 🦉",
        name: "Miguel Ángel Durán",
      },
      {
        id: "2",
        username: "TheGrefg",
        name: "TheGrefg",
        avatar:
          "https://pbs.twimg.com/profile_images/1387963288105934849/gEVwPJtl_x96.jpg",
        message: `Nada mejor que quedarme durmiendo en el sofá de mi set-up, desvelarme a las 4 de la mañana y joderme la vida.`,
      },
      {
        id: "0",
        avatar:
          "https://pbs.twimg.com/profile_images/1346819351622660096/8C7pbk4y_normal.jpg",
        username: "Biyín",
        message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
      
      (gzipped size went from 16.6 KB down to 2.7 KB!!)
      
      * Chrome 79+, Safari 14+, Firefox 68+`,
      },
      {
        id: "1",
        avatar:
          "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg",
        username: "midudev",
        message: "Wow, devter está funcionando y vivo 🦉",
        name: "Miguel Ángel Durán",
      },
      {
        id: "2",
        username: "TheGrefg",
        name: "TheGrefg",
        avatar:
          "https://pbs.twimg.com/profile_images/1387963288105934849/gEVwPJtl_x96.jpg",
        message: `Nada mejor que quedarme durmiendo en el sofá de mi set-up, desvelarme a las 4 de la mañana y joderme la vida.`,
      },
  ]

export default (req, res) => {
    res.status = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(timeline))
}