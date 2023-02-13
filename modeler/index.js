//Make an array for each of the courses
var arr1 = ["Anaphylaxis", 0, 0, 0, 0, 0],
  arr2 = ["Safety Course", 0, 0, 0, 0, 0],
  arr3 = ["Chemistry", 0, 0, 0, 0, 0],
  arr4 = ["RS", 0, 0, 0, 0, 0],
  arr5 = ["Jay Course", 0, 0, 0, 0, 0],
  arr6 = ["Ji Course", 0, 0, 0, 0, 0],
  arr7 = ["Annie Course", 0, 0, 0, 0, 0];
  arr8 = ["Michael Course", 0, 0, 0, 0, 0];
  arr9 = ["Simon Course", 0, 0, 0, 0, 0];
  arr10 = ["Siew Course", 0, 0, 0, 0, 0];


//Add array values into html to populate activity titles
$("#Course1_a").text(arr1[0]);
$("#Course2_a").text(arr2[0]);
$("#Course3_a").text(arr3[0]);
$("#Course4_a").text(arr4[0]);
$("#Course5_a").text(arr5[0]);
$("#Course6_a").text(arr6[0]);
$("#Course7_a").text(arr7[0]);
$("#Course8_a").text(arr8[0]);
$("#Course9_a").text(arr9[0]);
$("#Course10_a").text(arr10[0]);

//This functions checks the value of Select then adjusts the value of the array.
$("#selector1")
  .on("click", function() {
    let $this = $(this);
    $this.toggleClass('SeeMore2');
    if ($this.hasClass('SeeMore2')) {
      $this.text('Selected');   
      //This 0 entry in the array below is a placeholder for the course title we entered above
      arr1 = [0, 40.1, 80.5, 400.87, 99.0];
      document.getElementById("Course1_b").classList.remove('table_off');
      document.getElementById("Course1_b").classList.add('table_entry');
      document.getElementById("Course1_c").classList.remove('table_off');
      document.getElementById("Course1_c").classList.add('table_entry');
      document.getElementById("Course1_d").classList.remove('table_off');
      document.getElementById("Course1_d").classList.add('table_entry');
      document.getElementById("Course1_e").classList.remove('table_off');
      document.getElementById("Course1_e").classList.add('table_entry');
      $("#Course1_b").text(arr1[1]);
      $("#Course1_c").text(arr1[2]);
      $("#Course1_d").text(arr1[3]);
      $("#Course1_e").text(arr1[4]);
      
    } else {
    $this.text('Select');
      arr1 = [0, 0, 0, 0, 0];
      document.getElementById("Course1_b").classList.remove('table_entry');
      document.getElementById("Course1_b").classList.add('table_off');
      document.getElementById("Course1_c").classList.remove('table_entry');
      document.getElementById("Course1_c").classList.add('table_off');
      document.getElementById("Course1_d").classList.remove('table_entry');
      document.getElementById("Course1_d").classList.add('table_off');
      document.getElementById("Course1_e").classList.remove('table_entry');
      document.getElementById("Course1_e").classList.add('table_off');
    }
  });

$("#selector2")
  .on("click", function() {
    let $this = $(this);
    $this.toggleClass('SeeMore2');
    if ($this.hasClass('SeeMore2')) {
      $this.text('Selected');
      arr2 = [0, 285, 526, 858, 744];
      document.getElementById("Course2_b").classList.remove('table_off');
      document.getElementById("Course2_b").classList.add('table_entry');
      document.getElementById("Course2_c").classList.remove('table_off');
      document.getElementById("Course2_c").classList.add('table_entry');
      document.getElementById("Course2_d").classList.remove('table_off');
      document.getElementById("Course2_d").classList.add('table_entry');
      document.getElementById("Course2_e").classList.remove('table_off');
      document.getElementById("Course2_e").classList.add('table_entry');
      $("#Course2_b").text(arr2[1]);
      $("#Course2_c").text(arr2[2]);
      $("#Course2_d").text(arr2[3]);
      $("#Course2_e").text(arr2[4]);
    } else {
      $this.text('Select');
      arr2 = [0, 0, 0, 0, 0];
      document.getElementById("Course2_b").classList.remove('table_entry');
      document.getElementById("Course2_b").classList.add('table_off');
      document.getElementById("Course2_c").classList.remove('table_entry');
      document.getElementById("Course2_c").classList.add('table_off');
      document.getElementById("Course2_d").classList.remove('table_entry');
      document.getElementById("Course2_d").classList.add('table_off');
      document.getElementById("Course2_e").classList.remove('table_entry');
      document.getElementById("Course2_e").classList.add('table_off');
    }
  });

