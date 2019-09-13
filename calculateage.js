var floatAge, floatDays, floatMonths,intWeeks, intFortnights;
     floatAge = parseFloat(prompt("Enter your age"));
     floatDays = parseFloat(floatAge*365.25).toFixed(2);
     floatMonths = parseFloat(floatAge*12).toFixed(2);
     intWeeks=parseFloat(floatDays/7).toFixed(2);
     intFortnights=parseFloat(floatDays/14).toFixed(2);
     alert("Current Age in Years =" + floatAge);
     alert("Current Age in Days =" + floatDays);
     alert("Current Age in Months ="+ floatMonths);
     alert("Current Age in weeks ="+ intWeeks);
     alert("Current Age in Fortnights=" + intFortnights);
     