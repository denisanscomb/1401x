
function splits() {
 
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // account clause 
  
  var account = ss.getRange(13,2).getValue()
  if(account != ""){
  var p = account.indexOf(" ");
  var l1 = account.length;
  
  if (p >= 0){
    
    var p1 = account.substring(0,p);
    var p2 = account.substring(p+1,l1);
    var account = p1 + "+" + p2;
    
    var l2 = account.indexOf(" ");
    if (l2 >= 0){
     
      var p3 = account.substring(0,l2);
      var p4 = account.substring(l2+1,l1);
      var account = p3 + "+" + p4;
      var l3 =account.indexOf(" ")
      
       if (l3 >= 0){
     
      var p5 = account.substring(0,l3);
      var p6 = account.substring(l3+1,l1);
      var account = p5 + "+" + p6;
         
       }
    }
    }
     var site = 'https://www.google.com/search?q=' + account + '&source=lnms&tbm=nws&sa=X&ved=0ahUKEwj1pfeLvurZAhVF42MKHXsnDSYQ_AUICigB&biw=1869&bih=751'
     var site1 = 'https://www.google.com/search?q=' + '"' + account + '"'+ '&source=lnms&tbm=nws&sa=X&ved=0ahUKEwj1pfeLvurZAhVF42MKHXsnDSYQ_AUICigB&biw=1869&bih=751'
     var site6 = 'https://www.google.com/search?q=' + account
     
  }
  
  Logger.log(site)
  
  
  // contact clause
  
  var person = ss.getRange(12,2).getValue();
  if(person != ""){
  var p = person.indexOf(" ");
  var l1 = person.length;
  
  if (p >= 0){
    
    var p1 = person.substring(0,p);
    var p2 = person.substring(p+1,l1);
    var person = p1 + "+" + p2;
    
    var l2 = person.indexOf(" ");
    if (l2 >= 0){
     
      var p3 = person.substring(0,l2);
      var p4 = person.substring(l2+1,l1);
      var person = p3 + "+" + p4;
      var l3 =person.indexOf(" ")
      
       if (l3 >= 0){
     
      var p5 = person.substring(0,l3);
      var p6 = person.substring(l3+1,l1);
      var person = p5 + "+" + p6;
         
       }
    }
    }
  
  var site2 = 'https://www.google.com/search?q=' + person + '&source=lnms&tbm=nws&sa=X&ved=0ahUKEwj1pfeLvurZAhVF42MKHXsnDSYQ_AUICigB&biw=1869&bih=751'
  var site3 = 'https://www.google.com/search?q=' + '"' + person + '"' + '&source=lnms&tbm=nws&sa=X&ved=0ahUKEwj1pfeLvurZAhVF42MKHXsnDSYQ_AUICigB&biw=1869&bih=751'
  var site4 = 'https://www.google.com/search?q=' + '"' + person + '"' + "+" + '"' + account + '"'+  '&source=lnms&tbm=nws&sa=X&ved=0ahUKEwj1pfeLvurZAhVF42MKHXsnDSYQ_AUICigB&biw=1869&bih=751'
  var site5 = 'https://www.google.com/search?q=' + person + '+' + 'LinkedIn'
  
   }
  
   
  // domain clause
  
  var domain = ss.getRange(16,2).getValue();
  if(domain != ""){
  var p = domain.indexOf(" ");
  var l1 = domain.length;
  
  if (p >= 0){
    
    var p1 = domain.substring(0,p);
    var p2 = domain.substring(p+1,l1);
    var domain = p1 + "+" + p2;
    
    var l2 = domain.indexOf(" ");
    if (l2 >= 0){
     
      var p3 = domain.substring(0,l2);
      var p4 = domain.substring(l2+1,l1);
      var domain = p3 + "+" + p4;
      var l3 =domain.indexOf(" ")
      
       if (l3 >= 0){
     
      var p5 = domain.substring(0,l3);
      var p6 = domain.substring(l3+1,l1);
      var domain = p5 + "+" + p6;
         
       }
    }
    }
  
  var site7 = 'https://www.google.com/search?q=' + '"' + domain + '"' + "+" + '"' + account + '"'+  '&source=lnms&tbm=nws&sa=X&ved=0ahUKEwj1pfeLvurZAhVF42MKHXsnDSYQ_AUICigB&biw=1869&bih=751'
  
   }
  
  
  // division clause
  
  var division = ss.getRange(17,2).getValue();
  if(division != ""){
  var p = division.indexOf(" ");
  var l1 = division.length;
  
  if (p >= 0){
    
    var p1 = division.substring(0,p);
    var p2 = division.substring(p+1,l1);
    var division = p1 + "+" + p2;
    
    var l2 = division.indexOf(" ");
    if (l2 >= 0){
     
      var p3 = division.substring(0,l2);
      var p4 = division.substring(l2+1,l1);
      var division = p3 + "+" + p4;
      var l3 =division.indexOf(" ")
      
       if (l3 >= 0){
     
      var p5 = division.substring(0,l3);
      var p6 = division.substring(l3+1,l1);
      var division = p5 + "+" + p6;
         
       }
    }
    }
  
  
  var site8 = 'https://www.google.com/search?q=' + '"' + division + '"' + "+" + '"' + account + '"'+  '&source=lnms&tbm=nws&sa=X&ved=0ahUKEwj1pfeLvurZAhVF42MKHXsnDSYQ_AUICigB&biw=1869&bih=751'
  
   }
  
  
  var html = "<script>window.open('" + site2 + "');window.open('" + site3 + "');window.open('" + site5 + "');google.script.host.close();</script>";
  
  if (account != ""){
    
     var html = "<script>window.open('" + site + "');window.open('" + site1 + "');window.open('" + site2 + "');window.open('" + site3 + "');window.open('" + site4 + "');window.open('" + site5 + "');window.open('" + site6 + "');google.script.host.close();</script>";
  }
  
  if(division != "" || domain != ""){
  
  var html = "<script>window.open('" + site + "');window.open('" + site1 + "');window.open('" + site2 + "');window.open('" + site3 + "');window.open('" + site4 + "');window.open('" + site5 + "');window.open('" + site6 + "');window.open('" + site7 + "');window.open('" + site8 + "');google.script.host.close();</script>";
  }
  
  var userInterface = HtmlService.createHtmlOutput(html);
  
  SpreadsheetApp.getUi().showModalDialog(userInterface, 'We are indexing...')
  
  
}


