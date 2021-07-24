// character selector
function openSection(evt, sectionName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("char-info-section");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(sectionName).style.display = "block";
  }