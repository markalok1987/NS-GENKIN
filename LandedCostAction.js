
var fx = '';
var fxctr = 100;
var msg='';
var errorMsg='';
function action(type)
{
	var recID=nlapiGetRecordId();
	var landedRec=nlapiLoadRecord('customrecord_ali_landedcost',recID);
	var grnCount=landedRec.getLineItemCount('recmachcustrecord_ali_lc_reference_grn');
	
	var _amountTot=0; 
	var _volume_weightTot=0; 
	var _chargeable_weightTot=0; 
	
	
}

function DateNowTime(){
	var now = new Date();
	var year = "" + now.getFullYear();
	var month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
	var day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
	var hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
	var minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
	var second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
	var today= month+'/'+day+'/'+year+':'+hour+':'+minute+':'+second  ;
    return today;
}
function formatAmount(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