function gset() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var stat = ss.getRange(4,3).getValue();
  if (stat == 'Account Google Alert'){ var stat = 'Trackly Account Google News'; }
  else if(stat == 'Trackly Account Google News'){ var stat = 'No Account Only Google';}
  else if(stat == 'No Account Only Google'){ var stat = 'Account Google Alert';}
  
  ss.getRange(4,3).setValue(stat);
  
  
}


function accn() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var s1 = ss.getRange(4,5).getValue();
  if (s1 == 'See URLs below:'){ var s1 = 'No news pages'; }
  else if(s1 == 'No news pages'){ var s1 = 'See URLs below:';}
  
  ss.getRange(4,5).setValue(s1);
  
  
}

function lia() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var s2 = ss.getRange(4,7).getValue();
  if (s2 == 'See URLs below:'){ var s2 = 'No LinkedIn'; }
  else if(s2 == 'No LinkedIn'){ var s2 = 'See URLs below:';}
  
  ss.getRange(4,7).setValue(s2);
  
  
}


function gcon() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var s3 = ss.getRange(4,9).getValue();
  if (s3 == 'Contact Name Only'){ var s3 = 'Contact + Account'; }
  else if(s3 == 'Contact + Account'){ var s3 = 'Contact Name Only';}
  
  ss.getRange(4,9).setValue(s3);
  
  
}

function sixm() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var s4 = ss.getRange(4,11).getValue();
  if (s4 == 'Yes'){ var s4 = 'Emergency Measures'; }
  else if(s4 == 'Emergency Measures'){ var s4 = 'Yes';}
  
  ss.getRange(4,11).setValue(s4);
  
  
}

