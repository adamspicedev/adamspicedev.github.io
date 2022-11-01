// const roots = document.querySelectorAll('[id^="tellaCalc"]');
const root = document.getElementById('tellaCalc2')

const url = `https://tella-adservice.azurewebsites.net`
// const url = `http://localhost:3000`

const getData = (apiKey) => {
  fetch(`${url}/getFiles/${apiKey}`, {
    
    headers: {
      'Access-Control-Allow-Origin': 'localhost:5500',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const { jsFiles, cssFiles } = data

      elements = jsFiles.map((fileName) => {
        var script = document.createElement('script')
        script.crossOrigin = 'anonymous'
        script.src = `${url}/${apiKey}/assets/${fileName}`
        document.head.appendChild(script)
        return script
      })

      elements = cssFiles.map((fileName) => {
        var link = document.createElement('link')
        link.crossOrigin = 'anonymous'
        link.rel = 'stylesheet'
        link.href = `${url}/${apiKey}/assets/${fileName}`
        document.head.appendChild(link)
        return link
      })
    })
}

// Array.from(roots).forEach(root=>getData(root.dataset.apikey))

getData(root.dataset.apikey)
