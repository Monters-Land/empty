const url = ` https://api.imgflip.com/get_memes`;
const container = $('.memes .elements');

fetch(url)
.then(data => data.json())
.then(json => {
  const data = json.data.memes;
  const load = `
  <li class="content">
    <div class="box load_more">
    <button type="button" id="load" class="btn btn-info ">Load more empty memes</button>
    </div>

  </li>`
  for (let i = 0; i < 10; i++) {
    const template = `
    <li class="content">
      <div class="box">
        <img onclick="download(this)" src="${data[i].url}" alt="${data[i].id}" >
      </div>
      <div class="info">
        <h5>${data[i].name}</h5>
        <button  value="${data[i].id}" type="button" class="btn download  btn-outline-success">Download</button>
      </div>

    </li>
    `
    $(container).append(template)
  }
  function download_img(e){
    const img = $('.box img');
    const tr = e.target;
    const id = $(tr).attr('value');
    for(i = 0 ; i < img.length; i++){
      const l= img[i];
      const alt = $(l).attr('alt');
      if(alt == id){
        const link = $(l).attr('src');
        new jsFileDownloader({url:link})
      }
    }
  }
  $('.download').click((e)=>{
    download_img(e)
  })
  $(container).append(load)
  $('#load').click(()=>loadMore())
  function loadMore(){
    $('.load_more').empty();
    const load = `
    <div class="spinner-border text-info" role="status">
    <span class="sr-only">Loading...</span>
  </div>
    `
    $('.load_more').append(load)

    setTimeout(()=>{
      $(container).empty();
      for (let i = 0; i < data.length; i++) {
        const template = `
        <li class="content">
          <div class="box">
            <img onclick="download(this)" src="${data[i].url}" alt="${data[i].id}" >
          </div>
          <div class="info">
            <h5>${data[i].name}</h5>
            <button  value="${data[i].id}" type="button" class="btn download  btn-outline-success">Download</button>
          </div>

        </li>
        `
        $(container).append(template)
      }
      $('.download').click((e)=>{
        download_img(e)
      })
    } , 1000)
  }
})
