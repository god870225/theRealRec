$(function () {
	var $activate_scrollator4 = $('#activate_scrollator4');

	$activate_scrollator4.bind('click', function () {
		var $document_body = $('body');
		
		if ($document_body.data('scrollator') === undefined) {
			$document_body.scrollator({
				custom_class: 'body_scroller'
			});
			$activate_scrollator4.val('destroy scrollator')
		} else {
			$document_body.scrollator('destroy');
			$activate_scrollator4.val('activate scrollator')
		}
	});

	$activate_scrollator4.trigger('click');
});




$(document).ready(function(){
	
 	$(document).on('click','#leftMenuLatest',function(){
 		location.href='latest.html?uuId='+request.getParameter('uuId')+'&telNo='+request.getParameter('telNo');
 	});
/* 	$(document).on('click','#leftMenuHistory',function(){
 		location.href='latest.html?telNo='+request.getParameter('telNo');
 	});*/
/* 	$(document).on('click','#leftMenuComHistiry',function(){
 		location.href='household.html?uuId='+request.getParameter('uuId')+'&telNo='+request.getParameter('telNo');
 	});
 	$(document).on('click','#leftMenuSmsHistory',function(){
 		location.href='mobile.html?uuId='+request.getParameter('uuId')+'&telNo='+request.getParameter('telNo');
 	});*/
 	$(document).on('click','#leftMenuComHistiry',function(){
 		location.href='mobile.html?uuId='+request.getParameter('uuId')+'&telNo='+request.getParameter('telNo');
 	}); 	
 	$(document).on('click','#leftMenuEvent',function(){
 		location.href='event.html?uuId='+request.getParameter('uuId')+'&telNo='+request.getParameter('telNo');
 	});
 	$(document).on('click','#leftMenuNotice',function(){
 		location.href='notice.html?uuId='+request.getParameter('uuId')+'&telNo='+request.getParameter('telNo');
 	});
 	$(document).on('click','.alen_logo',function(){
 		location.href='index.html?uuId='+request.getParameter('uuId')+'&telNo='+request.getParameter('telNo');
 	});
 	$(document).on('click','#settingBtn',function(){
 		location.href='setting.html?uuId='+request.getParameter('uuId')+'&telNo='+request.getParameter('telNo');
 	});
 	$(document).on('click','#leftMenuLogOut',function(){
	  	var storage = window.localStorage;
	  	localStorage.removeItem("id");
	  	localStorage.removeItem("pw");		
		location.href='../login.html';
 	});
	/*   $("#allCheck").on("click",function(){
alert();
   var _value = $(this).is(":checked");
   $('input:checkbox[name="subCheck"]').each(function () { 
    this.checked = _value; 
   });
  });*/
 });
 
function replaceAll(content,before,after)
{
    return content.split(before).join(after);
}	

 
 function isNull(val)
{
    if (val == null || val == undefined || val == "") {
    	return true;
    }
    return false;
}

function alltrim(str) {
	var ret = "";
	if (str.length == 0) return ret;

	for (var i=0; i<str.length; i++) {
		if (str.charAt(i) != " ") ret += str.charAt(i);
	}
	return ret;
}	

//허용된 byte만큼 입력도중 실시간으로 string자르기
//<textArea>등에 사용하면 됩니다.
//onKeyup="checkByte(this,제한할byte수,"현재byte정보뿌려줄영역의ID");"
//마지막 인자는 선택사항입니다.
//ex)  onKeyup="checkByte(this,200,'nowByteShowArea');"
function getBytes(aquery) {
 var tcount = 0;

 tmpStr = new String(aquery);
 temp = tmpStr.length;
 
 for (k=0;k<temp;k++)
 {
     onechar = tmpStr.charAt(k);
     if (escape(onechar) =='%0D') { } else if (escape(onechar).length > 4) { tcount += 2; } else { tcount++; }
 }

	return tcount;
}
function getByte(sChar) {
	var c = 0;
	var u = escape(sChar);
	if (u.length < 4) { // 반각문자 : 기본적인 영문, 숫자, 특수기호
		c++; // + 1byte
	} else {
		var s = parseInt(sChar.charCodeAt(0));
		if (((s >= 65377)&&(s <= 65500))||((s >= 65512)&&(s <= 65518))) // 반각문자 유니코드 10진수 범위 : 한국어, 일본어, 특수문자
			c++; // + 1byte
		else // 전각문자 : 위 조건을 제외한 모든 문자
			c += 2; // + 2byte
	}
	return c;
}
function cutOverText(obj,maxByte,viewAreaID) {
	var sString = obj.value;
	var c = 0;
	for (var i=0; i<sString.length; i++) {
		c += parseInt(getByte(sString.charAt(i)));
		if (c>maxByte) {
			obj.value = sString.substring(0,i);
			break;
		}
	}
	showNowByte(obj.value,viewAreaID);
}
function showNowByte(sString,viewAreaID) {
	var vArea = document.getElementById(viewAreaID);
	if (vArea) vArea.innerHTML = getBytes(sString);
}
function checkByte(obj,maxByte,viewAreaID) {
	var sString = obj.value;
	showNowByte(sString,viewAreaID);
	if (getBytes(sString) > maxByte) {
		alert("최대 "+maxByte+"Bytes(한글 "+(maxByte/2)+"자/영문 "+maxByte+"자)까지만 입력하실 수 있습니다.");
		cutOverText(obj,maxByte,viewAreaID);
	}
}

