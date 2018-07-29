var katzDeliLine = []

function takeANumber(katzDeliLine, name){
var lengthplusone = katzDeliLine.length + 1
var welcome = `Welcome, ${name}. You are number ${lengthplusone} in line.`
katzDeliLine.push(name)
return welcome}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var serving = `Currently serving ${katzDeliLine[0]}.` 
    katzDeliLine.shift()} else {
      serving = "There is nobody waiting to be served!"}
  return serving
}

function currentLine(katzDeliLine){
  
  if(katzDeliLine.length > 0){
    for(var i = 0; i <= katzDeliLine.length; i++){
      var line = `The line is currently:`
      var line2 = ` ${i}. ${katzDeliLine[0]},`
      var line4 = katzDeliLine[katzDeliLine.length]
  
    }
  } 
  else{line = "The line is currently empty."}
return line + line2 + line3}