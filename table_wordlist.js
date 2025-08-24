let content = word_list.join("<br>")

const CONTENT = content.split("<br>")

let HTMLTableOutput = "";

for (let i = 0; i < CONTENT.length; i++) {
  HTMLTableOutput += "<tr><td>" + CONTENT[i] + "</td></tr>" + "\n";
}

HTMLTableOutput = HTMLTableOutput.replace(/,/g, "</td><td>");

if (HTMLTableOutput !== "<tr><td></td></tr>\n") {
      document.getElementById("table_wordlist").innerHTML =
        "<table style=&#34width:100%&#34>\n" + HTMLTableOutput + "</table>";
  } else {
   //nothing!!
  }
