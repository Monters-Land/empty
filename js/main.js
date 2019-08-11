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
        <img src="${data[i].url}" alt="">
      </div>
      <div class="info">
        <h5>${data[i].name}</h5>
        <button type="button" class="btn  btn-outline-success">Download</button>
      </div>

    </li>
    `
    $(container).append(template)
    // console.log(data)
  }
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
            <img src="${data[i].url}" alt="">
          </div>
          <div class="info">
            <h5>${data[i].name}</h5>
            <button type="button" class="btn  btn-outline-success">Download</button>
          </div>

        </li>
        `
        $(container).append(template)
        // console.log(data)
      }
    } , 4000)
  }
})
