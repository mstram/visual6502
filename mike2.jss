
// var frame, chipbg, overlay, hilite, hitbuffer, ctx;

// mike chipbg is a <canvas> element
//       <canvas class="chip" id="overlay"></canvas>
//       <canvas class="chip" id="hilite"></canvas>
//       <canvas class="chip" id="hitbuffer"></canvas>


function mikeAddToList() {
       var selObj       = document.getElementById('selMikeHighlightList');
       var txtValueObj  = document.getElementById('HighlightThese');
       var txt = txtValueObj.value;

       alert('add to list "' + txt + '"');

       var elOptNew = document.createElement('option');
       elOptNew.text = txt;
       elOptNew.value = txt;

       var elOptOld = selObj.options[selObj.selectedIndex];
       selObj.add(elOptNew, elOptOld);
}

function doMikeSelect1(){
        var selObj       = document.getElementById('selMikeHighlightList');
	var txtValueObj  = document.getElementById('HighlightThese');
	var selIndex     = selObj.selectedIndex;

	txtValueObj.value = selObj.options[selIndex].value;
      //  alert('selection changed to :' + selObj.options[selIndex].value);
}

function mikeAlphaSort(){
  alert('mikeAlphaSort');
}

function mikeSymSort(){
  alert('mikeAlphaSort');
}

