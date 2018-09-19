 alert ("beantwoord deze vragen met ja of nee.")

 var geel = prompt ("is de kaas geel?")
 
 if (geel == "ja"){
 document.write("de kaas is geel.")	
 
 var gaten = prompt("zitten er gaten in de kaas?")

 }
 document.write("<br>")
 
 if (gaten == "ja"){
 document.write("de kaas heeft gaten.")
 
 var duur = prompt("is de kaas belachelijk duur?")
 
 }

 else if (gaten == "nee"){
 document.write("de kaas heeft geen gaten.")

 var steen = prompt("is de kaas zo hard als steen?")

 }
 document.write("<br>")

 if (steen == "ja"){
 document.write("de kaas is zo hard als steen.")
 document.write("<br>")
 document.write("u bedoelt pamigiano reggiano.")
 }

 else if (steen == "nee"){
 document.write("de kaas is niet zo hard als steen")
 document.write("<br>")
 document.write("u bedoelt goudse kaas.")	
 }

 if (duur == "ja"){
 document.write("de kaas is duur.")
 document.write("<br>")
 document.write("u bedoelt emmenthaler.")

 }

 else if (duur == "nee"){
 document.write("de kaas is niet duur.")
 document.write("<br>")
 document.write("u bedoelt leerdammer.")
 }

 else if (geel == "nee"){
 document.write("de kaas is niet geel.")	
 
 var schimmels = prompt("heeft de kaas blauwe schimmels?")
 
 }
 document.write("<br>")

 if (schimmels == "ja"){
 document.write("de kaas heeft blauwe schimmels.")

 var korst = prompt("heeft de kaas een korst?")
 
 }

 document.write("<br>")

 if (korst == "ja"){
 document.write("de kaas heeft een korst.")	
 document.write("<br>")
 document.write("u bedoelt bleu de rochbaron.")
 }

 else if (korst == "nee"){
 document.write("de kaas heeft geen korst.")
 document.write("<br>")
 document.write("u bedoelt foume d'ambert.")	
 }

 else if (schimmels == "nee"){
 document.write("de kaas heeft geen blauwe schimmels.")	

 var kaaskorst = prompt("heeft de kaas een korst?")
 
 }
 document.write("<br>")

 if (kaaskorst == "ja"){
 document.write("de kaas heeft een korst.")
 document.write("<br>")
 document.write("u bedoelt camembert.")	
 }

 else if (kaaskorst == "nee"){
 document.write("de kaas heeft geen korst.")
 document.write("<br>")
 document.write("u bedoelt mozzarella")	
 }

 