function onlyNumberInput(){
	var code = window.event.keyCode;

 	if ((code > 34 && code < 41) || (code > 47 && code < 58) || (code > 95 && code < 106) || code == 8 || code == 9 || code == 46){
  		window.event.returnValue = true;
  		return;
 	}
 	window.event.returnValue = false;
}


function emailcheck(strValue)
{
var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
//입력을 안했으면
if(strValue.lenght == 0)
{return false;}
//이메일 형식에 맞지않으면
if (!strValue.match(regExp))
{return false;}
return true;
}

//개발IP셋팅
function commonIp(){
	var commonIp = "";
	var dev = true;
	if(dev){
		commonIp = "http://182.162.84.177:80";
		//commonIp = "117.52.97.40";
	}else{
		commonIp = "http://117.52.97.40:80";
	}
	return commonIp; 
}


function chkPwd(str){

	 var pw = str;

	 var num = pw.search(/[0-9]/g);

	 var eng = pw.search(/[a-z]/ig);

	 var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

	 

	 if(pw.length < 8 || pw.length > 20){

		 alert("8자리 ~ 20자리 이내로 입력해주세요.");

	  return false;

	 }

	 if(pw.search(/₩s/) != -1){

	  alert("비밀번호는 공백업이 입력해주세요.");

	  return false;

	 } if(num < 0 || eng < 0 || spe < 0 ){

	  alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");

	  return false;

	 }

	 

	 return true;

	}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function parseAppCoDiv(appCoCd) {
	var appCoCdNm ="";
	switch (appCoCd) {
	  case 'A01'  : appCoCdNm ='레져/문화'; break;
	  case 'B01'  : appCoCdNm ='뷰티/미용'; break;
	  case 'C01'  : appCoCdNm ='카페/베이커리'; break;
	  case 'E01'  : appCoCdNm ='주유'; break;
	  case 'E02'  : appCoCdNm ='음식점'; break;
	  case 'F01'  : appCoCdNm ='프렌차이즈'; break;
	  case 'M01'  : appCoCdNm ='생활/마트'; break;
	  case 'M02'  : appCoCdNm ='의료/건강'; break;
	  case 'S01'  : appCoCdNm ='쇼핑'; break;
	  case 'T01'  : appCoCdNm ='교통'; break;
	  case 'T02'  : appCoCdNm ='통신'; break;
	  default   : appCoCdNm ='기타'; break;
	}			
	return appCoCdNm;
}


function to_date_format(date_str, gubun){
    var yyyyMMdd = String(date_str);
    var sYear = yyyyMMdd.substring(0,4);
    var sMonth = yyyyMMdd.substring(4,6);
    var sDate = yyyyMMdd.substring(6,8);

    return sYear + gubun + sMonth + gubun + sDate;
}

function instFormat(gubun){
	var instFormat ="";
	switch (gubun) {
		case '일시불'  : instFormat ='일시불'; break;		
		default   : instFormat =gubun+'개월'; break;
	}
	return instFormat;
}



function phoneFomatter(num,type){
    
    var formatNum = '';
    
    if(num.length==11){
        if(type==0){
            formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');
        }else{
            formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        }
    }else if(num.length==8){
        formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
    }else{
        if(num.indexOf('02')==0){
            if(type==0){
                formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');
            }else{
                formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
            }
        }else{
            if(type==0){
                formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');
            }else{
                formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            }
        }
    }
    return formatNum;
    
}


