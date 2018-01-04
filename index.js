const app = "I don't do much.";

const token = '366a1451c15b84936ebf7392ac355'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