function dom() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var s5 = ss.getRange(4,13).getValue();
  if (s5 == 'Yes'){ var s5 = 'No'; }
  else if(s5 == 'No'){ var s5 = 'Yes';}
  
  ss.getRange(4,13).setValue(s5);
  
  
}

function div() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var s6 = ss.getRange(4,15).getValue();
  if (s6 == 'Yes'){ var s6 = 'No'; }
  else if(s6 == 'No'){ var s6 = 'Yes';}
  
  ss.getRange(4,15).setValue(s6);
  
  
}

function comjon() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var s7 = ss.getRange(4,17).getValue();
  if (s7 == 'Yes'){ var s7 = 'No'; }
  else if(s7 == 'No'){ var s7 = 'Yes';}
  
  ss.getRange(4,17).setValue(s7);
  
  
}


function pullnew() {
  
  // pulling from the appropriate sheet but will need a fudge
  // push to iDatabase
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var user = ss.getRange(5,2).getValue();
  
  var ss1 = SpreadsheetApp.openById("1UFFQMaToMeWh2gKIykh6-DjdRaQa4P9Jcps7O9aG_hE").getSheetByName(user); // the UI spreadsheet
  var data = ss1.getRange(3,1,250,35).getValues();
  
  for( var i = 0; i<247; i++){
  
    var next = data[i][27];
    Logger.log(next)
    if(next == 'no'){ 
      var contact = data[i][1];
      var account = data[i][0];
      ss.getRange(12,2).setValue(contact);          
      ss.getRange(13,2).setValue(account);          
        ss1.getRange(i+3,28).setValue('yes');
      var i =246;
    }
  }
  
}

function push(){
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = ss.getRange(3,1,25,15).getValues();
  
 var sixm = ss.getRange(4,11).getValue();
  if(sixm == "Yes"){
  
 pushtrackly()
 pushgoogle()
 pushLinkedIn()
 
  }
  
  else if(sixm == "Emergency Measures"){
   
  var ss1 = SpreadsheetApp.openById("10zMG7bZpCNa03DsxCWnG574jjzV7Og4h2rXLNvvbAy0").getSheetByName("Sheet1"); // 1440
    
  var contact = data[9][1];
  var account = data[10][1]; 
  var user = data[2][1];
  var company = data[3][1];
  var trackly = data[2][4];
  var linko = data[2][6];
  var num1 =  ss1.getLastRow();
  var p1 = num1 + 1;
    
  ss1.getRange(p1,1).setValue(user);
  ss1.getRange(p1,2).setValue(company);
  ss1.getRange(p1,3).setValue(contact);
  ss1.getRange(p1,4).setValue(account);
  ss1.getRange(p1,5).setValue(trackly);
  ss1.getRange(p1,6).setValue(linko);
  
  }
 
  ss.getRange(12,2).clearContent();
  ss.getRange(13,2).clearContent();
  ss.getRange(15,2).clearContent();
  ss.getRange(16,2).clearContent();
  ss.getRange(17,2).clearContent();
  ss.getRange(18,2).clearContent();
  ss.getRange(19,2).clearContent();
  ss.getRange(20,2).clearContent();
  ss.getRange(21,2).clearContent();
  ss.getRange(5,3,5,10).clearContent();
  
  
  ss.getRange(4,3).setValue('Account Google Alert');
  ss.getRange(4,5).setValue('See URLs below:');
  ss.getRange(4,7).setValue('See URLs below:');
  ss.getRange(4,9).setValue('Contact + Account');
  ss.getRange(4,11).setValue('Yes');
  ss.getRange(4,13).setValue('No');
  ss.getRange(4,15).setValue('No');
  
 

}

