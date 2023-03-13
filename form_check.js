var ractive = new Ractive({
    el: '#container',
    template: '#template',
    data: {}
  });
  function isEmpty(str)
{
if (str.length == 0)
{
return true
}
else
{
return false
}
}

function validate(form)
{
    return (
        checkString(form.elements["f_imie"].value, 'Bledne imie') &&
        checkString(form.elements["f_nazwisko"].value,' Bledne nazwisko') &&
        checkString(form.elements["f_kod"].value,' Bledny kod pocztowy') &&
        checkString(form.elements["f_ulica"].value,' Bledna ulica/osiedle') &&
        checkEmail(form.elements["f_email"].value) &&
        checkStringAndFocus(form.elements["f_imie"], 'Błędne imię') &&
        checkString(form.elements["f_miasto"].value,' Bledne miasto') )
}

// zwraca wartosc true jesli przekazany argument
// to ciag bialych znakow
function isWhiteSpace(str)
{
var ws = "\t\n\r "
for (i = 0; i < str.length; i++)
{
var c = str.charAt(i)
if ( ws.indexOf(c) == -1)
return false
}
return true
}

// zwraca wartosc prawda jesli przekazany argument to niepusty lancuch,
// ktory nie zawiera samych bialych znakow
function checkString(str, msg)
{
if ( isWhiteSpace(str) || isEmpty(str))
{
alert(msg)
return false
}
else
return true
}
// zwraca wartosc prawda jesli przekazany
// argument to poprawny adres email
function checkEmail(str)
{
if (isWhiteSpace(str))
alert("Podaj wlasciwy e-mail")
else
{
at = str.indexOf("@")
if (at < 1)
{
alert("Nieprawidlowy e-mail")
return false
}
else
{
var l = -1
for (var i = 0; i < str.length; i++)
{
var c = str.charAt(i)
if ( c == ".")
l = i
}
if ( (l < (at+2) ) || (l == str.length-1) )
alert("Nieprawidlowy e-mail")
}
return true
}
}

function checkStringAndFocus(obj, msg)
{
var str = obj.value
var errorFieldName = "e_" + obj.name.substr(2,obj.name.length)
if ( isWhiteSpace(str) || isEmpty(str))
{
document.getElementById(errorFieldName).innerHTML = msg
startTimer(errorFieldName)
obj.focus()
return false
}
else
return true
}

errorField = ""
function startTimer(fName)
{
errorField = fName
window.setTimeout("clearError(errorField)", 5000)
}
function clearError(objName)
{
document.getElementById(objName).innerHTML = ""
}