$("#selector3")
  .on("click", function() {
    let $this = $(this);
    $this.toggleClass('SeeMore2');
    if ($this.hasClass('SeeMore2')) {
      $this.text('Selected');
      arr3 = [0, 879, 21, 10, 6];
      document.getElementById("Course3_b").classList.remove('table_off');
      document.getElementById("Course3_b").classList.add('table_entry');
      document.getElementById("Course3_c").classList.remove('table_off');
      document.getElementById("Course3_c").classList.add('table_entry');
      document.getElementById("Course3_d").classList.remove('table_off');
      document.getElementById("Course3_d").classList.add('table_entry');
      document.getElementById("Course3_e").classList.remove('table_off');
      document.getElementById("Course3_e").classList.add('table_entry');
      $("#Course3_b").text(arr3[1]);
      $("#Course3_c").text(arr3[2]);
      $("#Course3_d").text(arr3[3]);
      $("#Course3_e").text(arr3[4]);
    } else {
      $this.text('Select');
      arr3 = [0, 0, 0, 0, 0];
      document.getElementById("Course3_b").classList.remove('table_entry');
      document.getElementById("Course3_b").classList.add('table_off');
      document.getElementById("Course3_c").classList.remove('table_entry');
      document.getElementById("Course3_c").classList.add('table_off');
      document.getElementById("Course3_d").classList.remove('table_entry');
      document.getElementById("Course3_d").classList.add('table_off');
      document.getElementById("Course3_e").classList.remove('table_entry');
      document.getElementById("Course3_e").classList.add('table_off');
    }
  });