function commonUserData(){
	
    $.ajax({
        type: "post",
        url : commonIp()+"/theReal/receipt/startUserData.do",
        data: {
        	telNo  	: request.getParameter('telNo'),  
        },
        success: fn_commonUserData,
        error: fn_whenError
	});	
}

function fn_commonUserData(resdata){

	 var str = "";
	 var str2 = "";
	var resultData = resdata.resultMap;
	var cardCashDiv = "";
	$(".pf_txt").empty();
	$(".left_menu").empty();
	resultCnt = resultData.length;
	if(resultData.length>0){
		for(var i=0; i<resultData.length; i++){
			str += '<h2>'+resultData[i].USER_NM+'</h2>';
			str += '<h1>'+resultData[i].EMAIL+'</h1>';
			if(resultData[i].PUSH_YN == "Y"){
				$("#alarmBtn").prop('checked', true) ;
			}else{
				$("#alarmBtn").prop('checked', false) ;
			}
			//str += '<p>쿠폰 <span>2</span>개 <span> &emsp; 포인트 </span><span>1721</span>p</p>';
		}
	}		 
		 
	else{
		str += '<h2></h2>';
		str += '<h1></h1>';
		//str += '<p>쿠폰 <span>2</span>개 <span> &emsp; 포인트 </span><span>1721</span>p</p>';		
	}
/*	str += '<div class="alen_setting" id="settingBtn">';
	str += '<a href="javascript:void(0);"><i class="icon icon-form-settings"></i></a>';
	str += '</div>	';*/
	
	$(".pf_txt").append(str);
	
	str2 += '<ul>';
	str2 += '	<li id="leftMenuLatest">';
	str2 += '    <div class="leftm_box leftm01"></div>';
	str2 += '    <a href="javascript:void(0)">최근사용내역</a>';
	str2 += '    </li>';
/*	str2 += '	<li id="leftMenuHistory">';
	str2 += '    <div class="leftm_box leftm02"></div>';
	str2 += '    <a href="javascript:void(0)">영수증확인</a>';
	str2 += '    </li>';*/
	str2 += '	<li id="leftMenuComHistiry">';
	str2 += '    <div class="leftm_box leftm03"></div>';
	str2 += '    <a href="javascript:void(0)">지출내역</a>';
	str2 += '    </li>';
/*	str2 += '	<li id="leftMenuSmsHistory">';
	str2 += '    <div class="leftm_box leftm07"></div>';
	str2 += '    <a href="javascript:void(0)">모바일영수증</a>';
	str2 += '    </li>';*/
	str2 += '	<li id="leftMenuEvent">';
	str2 += '    <div class="leftm_box leftm04"></div>';
	str2 += '    <a href="javascript:void(0)">이벤트</a>';
	str2 += '    </li>';
	str2 += '	<li id="leftMenuNotice">';
	str2 += '    <div class="leftm_box leftm05"></div>';
	str2 += '    <a href="javascript:void(0)">공지사항</a>';
	str2 += '    </li>';
	str2 += '    </li>';
/*	str2 += '	<li id="leftMenuLogOut">';
	str2 += '    <div class="leftm_box leftm05"></div>';
	str2 += '    <a href="javascript:void(0)">로그아웃</a>';
	str2 += '    </li>';*/
	str2 += '	<li id="settingBtn">';
	str2 += '    <div class="leftm_box leftm06"></div>';
	str2 += '    <a href="javascript:void(0)">설정</a>';
	str2 += '    </li>';
	str2 += '</ul>';	
	$(".left_menu").append(str2);
	
}

function fn_whenError(){
	alert("실패.");
}


var Request = function()
{
    this.getParameter = function( name )
    {
        var rtnval = '';
        var nowAddress = unescape(location.href);
        var parameters = (nowAddress.slice(nowAddress.indexOf('?')+1,nowAddress.length)).split('&');
        for(var i = 0 ; i < parameters.length ; i++)
        {
            var varName = parameters[i].split('=')[0];
            if(varName.toUpperCase() == name.toUpperCase())
            {
                rtnval = parameters[i].split('=')[1];
                break;
            }
        }
        return rtnval;
    }
}



