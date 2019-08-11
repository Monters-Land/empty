const url = ` https://api.imgflip.com/get_memes`;
const container = $('.memes .elements');
fetch(url)
.then(data => data.json())
.then(json => {
  const data = json.data.memes;
  $.map(data , meme =>{
    const template = `
    <li class="content">
      <div class="box">
        <img src="${meme.url}" alt="">
      </div>
      <div class="info">
        <h5>${meme.name}</h5>
        <button type="button" class="btn  btn-outline-success">Download</button>
      </div>

    </li>
    `
    $(container).append(template)
    console.log(meme)
  })
})