function pushtrackly() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = ss.getRange(3,1,25,15).getValues();
  var ss1 = SpreadsheetApp.openById("1fs-ua4NTqWQpIZJv8DsRYikEpb64E3aa2CaPGNMi8Hc").getSheetByName("Sheet1"); // 1410 Trackly Uploads  
  
  var user = data[2][1];
  var company = data[3][1];
  var contact = data[9][1];
  var account = data[10][1];
  var search = data[1][2];
  var URL = data[1][4]; 
  var URL1 = data[2][4];
  var URL2 = data[3][4];
  var URL3 = data[4][4];
  var URL4 = data[4][5];
  
  if(search == 'Trackly Account Google News'){
  var site1 = 'https://www.google.com/search?q=' + '"' + account + '"'+ '&source=lnms&tbm=nws&sa=X&ved=0ahUKEwj1pfeLvurZAhVF42MKHXsnDSYQ_AUICigB&biw=1869&bih=751'
  var stitle = 'Google News on ' + account; 
  
  
  var num = ss1.getLastRow();
  var p = num + 1;
  ss1.getRange(p,1).setValue(user);
  ss1.getRange(p,2).setValue(company);
  ss1.getRange(p,3).setValue(contact);
  ss1.getRange(p,4).setValue(account);
  ss1.getRange(p,5).setValue('Google News');
  ss1.getRange(p,6).setValue(site1);
  ss1.getRange(p,7).setValue(stitle);
  }
  
  if(URL == 'See URLs below:'){
    
    var stitle1 = account; 
   
  var num1 =  ss1.getLastRow();
  var p1 = num1 + 1;
  ss1.getRange(p1,1).setValue(user);
  ss1.getRange(p1,2).setValue(company);
  ss1.getRange(p1,3).setValue(contact);
  ss1.getRange(p1,4).setValue(account);
  ss1.getRange(p1,5).setValue('Company Site');
  ss1.getRange(p1,6).setValue(URL1);
  ss1.getRange(p1,7).setValue(stitle1);
  
    if (URL2 != ""){
       var p2 = p1 + 1;
   ss1.getRange(p2,1).setValue(user);
   ss1.getRange(p2,2).setValue(company);
   ss1.getRange(p2,3).setValue(contact);
   ss1.getRange(p2,4).setValue(account);
   ss1.getRange(p2,5).setValue('Company Site');
   ss1.getRange(p2,6).setValue(URL2);
   ss1.getRange(p2,7).setValue(stitle1);
      
      if (URL3 != ""){
       var p3 = p2 + 1;
   ss1.getRange(p3,1).setValue(user);
   ss1.getRange(p3,2).setValue(company);
   ss1.getRange(p3,3).setValue(contact);
   ss1.getRange(p3,4).setValue(account);
   ss1.getRange(p3,5).setValue('Company Site');
   ss1.getRange(p3,6).setValue(URL3);
   ss1.getRange(p3,7).setValue(stitle1);
      
        if (URL4 != ""){
       var p4 = p3 + 1;
   ss1.getRange(p4,1).setValue(user);
   ss1.getRange(p4,2).setValue(company);
   ss1.getRange(p4,3).setValue(contact);
   ss1.getRange(p4,4).setValue(account);
   ss1.getRange(p4,5).setValue('Company Site');
   ss1.getRange(p4,6).setValue(URL4);
   ss1.getRange(p4,7).setValue(stitle1);
       
        }
      }
      
    }
  }
  
  
}