$("#selector4")
  .on("click", function() {
    let $this = $(this);
    $this.toggleClass('SeeMore2');
    if ($this.hasClass('SeeMore2')) {
      $this.text('Selected');
      arr4 = [0, 5000, 309, 25, 99];
      document.getElementById("Course4_b").classList.remove('table_off');
      document.getElementById("Course4_b").classList.add('table_entry');
      document.getElementById("Course4_c").classList.remove('table_off');
      document.getElementById("Course4_c").classList.add('table_entry');
      document.getElementById("Course4_d").classList.remove('table_off');
      document.getElementById("Course4_d").classList.add('table_entry');
      document.getElementById("Course4_e").classList.remove('table_off');
      document.getElementById("Course4_e").classList.add('table_entry');
      $("#Course4_b").text(arr4[1]);
      $("#Course4_c").text(arr4[2]);
      $("#Course4_d").text(arr4[3]);
      $("#Course4_e").text(arr4[4]);
    } else {
      $this.text('Select');
      arr4 = [0, 0, 0, 0, 0];
      document.getElementById("Course4_b").classList.remove('table_entry');
      document.getElementById("Course4_b").classList.add('table_off');
      document.getElementById("Course4_c").classList.remove('table_entry');
      document.getElementById("Course4_c").classList.add('table_off');
      document.getElementById("Course4_d").classList.remove('table_entry');
      document.getElementById("Course4_d").classList.add('table_off');
      document.getElementById("Course4_e").classList.remove('table_entry');
      document.getElementById("Course4_e").classList.add('table_off');
    }
  });
  
  $("#selector5")
  .on("click", function() {
    let $this = $(this);
    $this.toggleClass('SeeMore2');
    if ($this.hasClass('SeeMore2')) {
      $this.text('Selected');
      arr5 = [0, 74, 9, 955, 10];
      document.getElementById("Course5_b").classList.remove('table_off');
      document.getElementById("Course5_b").classList.add('table_entry');
      document.getElementById("Course5_c").classList.remove('table_off');
      document.getElementById("Course5_c").classList.add('table_entry');
      document.getElementById("Course5_d").classList.remove('table_off');
      document.getElementById("Course5_d").classList.add('table_entry');
      document.getElementById("Course5_e").classList.remove('table_off');
      document.getElementById("Course5_e").classList.add('table_entry');
      $("#Course5_b").text(arr5[1]);
      $("#Course5_c").text(arr5[2]);
      $("#Course5_d").text(arr5[3]);
      $("#Course5_e").text(arr5[4]);
    } else {
      $this.text('Select');
      arr5 = [0, 0, 0, 0, 0];
      document.getElementById("Course5_b").classList.remove('table_entry');
      document.getElementById("Course5_b").classList.add('table_off');
      document.getElementById("Course5_c").classList.remove('table_entry');
      document.getElementById("Course5_c").classList.add('table_off');
      document.getElementById("Course5_d").classList.remove('table_entry');
      document.getElementById("Course5_d").classList.add('table_off');
      document.getElementById("Course5_e").classList.remove('table_entry');
      document.getElementById("Course5_e").classList.add('table_off');
    }
  });
  $("#selector6")
  .on("click", function() {
    let $this = $(this);
    $this.toggleClass('SeeMore2');
    if ($this.hasClass('SeeMore2')) {
      $this.text('Selected');
      arr6 = [0, 4, 2, .5, .15];
      document.getElementById("Course6_b").classList.remove('table_off');
      document.getElementById("Course6_b").classList.add('table_entry');
      document.getElementById("Course6_c").classList.remove('table_off');
      document.getElementById("Course6_c").classList.add('table_entry');
      document.getElementById("Course6_d").classList.remove('table_off');
      document.getElementById("Course6_d").classList.add('table_entry');
      document.getElementById("Course6_e").classList.remove('table_off');
      document.getElementById("Course6_e").classList.add('table_entry');
      $("#Course6_b").text(arr6[1]);
      $("#Course6_c").text(arr6[2]);
      $("#Course6_d").text(arr6[3]);
      $("#Course6_e").text(arr6[4]);
    } else {
      $this.text('Select');
      arr6 = [0, 0, 0, 0, 0];
      document.getElementById("Course6_b").classList.remove('table_entry');
      document.getElementById("Course6_b").classList.add('table_off');
      document.getElementById("Course6_c").classList.remove('table_entry');
      document.getElementById("Course6_c").classList.add('table_off');
      document.getElementById("Course6_d").classList.remove('table_entry');
      document.getElementById("Course6_d").classList.add('table_off');
      document.getElementById("Course6_e").classList.remove('table_entry');
      document.getElementById("Course6_e").classList.add('table_off');
    }
  });
  $("#selector7")
  .on("click", function() {
    let $this = $(this);
    $this.toggleClass('SeeMore2');
    if ($this.hasClass('SeeMore2')) {
      $this.text('Selected');
      arr7 = [0, 2, 1, 1, .75];
      document.getElementById("Course7_b").classList.remove('table_off');
      document.getElementById("Course7_b").classList.add('table_entry');
      document.getElementById("Course7_c").classList.remove('table_off');
      document.getElementById("Course7_c").classList.add('table_entry');
      document.getElementById("Course7_d").classList.remove('table_off');
      document.getElementById("Course7_d").classList.add('table_entry');
      document.getElementById("Course7_e").classList.remove('table_off');
      document.getElementById("Course7_e").classList.add('table_entry');
      $("#Course7_b").text(arr7[1]);
      $("#Course7_c").text(arr7[2]);
      $("#Course7_d").text(arr7[3]);
      $("#Course7_e").text(arr7[4]);
    } else {
      $this.text('Select');
      arr7 = [0, 0, 0, 0, 0];
      document.getElementById("Course7_b").classList.remove('table_entry');
      document.getElementById("Course7_b").classList.add('table_off');
      document.getElementById("Course7_c").classList.remove('table_entry');
      document.getElementById("Course7_c").classList.add('table_off');
      document.getElementById("Course7_d").classList.remove('table_entry');
      document.getElementById("Course7_d").classList.add('table_off');
      document.getElementById("Course7_e").classList.remove('table_entry');
      document.getElementById("Course7_e").classList.add('table_off');
    }
  });

  $("#selector8")
  .on("click", function() {
    let $this = $(this);
    $this.toggleClass('SeeMore2');
    if ($this.hasClass('SeeMore2')) {
      $this.text('Selected');
      arr8 = [0, 2, 1, 1, .75];
      document.getElementById("Course8_b").classList.remove('table_off');
      document.getElementById("Course8_b").classList.add('table_entry');
      document.getElementById("Course8_c").classList.remove('table_off');
      document.getElementById("Course8_c").classList.add('table_entry');
      document.getElementById("Course8_d").classList.remove('table_off');
      document.getElementById("Course8_d").classList.add('table_entry');
      document.getElementById("Course8_e").classList.remove('table_off');
      document.getElementById("Course8_e").classList.add('table_entry');
      $("#Course8_b").text(arr8[1]);
      $("#Course8_c").text(arr8[2]);
      $("#Course8_d").text(arr8[3]);
      $("#Course8_e").text(arr8[4]);
    } else {
      $this.text('Select');
      arr8 = [0, 0, 0, 0, 0];
      document.getElementById("Course8_b").classList.remove('table_entry');
      document.getElementById("Course8_b").classList.add('table_off');
      document.getElementById("Course8_c").classList.remove('table_entry');
      document.getElementById("Course8_c").classList.add('table_off');
      document.getElementById("Course8_d").classList.remove('table_entry');
      document.getElementById("Course8_d").classList.add('table_off');
      document.getElementById("Course8_e").classList.remove('table_entry');
      document.getElementById("Course8_e").classList.add('table_off');
    }
  });
  $("#selector9")
  .on("click", function() {
    let $this = $(this);
    $this.toggleClass('SeeMore2');
    if ($this.hasClass('SeeMore2')) {
      $this.text('Selected');
      arr9 = [0, 2, 1, 1, .75];
      document.getElementById("Course9_b").classList.remove('table_off');
      document.getElementById("Course9_b").classList.add('table_entry');
      document.getElementById("Course9_c").classList.remove('table_off');
      document.getElementById("Course9_c").classList.add('table_entry');
      document.getElementById("Course9_d").classList.remove('table_off');
      document.getElementById("Course9_d").classList.add('table_entry');
      document.getElementById("Course9_e").classList.remove('table_off');
      document.getElementById("Course9_e").classList.add('table_entry');
      $("#Course9_b").text(arr9[1]);
      $("#Course9_c").text(arr9[2]);
      $("#Course9_d").text(arr9[3]);
      $("#Course9_e").text(arr9[4]);
    } else {
      $this.text('Select');
      arr9 = [0, 0, 0, 0, 0];
      document.getElementById("Course9_b").classList.remove('table_entry');
      document.getElementById("Course9_b").classList.add('table_off');
      document.getElementById("Course9_c").classList.remove('table_entry');
      document.getElementById("Course9_c").classList.add('table_off');
      document.getElementById("Course9_d").classList.remove('table_entry');
      document.getElementById("Course9_d").classList.add('table_off');
      document.getElementById("Course9_e").classList.remove('table_entry');
      document.getElementById("Course9_e").classList.add('table_off');
    }
  });

  $("#selector10")
  .on("click", function() {
    let $this = $(this);
    $this.toggleClass('SeeMore2');
    if ($this.hasClass('SeeMore2')) {
      $this.text('Selected');
      arr10 = [0, 2, 1, 1, .75];
      document.getElementById("Course10_b").classList.remove('table_off');
      document.getElementById("Course10_b").classList.add('table_entry');
      document.getElementById("Course10_c").classList.remove('table_off');
      document.getElementById("Course10_c").classList.add('table_entry');
      document.getElementById("Course10_d").classList.remove('table_off');
      document.getElementById("Course10_d").classList.add('table_entry');
      document.getElementById("Course10_e").classList.remove('table_off');
      document.getElementById("Course10_e").classList.add('table_entry');
      $("#Course10_b").text(arr10[1]);
      $("#Course10_c").text(arr10[2]);
      $("#Course10_d").text(arr10[3]);
      $("#Course10_e").text(arr10[4]);
    } else {
      $this.text('Select');
      arr10 = [0, 0, 0, 0, 0];
      document.getElementById("Course10_b").classList.remove('table_entry');
      document.getElementById("Course10_b").classList.add('table_off');
      document.getElementById("Course10_c").classList.remove('table_entry');
      document.getElementById("Course10_c").classList.add('table_off');
      document.getElementById("Course10_d").classList.remove('table_entry');
      document.getElementById("Course10_d").classList.add('table_off');
      document.getElementById("Course10_e").classList.remove('table_entry');
      document.getElementById("Course10_e").classList.add('table_off');
    }
  });
//This function uses the button ton recalculate the totals
//I may eventually replace this with a change event that calculates after a selection is made
$("#clicker")
  .on("click", function() {
    let check = "1";
    var Total = arr1.map(function(num, idx) {
      return num + arr2[idx] + arr3[idx] + arr4[idx] + arr5[idx] + arr6[idx] + arr7[idx] + arr8[idx] + arr9[idx] + arr10[idx];
    });
    if (check == "1") {
    //One thing i learned is that you should always be using the alert output to test your if/then statements before coding in them. Alert lets me know if the if/then statements are actually even being read. 
      //alert("Hello!");
      $("#SBA_Total1").html(Total[1]);
      $("#SBA_Total2").html(Total[2]);
      $("#SBA_Total3").html(Total[3]);
      $("#SBA_Total4").html(Total[4]);
      $("#SBA_Total5").html(Total[5]);
      $("#SBA_Total6").html(Total[6]);
      $("#SBA_Total7").html(Total[7]);
      $("#SBA_Total8").html(Total[8]);
      $("#SBA_Total9").html(Total[9]);
      $("#SBA_Total10").html(Total[10]);
    }
  });
  