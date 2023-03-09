import React from 'react'
import  Data  from './Data';
import  agua  from './components/img/agua.png';
import aceite from './components/img/aceite.jpg';
import yerba from './components/img/yerba.jpg';

const Cards = () => {
  return (
    <>
    <div><div class="card" style="width: 18rem;">
    <img src={agua} class="card-img-top" alt="agua"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div></div>

  <div><div class="card" style="width: 18rem;">
  <img src= {yerba} class="card-img-top" alt="yerba"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>

<div><div class="card" style="width: 18rem;">
    <img src={aceite}
     class="card-img-top" alt="aceite"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div></div>
  </>

  )
}

export default Cards