function pushgoogle() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = ss.getRange(3,1,25,15).getValues();
  var ss1 = SpreadsheetApp.openById("115vgwQEsrF8Wkpk9YyVkMi7uoiMahSZMFGZtFYw9Lso").getSheetByName("Sheet1"); // 1420 Google Alerts Setup 
  
  var user = data[2][1];
  var company = data[3][1];
  var contact = data[9][1];
  var account = data[10][1];
  var search = data[1][2];
  var gcon = data[1][8];
  var domal = data[1][12];
  var dival = data[1][14];
  var domain = data[13][1];
  var division = data[14][1];
 
  Logger.log(division)
  
  if(search == 'Account Google Alert'){
  
  var num = ss1.getLastRow();
  var p = num + 1;
  ss1.getRange(p,1).setValue(user);
  ss1.getRange(p,2).setValue(company);
  ss1.getRange(p,3).setValue(contact);
  ss1.getRange(p,4).setValue(account);
  var gs1 = '"' + account + '"';
  ss1.getRange(p,5).setValue(gs1);
  }
  
  
  if(gcon == 'Contact Name Only'){
   
  var num1 =  ss1.getLastRow();
  var p1 = num1 + 1;
  ss1.getRange(p1,1).setValue(user);
  ss1.getRange(p1,2).setValue(company);
  ss1.getRange(p1,3).setValue(contact);
  ss1.getRange(p1,4).setValue(account);
  var gs2 = '"' + contact + '"';
  ss1.getRange(p1,5).setValue(gs2);
    
    
  }
    
  if(gcon == 'Contact + Account'){
   
  var num1 =  ss1.getLastRow();
  var p1 = num1 + 1;
  ss1.getRange(p1,1).setValue(user);
  ss1.getRange(p1,2).setValue(company);
  ss1.getRange(p1,3).setValue(contact);
  ss1.getRange(p1,4).setValue(account);
  var gs2 = '"' + contact + '" '+ '"' + account + '"';
  ss1.getRange(p1,5).setValue(gs2);
    
   }
  
   if(domal == 'Yes'){
   
  var num1 =  ss1.getLastRow();
  var p1 = num1 + 1;
  ss1.getRange(p1,1).setValue(user);
  ss1.getRange(p1,2).setValue(company);
  ss1.getRange(p1,3).setValue(contact);
  ss1.getRange(p1,4).setValue(account);
  var gs2 = '"' + account + '" '+ '"' + domain + '"';
  ss1.getRange(p1,5).setValue(gs2);
    
   }
  
  if(dival == 'Yes'){
   Logger.log('division trigger')
  var num1 =  ss1.getLastRow();
  var p1 = num1 + 1;
  ss1.getRange(p1,1).setValue(user);
  ss1.getRange(p1,2).setValue(company);
  ss1.getRange(p1,3).setValue(contact);
  ss1.getRange(p1,4).setValue(account);
  var gs2 = '"' + account + '" '+ '"' + division + '"';
  ss1.getRange(p1,5).setValue(gs2);
    
   }
 
}

function pushLinkedIn() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = ss.getRange(3,1,25,15).getValues();
  var ss1 = SpreadsheetApp.openById("11K6lb9ntdjHZJBxVTc8_knoijJtjmh3KG05qJ1VW9jM").getSheetByName("Sheet1"); // 1430 LinkedIn Setup
  
  var user = data[2][1];
  var company = data[3][1];
  var contact = data[9][1];
  var account = data[10][1];
  var LinkedIn = data[1][6];
  
  var LI1 = data[2][6];
  var LI2 = data[3][6];
  var LI3 = data[4][6];
  var LI4 = data[4][6];
  
  if(LinkedIn == 'See URLs below:'){
  
  
  var num = ss1.getLastRow();
  var p = num + 1;
  ss1.getRange(p,1).setValue(user);
  ss1.getRange(p,2).setValue(company);
  ss1.getRange(p,3).setValue(contact);
  ss1.getRange(p,4).setValue(account);
  ss1.getRange(p,5).setValue(LI1);
  
  
   if (LI2 != ""){
  var p1 = p + 1;
  ss1.getRange(p1,1).setValue(user);
  ss1.getRange(p1,2).setValue(company);
  ss1.getRange(p1,3).setValue(contact);
  ss1.getRange(p1,4).setValue(account);
  ss1.getRange(p1,5).setValue(LI2);
   }
  
    if (LI3 != ""){
       var p2 = p1 + 1;
   ss1.getRange(p2,1).setValue(user);
   ss1.getRange(p2,2).setValue(company);
   ss1.getRange(p2,3).setValue(contact);
   ss1.getRange(p2,4).setValue(account);
   ss1.getRange(p2,5).setValue(LI3);
    }
      
      if (LI4 != ""){
       var p3 = p2 + 1;
   ss1.getRange(p3,1).setValue(user);
   ss1.getRange(p3,2).setValue(company);
   ss1.getRange(p3,3).setValue(contact);
   ss1.getRange(p3,4).setValue(account);
   ss1.getRange(p3,5).setValue(LI4);
   
      }
    
    }
  }




