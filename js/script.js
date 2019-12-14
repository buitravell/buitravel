$(function(){
  var places = [
    { value: 'Hà Nội', data: 'HN' },
    { value: 'TP Hồ Chí Minh', data: 'HCM' },
    { value: 'Đà Lạt', data: 'DL' },
    { value: 'Sa Pa', data: 'SP' },
    { value: 'Đà Nẵng', data: 'DN' },
    { value: 'Hội An', data: 'HA' },
    
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: places,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});