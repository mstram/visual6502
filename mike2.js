//var mikeNoZoomOnFind = false;

// var frame, chipbg, overlay, hilite, hitbuffer, ctx;

// mike chipbg is a <canvas> element
//       <canvas class="chip" id="overlay"></canvas>
//       <canvas class="chip" id="hilite"></canvas>
//       <canvas class="chip" id="hitbuffer"></canvas>

//alert('mike2:mikeNoZoomOnFind = ' + mikeNoZoomOnFind);

function buildSelectNodesList(){
    var sortedNodes = '';
    var temp = [];

  //  alert('buildSelectNodesList');
    console.log('buildSelectNodesList');
    for(n in nodenames) {temp.push(n);}

    sortedNodes = temp.sort();

    var selObj   = document.getElementById('selMikeHighlightList');
    var elOptOld = selObj.options[selObj.selectedIndex];
    var elOptNew = '';
    var x = 0;

    for( node in sortedNodes) {
         x++;
     //    console.log(x + ': ' + sortedNodes[node]);
         elOptNew       = document.createElement('option');
         elOptNew.text  = sortedNodes[node];
         elOptNew.value = sortedNodes[node];
         selObj.add(elOptNew, elOptOld);
    }
   //alert('hello there');
}


function  mikeSetNoZoomOnFind(cbox){
  //alert('mikeSetNoZoomOnFind ' + cbox.value);
 // mikeNoZoomOnFind = true;
  mikeNoZoomOnFind = cbox.value;

}

function mikeresetZoom() {
// alert('mikeresetZoom');
 setZoom(1);
}

function mikeShowBoxes() {
   boxLabel(['IR',   50, 8432, 2332, 9124,  984]);
   boxLabel(['PLA', 100, 1169, 2328, 8393,  934]);
   boxLabel(['Y',    50, 2143, 8820, 2317, 5689]);
   boxLabel(['X',    50, 2317, 8820, 2490, 5689]);
//   boxLabel(['S',    50, 2490, 8820, 2814, 5689]);
//   boxLabel(['ALU',  50, 2814, 8820, 4525, 5689]);
//   boxLabel(['DAdj', 40, 4525, 8820, 5040, 5689]);
   boxLabel(['A',    50, 5040, 8820, 5328, 5689]);
   boxLabel(['PC',   50, 5559, 8820, 6819, 5689]);
}

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

function mikeinit(){
 // alert('mikeinit');
  buildSelectNodesList();
}

//mikeinit();
