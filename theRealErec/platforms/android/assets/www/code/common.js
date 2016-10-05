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
		commonIp = "http://192.168.0.39:8080";
		//commonIp = "117.52.97.40";
	}else{
		commonIp = "http://117.52.97.40:80";
	}
	return commonIp; 
}