
  /* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  var count=0;
  var lt=0;

  var typed2 = new Typed('#typed2', {
    strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
  function search()
  {
    if(count==0)
    {
      document.getElementById('search_btn_txt').style.width="80%";
      count++;
    }
    else
    {
      document.getElementById('search_btn_txt').style.width="0";
      count=0;
    }
  }
function motion(){
      if(lt==0)
      {
        document.getElementById('ham_index').style.display="flex";
        document.getElementById('sp1').style.top='50%';
        document.getElementById('sp1').style.transform='rotate(45deg)';
        document.getElementById('sp2').style.display='none';
        document.getElementById('sp3').style.transform='rotate(-45deg)';
        document.getElementById('sp3').style.bottom='50%';
        lt=1;
      }
      else{
        document.getElementById('ham_index').style.display="none";
        document.getElementById('sp1').style.transform='rotate(0deg)';
        document.getElementById('sp1').style.top='20%';
        document.getElementById('sp2').style.display='block';
        document.getElementById('sp3').style.transform='rotate(0deg)';
        document.getElementById('sp3').style.bottom='10%';
        lt=0;
      }
}


