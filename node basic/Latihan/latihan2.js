var gaji = 4500000;
var transport = 10000;
var infak = 50000;
var bpjs = 250000;
var pajak = gaji * p;
var p = 2.5/100;
var hari = 24;
var total = gaji - (pajak + bpjs + infak) + (transport*hari);
var potongan = pajak + bpjs + infak;
var tunjangan = transport + hari;



console.log("gaji kotor" + " :" + "Rp."+ gaji);
console.log("====================");

console.log("potongan pajak" + " :" + "Rp." + gaji*p);
console.log("potongan BPJS" + " :" + "Rp." + bpjs);
console.log("potongan infak" + " :" + "Rp." + infak);
console.log("====================");

console.log("Total Potongan : Rp." + (pajak + bpjs + infak));
console.log("====================");

console.log("tunjangan transport" + " :" +"Rp." + transport);
console.log("total hari kerja" + " :"  + hari);
console.log("====================");

console.log("total tunjangan" + " :" + "Rp." + transport*hari);
console.log("====================");

console.log("perhitungan gaji" + " :");
console.log("(gaji kotor - potongan) + tunjangan");
console.log("(4500000 - 412500) + 240000");
console.log("====================");

gaji_bersih = gaji - potongan + tunjangan;
console.log("gaji bersih  : Rp. " + total);


